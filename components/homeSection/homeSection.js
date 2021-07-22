import styles from './homeSection.module.css'
import { Grid, Paper, Button } from '@material-ui/core'
import Homesectiontop from '../homesectiotop/homeSectionTop'
import Typography from '@material-ui/core/Typography'
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded'
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded'
import CodeRoundedIcon from '@material-ui/icons/CodeRounded'

export default function Homesection () {
  return (
    <Grid container spacing={3} className={styles.mainbody}>
      <Grid item xs={12}>
        <Paper className={styles.paper}>
          <Typography variant='h1' component='h1'>
            Welcome to Cybermonkeys LLC
          </Typography>
          <Homesectiontop />
        </Paper>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className={styles.paper}>
            <Typography variant='h5' component='h2' gutterBottom>
              <QuestionAnswerRoundedIcon spacing={2} /> Consultation Services
            </Typography>
            <Typography variant='body1' color='textPrimary' component='p' gutterBottom>
              Because your time is valuable, sometimes it makes sense to hire someone to help layout a plan of action and provide you with the technical knowledge needed to take your business to the next level. Because each business is different, each need and solution will also be different.
              <Button color='primary' href='/contact' spacing={2}>
                Contact Us
              </Button>
              and let us help you understand, layout and execute your solution.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={styles.paper}>
            <Typography variant='h5' component='h2' gutterBottom>
              <MenuBookRoundedIcon /> Education Services
            </Typography>
            <Typography variant='body1' color='textPrimary' component='p' gutterBottom>
              Do you want to learn something in specific about blockchain? What is Bitcoin? Cryptocurrency? NFTs? What is a specific cryptocurrency project about? We can also help educate your employees on a specific area in the blockchain industry.
            </Typography>
            <Typography variant='overline' color='textSecondary' component='p' gutterBottom>
              Please note the price may vary, based on the number of people in the learning session.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={styles.paper}>
            <Typography variant='h5' component='h2' gutterBottom>
              <CodeRoundedIcon style={{ padding: '2px' }} /> Blockchain Solutions
            </Typography>
            <Typography variant='body1' color='textPrimary' component='p' gutterBottom>
              Have project in mind that requires a blockchain solution? Maybe integration to your current systems? We can help with the planning, design implementation and/or testing of a blockchain solution. Let us help you bring your project to light!
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  )
}
