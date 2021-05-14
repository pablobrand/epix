// import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
})

export default function Homesection () {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to <a href='#'>Cybermonkeys LLC</a>
      </h1>
      <div className={styles.container}>
        <Card className={classes.root} variant='outlined'>
          <CardContent>
            <Typography className={classes.title} color='textSecondary' gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant='h5' component='h2'>
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography className={classes.pos} color='textSecondary'>
              adjective
            </Typography>
            <Typography variant='body2' component='p'>
              well meaning and kindly.
              <br />
              "a benevolent smile"
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}
