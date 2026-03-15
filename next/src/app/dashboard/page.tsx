import Pagination from "@/components/pagination/pagination";
import ProductCard from "@/components/product-card/product-card";
import ProductSearch from "@/components/product-search/product-search";
import { getProducts } from "@/services/product-service";

type SearchParams = { q?: string; page?: string; limit?: string };

export default async function Dashboard({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const q = params.q ?? "";
  const page = Number(params.page ?? "1");
  const limit = Number(params.limit ?? "10");
  const skip = (page - 1) * limit;
  const { products = [] } = await getProducts({ search: q, limit, skip });
  const totalProducts = products.length;

  return (
    <div>
      <h1>Dashboard</h1>
      <ProductSearch />
      <div className="product-grid" style={{ display: "flex" }}>
        {products.map((p: any) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <Pagination
        current={page}
        q={q}
        limit={limit}
        totalProducts={totalProducts}
      />
    </div>
  );
}
