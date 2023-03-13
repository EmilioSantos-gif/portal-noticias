import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <Layout>
        <h1>Home</h1>
        <Link href="/about">
          About
        </Link>
      </Layout>
    </div>
  );
}
