"use client";

import { useRouter } from "next/navigation";

const ProductSearch = () => {
  const router = useRouter();
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    router.push(`dashboard?q=${encodeURIComponent(query)}`);
  };

  
  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default ProductSearch;
