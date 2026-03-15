
export async function getProducts({
  search = "",
  skip = 0,
  limit = 10
}: {
  search?: string
  skip?: number
  limit?: number
}) {

  const url = `https://dummyjson.com/products/search?q=${search}&skip=${skip}&limit=${limit}`

  const res = await fetch(url, {
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  return res.json()
}
