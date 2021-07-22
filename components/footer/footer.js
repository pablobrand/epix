import React from 'react'
import Image from 'next/image'
import styles from './footer.module.css'
import { Typography, Grid } from '@material-ui/core'

const Footer = () => {
  return (
    <Grid className={styles.footer}>
      <Typography varient='h6' component='body1'> Powered by{' '} </Typography>
      <Image src='/logo_dark.png' alt='Cybermonkeys Logo' width='90' height='70' />
    </Grid>
  )
}

export default Footer
