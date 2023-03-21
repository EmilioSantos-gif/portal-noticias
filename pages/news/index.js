import Layout from '@/components/Layout'
import Link from 'next/link'
import {API_URL} from '@/config/index'
import NewsItem from '@/components/NewsItem'
import styles from '@/styles/News.module.css'
import { use, useEffect, useState } from 'react'


export default function News() {

  const [news, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect( () => {
    setIsPending(true)
    fetch('http://localhost:1337/api/sports?populate=*')
    .then((res) => res.json())
    .then((data) => {
      setData(data.data)
      setIsPending(false)
    })
  }, [])

  return (
    <div>
      <Layout>
        <h1>Noticias</h1>
        {news && news.length === 0 && <h3>No news</h3>}
        {news && news.map((i) => (
          <NewsItem key={i.id} news={i.attributes} id={i.id}/>
        ))}
        <Link legacyBehavior href="/">
            <a className={styles.back}>Volver atrás</a>
        </Link>
      </Layout>
    </div>
  );
}

/*
export async function getServerSideProps({ query: { slug }}){
  const res = await fetch(`http://localhost:3000/api/news/${slug}`);
  const singleNews = await res.json();
  return {
      props: {
          news: singleNews[0],
      },
  };
}
*/

// export async function getStaticProps(){
//   const res = await fetch(`http://localhost:3000/api/news`);
//   const news = await res.json();

//   return {
//     props: { news },
//     revalidate: 1
//   };
// }


// export async function getStaticProps(){
  

//   const res = await fetch('http://localhost:3000/api/news/');
//   const singleNews = await res.json();
//   return {
//     props: { news: singleNews.slice(0,5) },
//     revalidate: 1
//   };
// }