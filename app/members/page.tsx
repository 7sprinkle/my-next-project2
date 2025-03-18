import Image from "next/image";
import { getMemberList } from "@/app/_libs/microcms";
import { MEMBER_LIST_LIMIT } from "../_constants";
import styles from "./page.module.css";
import { url } from "inspector";


export default async function Page() {
  const data = await getMemberList({ limit: MEMBER_LIST_LIMIT });
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image src={member.image.url} alt="" width="240" height="240" />
              <dl>
                <dd className={styles.name}>{member.name}</dd>
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.profile}>{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}