import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomeSection from '../pages/homeSection/homeSection'
import Nav from '../components/nav/nav'
import { createMuiTheme, ThemeProvider  } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#bc477b',
      main: '#880e4f',
      dark: '#560027',
      contrastText: '#ffffff',
    },    
    background: {
      default: "#bdbdbd"
    },
    secondary: {
      light: '#b6ffff',
      main: '#81d4fa',
      dark: '#4ba3c7',
      contrastText: '#000000',
    },
  },
});

export default function Home () {
  return (
    <ThemeProvider theme={theme}>
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
        <Typography varient="h6" component="body1"> Powered by{' '} </Typography>
          <img src='/logo.png' alt='Cybermonkeys Logo' className={styles.logo} />
        </a>
      </footer>
    </ThemeProvider>
  )
}
