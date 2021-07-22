import React from 'react'
import styles from './nav.module.css'
import {
  Grid,
  Button,
  Typography
} from '@material-ui/core'
import Link from 'next/link'

export default function Nav () {
  return (
    <Grid className={styles.navContainer}>
      <Button><Link href='/'><Typography variant='h4' component='code'>Home</Typography></Link></Button>
      <Button><Link href='/contact'><Typography variant='h4' component='code'>Contact Us</Typography></Link></Button>
    </Grid>
  )
}
