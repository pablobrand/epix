import { makeStyles } from '@material-ui/core/styles'
import styles from '../styles/Home.module.css'
import { Paper, Grid, TextField, Button} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  myform: {
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    opacity: .9,
    alignItems: 'static'
  },
}))

export default function ContactForm () {
  const classes = useStyles()
  return ( 
    <div className={styles.container}>
      <Paper className={classes.paper}>
        <Grid container spacing={3} xs={12}>
            <form className={classes.myform} noValidate autoComplete="off">
                <TextField id="filled-basic" label="Full Name" variant="filled" />
                <TextField id="filled-basic" label="Email" variant="filled" />
                <TextField id="filled-basic" label="Message" variant="filled" />
                <Button variant="contained" color="primary">
                    Send Email
                </Button>
            </form>      
        </Grid>
      </Paper>
    </div>
  )}
