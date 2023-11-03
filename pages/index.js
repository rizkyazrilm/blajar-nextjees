import Head from 'next/head'
import Navbar from './components/navbar'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Gilang Eka Pratama</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={`${styles.main} ${inter.className} ${styles.center}`}>
        <h1>Hi!</h1>
        <h1>My name is Gilang Eka Pratama</h1>
      </main>
    </>
  )
}
