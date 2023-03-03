import Head from 'next/head'
import { Inter } from '@next/font/google'
import WeddingHeader from '@/components/molecules/WeddingHeader'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Iris & Vincent trouwen 2023</title>
        <meta name="description" content="Iris en vincent trouwen 2023" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="px-2"> 
        <WeddingHeader />
      </main>
    </>
  )
}
