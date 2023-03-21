import styles from "@/styles/NewsItem.module.css";
import Image from "next/image";
import Link from "next/link";

export default function NewsItem(props) {

  const {id, news} = props;

  console.log("props====>", props)

  return (
    <div className={styles.news}>
      <div className={styles.img}>
        <Image
          src={news.image ? news.image.data.attributes.formats.thumbnail.url: ""}
          width={150}
          height={100}
          alt="News thumbnail"
        />
      </div>
        <div className={styles.info}>
            <span>
                {news.date} {news.time}
            </span>
            <h3>{news.name}</h3>
        </div>
        <div className={styles.link}>
            <Link legacyBehavior href={`/news/${id}`}>
                <a className="btn">Leer más</a>
            </Link>
        </div>
    </div>
  );
}
