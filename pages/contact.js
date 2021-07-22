import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { Paper, TextField, Button, Typography, Grid } from '@material-ui/core'
import DraftsIcon from '@material-ui/icons/Drafts'

import Nav from '../components/nav/nav'
import styles from '../styles/Contact.module.css'
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

export default function ContactForm () {
  const [state, handleSubmit] = useForm('mdoyeqnp')
  if (state.succeeded) {
    return (
      <ThemeProvider theme={theme}>
        <Grid>
          <Typography variant='h4' component='h4' color='secondary'>
            <DraftsIcon />Thank your for your message, we will get back to you as soon as possible!
          </Typography>
        </Grid>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Grid className={styles.formContainer}>
        <Paper elevation={3}>
          <form onSubmit={handleSubmit} className={styles.formBody}>
            <div className={styles.inputFieldDivider}>
              <TextField
                fullWidth
                id='email'
                label='Email Address'
                type='email'
                name='email'
                variant='filled'
              />
              {/* <label htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
              /> */}
              <ValidationError
                prefix='Email'
                field='email'
                errors={state.errors}
              />
            </div>
            <div className={styles.inputFieldDivider}>
              {/* <textarea
                id="message"
                name="message"
              /> */}
              <TextField
                fullWidth
                id='message'
                label='Your Message'
                name='message'
                multiline
                variant='filled'
              />
              <ValidationError
                prefix='Message'
                field='message'
                errors={state.errors}
              />
            </div>
            <div className={styles.inputFieldDivider}>
              <Button
                className={styles.buttonForm}
                type='submit'
                disabled={styles.submitting}
                variant='contained'
                color='primary'
                size='large'
              >
                Send
              </Button>
            </div>
          </form>
        </Paper>
      </Grid>
      <Footer />
    </ThemeProvider>
  )
}
