import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
}

const SearchDebounce = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        setError("");

        const url = `https://dummyjson.com/products/search?q=${encodeURIComponent(
          search
        )}`;

        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data.products || []);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [search]);

  return (
    <div>
      <h1>Search Debounce</h1>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && products.length === 0 && (
        <p>No products found</p>
      )}

      {!loading &&
        !error &&
        products.map((item) => (
          <div key={item.id} style={{ display: "flex" }}>
            <p>{item.title}</p>
          </div>
        ))}
    </div>
  );
};

export default SearchDebounce;