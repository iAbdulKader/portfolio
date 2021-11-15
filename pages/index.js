import Head from 'next/head';
import DashBoard from '../components/Home';
import About from '../components/About';
import Technologies from '../components/Technologies';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>iAbdulKader | Home</title>
        <meta name="description" content="Portfoilo of iAbdulKader" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashBoard />
      <About />
      <Technologies />
    </>
  )
}
