import { fetchNameInfo } from "$lib/utils/api.js"

export async function load({ url, fetch }) {
  const name = url.searchParams.get("name")
  return await fetchNameInfo(name, fetch)
}
