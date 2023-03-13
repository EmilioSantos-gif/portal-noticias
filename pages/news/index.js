import Layout from '@/components/Layout'
import Link from 'next/link'
import {API_URL} from '@/config/index'
import NewsItem from '@/components/NewsItem'
import styles from '@/styles/News.module.css'

export default function News({ news }) {
  return (
    <div>
      <Layout>
        <h1>Noticias</h1>
        {news.length === 0 && <h3>No news</h3>}
        {news.map((item) => (
          <NewsItem key={item.id} news={item} />
        ))}
        <Link legacyBehavior href="/">
            <a className={styles.back}>Volver atrás</a>
        </Link>
      </Layout>
    </div>
  );
}

export async function getStaticProps(){
  const res = await fetch(`${API_URL}/api/news`);
  const news = await res.json();

  return {
    props: { news },
    revalidate: 1
  };
}