import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css"
import Category from "../Category";
import Date from "../Date";
import { News } from "@/app/_libs/microcms";

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p>記事がありません。</p>
  }
  return (
    <ul>
      {news.map((article) => (
        <li key={article.id} className={styles.list}>
          <Link href={`/news/${article.id}`}>
            <div className={styles.link}>
              {article.thumbnail ? (
                <Image src={article.thumbnail.url} alt="" className={styles.image} height={article.thumbnail.height} width={article.thumbnail.width} />
              ) : (
                <Image className={styles.image} src="/no-image.png" alt="No Image" width={1200} height={630} />
              )}
              <dl className={styles.content}>
                <dt className={styles.title}>{article.title}</dt>
                <dd className={styles.meta}>
                  <Category category={article.category} />
                  <Date date={article.publishedAt ?? article.createdAt} />
                </dd>
              </dl>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}