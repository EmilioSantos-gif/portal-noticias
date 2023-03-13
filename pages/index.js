import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Link from 'next/link'
import {API_URL} from '@/config/index'
import NewsItem from '@/components/NewsItem'

export default function HomePage({ news }) {
  return (
    <div>
      <Layout>
        <h1>Ultimas Noticias</h1>
        {news.length === 0 && <h3>No news</h3>}
        {news.map((item) => (
          <NewsItem key={item.id} news={item} />
        ))}
        {news.length > 0 && (
          <Link legacyBehavior href="/news">
            <a className="btn-secondary">Ver todas las noticias</a>
          </Link>
        )}
      </Layout>
    </div>
  );
}

export async function getStaticProps(){
  //const res = await fetch(`${API_URL}/api/news`);
  //const res = await fetch(`${API_URL}/api/sports?populate=*`);
  //const res = await fetch('http://localhost:1337/api/sports?populate=*');
  const res = await fetch('http://localhost:1337/api/sports');

  const news = await res.json();

  return {
    props: { news: news.slice(0,5) },
    revalidate: 1
  };
}
/*
export async function getServerSideProps({ query: { slug }}){

  const res = await fetch('http://localhost:1337/api/sports');
  const singleNews = await res.json();
  return {
    props: { news: news.slice(0,5) },
    revalidate: 1
  };
}*/