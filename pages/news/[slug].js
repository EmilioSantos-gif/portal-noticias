import { useRouter } from "next/router"
import Layout from "@/components/Layout";
import Image from "next/image"
import { API_URL } from '@/config/index'
import Link from "next/link";
import styles from "@/styles/News.module.css"
import fetchApi from "../api/news";
import { use, useEffect, useState } from 'react'

export default function SingleNews() {
    
    const router = useRouter();
    console.log("router====>", router.query.slug);

    let id = router.query.slug;
    console.log("id====>", id);


    const [news, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    
    useEffect( () => {
    if (id){
        setIsPending(true)
        fetch(`http://localhost:1337/api/sports/${id}?populate=*`)
        .then((res) => res.json())
        .then((data) => {
          setData(data.data.attributes)
          setIsPending(false)
        })
    }
    }, [router])

    console.log("news=====>",news)

  return (
    <Layout>
        <div className={styles.news}>
            <span>{news && news.date} {news && news.time}</span>
            <h1>{news && news.name}</h1>
            {news && news.image && (
                <div className={styles.image}>
                    <Image src={news.image.data.attributes.url} width={900} height={600} />
                </div>
            )}
            <p>{news && news.detail}</p>
            <Link legacyBehavior href="/news">
                <a className={styles.back}>Volver atrás</a>
            </Link>
        </div>  
    </Layout>
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