// import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, Card, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import Homesectiontop from '../homesectiotop/homeSectionTop'

const useStyles = makeStyles((theme) => ({
  mainbody: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    opacity: .9,
  },
  title: {
    fontSize: 14
  }
}))

export default function Homesection () {
  const classes = useStyles()
  return (  
      <div className={styles.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h1 className={styles.title}>
                Welcome to <a href='#'>Cybermonkeys LLC</a>
              </h1>
              <Homesectiontop/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
        </Grid>
      </div>
  )
}
