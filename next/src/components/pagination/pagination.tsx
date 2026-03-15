"use client";
import { useRouter } from "next/navigation";

const Pagination = ({
  current,
  q,
  limit,
  totalProducts,
}: {
  current: number;
  q: string;
  limit: number;
  totalProducts: number;
}) => {
  const router = useRouter();
  
  const handlePageChange = (value: string) => {
    if (value === "prev") {
      router.push(`dashboard?q=${q}&page=${current - 1}&limit=${limit}`);
    }
    if (value === "next") {
      router.push(`dashboard?q=${q}&page=${current + 1}&limit=${limit}`);
    }
  };

  return (
    <div>
      <button disabled={current === 1} onClick={() => handlePageChange("prev")}>
        {"prev <-"}
      </button>
      <button
        disabled={totalProducts < limit}
        onClick={() => handlePageChange("next")}
      >
        {" "}
        {"next ->"}{" "}
      </button>
    </div>
  );
};

export default Pagination;
