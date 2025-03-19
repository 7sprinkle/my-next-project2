import { getNewsList } from "../_libs/microcms";
import NewsList from "../_componets/NewsList";
import Pagination from "../_componets/Pagination";
import SearchField from "../_componets/SearchField";
import { NEWS_LIST_LIMIT } from "@/app/_constants/index";

export const revalidate = 0;

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  })
  return (
    <>
      <SearchField />
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </>
  )
}