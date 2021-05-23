import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, TextField, Button, Typography, Grid } from '@material-ui/core';
import DraftsIcon from '@material-ui/icons/Drafts';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Nav from '../components/nav/nav';
import styles from '../styles/Home.module.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#bc477b',
      main: '#880e4f',
      dark: '#560027',
      contrastText: "#ffffff",
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

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    background: "#f4eefd"    
  },
  formBody:{
    width: theme.spacing(100),
    padding:5
  },
  buttonForm: {    
    display: "flex",
    justifyContent: "center",
  },
  inputFieldDivider:{
    padding:5
  }
}));

export default function ContactForm () {
  const classes = useStyles();
  const [state, handleSubmit] = useForm("mdoyeqnp");
  if (state.succeeded) {
      return (
        <ThemeProvider theme={theme}>
          <Grid>
            <Typography variant="h4" component="h4" color="secondary">
              <DraftsIcon/>Thank your for your message, we will get back to you as soon as possible!
            </Typography>
          </Grid>
        </ThemeProvider>
  )}

  return (
    <ThemeProvider theme={theme}>
      <Nav></Nav>
      <Grid className={classes.formContainer}>
        <Paper elevation={3}>
          <form onSubmit={handleSubmit} className={classes.formBody}>
            <div className={classes.inputFieldDivider}>
              <TextField 
                fullWidth 
                id="email" 
                label="Email Address" 
                type="email" 
                name="email" 
                variant="filled"
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
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>
            <div className={classes.inputFieldDivider}>
              {/* <textarea
                id="message"
                name="message"
              /> */}
              <TextField
                fullWidth 
                id="message"
                label="Your Message"
                name="message"              
                multiline
                Multiline={true}
                variant="filled"
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
              </div>
              <div className={classes.inputFieldDivider}>
                <Button 
                  className={classes.buttonForm}
                  type="submit" 
                  disabled={state.submitting}
                  variant="contained" 
                  color="primary"               
                  size="large"
                  >
                    Send            
                </Button>
              </div>
          </form>
        </Paper>
      </Grid>
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
  )}
