import Head from 'next/head'
import HomeSection from '../components/homeSection/homeSection'
import Nav from '../components/nav/nav'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Footer from '../components/footer/footer'

const theme = createMuiTheme({
  palette: {
    common: {
      black: '#000',
      white: 'rgba(255, 255, 255, 1)'
    },
    background: {
      paper: 'rgba(27, 106, 144, 1)',
      default: 'rgba(255, 255, 255, 1)'
    },
    primary: {
      light: 'rgba(121, 83, 210, 1)',
      main: 'rgba(69, 39, 160, 1)',
      dark: 'rgba(0, 0, 112, 1)',
      contrastText: 'rgba(41, 239, 205, 1)'
    },
    secondary: {
      light: 'rgba(86, 200, 216, 1)',
      main: 'rgba(0, 151, 167, 1)',
      dark: 'rgba(0, 105, 120, 1)',
      contrastText: 'rgba(246, 246, 246, 1)'
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(255, 255, 255, 1)',
      disabled: 'rgba(134, 134, 134, 1)',
      hint: 'rgba(104, 104, 104, 1)'
    }
  }
})

export default function Home () {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `
          }}
        />
      </Head>
      <Nav />
      <HomeSection />
      <Footer />
    </ThemeProvider>
  )
}
