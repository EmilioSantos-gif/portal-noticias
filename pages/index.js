import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Link from 'next/link'
import {API_URL} from '@/config/index'
import NewsItem from '@/components/NewsItem'
import { use, useEffect, useState } from 'react'


export default function HomePage() {

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
  
  console.log("news====>",news)

  return (
    <div>
      {
      <Layout>
        <h1>Últimas Noticias</h1>
        {isPending && <p>Cargando...</p>}

        {news && news.length === 0 && <h3>No news</h3>}
        {news && news.map(i => (  
          <NewsItem key={i.id} news={i.attributes} id={i.id}/>
        ))}
        {news && news.length > 0 && (
          <Link legacyBehavior href="/news">
            <a className='btn-secondary'>Ver todas las noticias</a>
          </Link>
        )}

      </Layout>
      }
    </div>
  );
}


/*

{news && news.map((item) => (
  <NewsItem key={item.id} news={item} />
))}
{news && news.length > 0 && (
  <Link legacyBehavior href="/news">
    <a className="btn-secondary">Ver todas las noticias</a>
  </Link>
)}

export async function getStaticProps(){
  
  debugger;
  console.log("here")

  const res = await fetch('http://localhost:3000/api/news');
  console.log("here2")
  
  const singleNews = await res.json();
  return {
    props: { news: singleNews.slice(0,5) },
    revalidate: 1
  };
}
*/

// export async function getServerSideProps() {
//   const data = await fetch('http://localhost:3000/api/news');

//   const replacer = (key, value) => {
//     if (value instanceof Map) {
//       return [...value];
//     } else if (key === Symbol.for('realm')) {
//       return Object.entries(value);
//     } else if (key === Symbol.for('state') && typeof value === 'object' && value !== null) {
//       return Object.entries(value);
//     } else {
//       return value;
//     }
//   };
  
//   const jsonString = JSON.stringify(data, replacer, 2);
//   console.log(jsonString);

  //const res = await response.json();
  //console.log("response======>",res);

//   return {
//     props: {
//       news: jsonString
//     },
//   };
// }



//const res = await fetch(`${API_URL}/api/news`);
//const res = await fetch(`${API_URL}/api/sports?populate=*`);
//const res = await fetch('http://localhost:1337/api/sports?populate=*');

// export async function getStaticProps(){
//   const res = await fetch('http://localhost:1337/api/sports');

//   const news = await res.json();

//   return {
//     props: { news: news.slice(0,5) },
//     revalidate: 1
//   };
// }
/*
export async function getServerSideProps({ query: { slug }}){

  const res = await fetch('http://localhost:1337/api/sports');
  const singleNews = await res.json();
  return {
    props: { news: news.slice(0,5) },
    revalidate: 1
  };
}*/