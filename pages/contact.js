import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, TextField, Button, Typography } from '@material-ui/core';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    paddingTop:40,
    maxWidth:'100%',
    display: "flex",
    justifyContent: "center",
    alignContent: "center"
    
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
        <div className={classes.formContainer}>
          <Typography variant="h4" component="h4" color="secondary">
            <DraftsIcon/>Thank your for your message, we will get back to you as soon as possible!
          </Typography>
        </div>
  )}

  return (
    <div className={classes.formContainer}>
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
              rows={12}
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
                color="secondary"               
                size="large"
                >
                  Send            
              </Button>
            </div>
        </form>
      </Paper>
    </div>
  )}
