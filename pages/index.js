import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomeSection from '../pages/homeSection/homeSection'
import Nav from '../components/nav/nav'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
      </Head>
      <Nav />
      <HomeSection />
      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/logo.png' alt='Cybermonkeys Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
