import React from 'react'
import { 
  emphasize, 
  withStyles, 
  makeStyles,
  Grid,
  BottomNavigation,
  BottomNavigationAction,
  Button
} from '@material-ui/core'
import {HomeIcon, RestoreIcon, FavoriteIcon} from '@material-ui/icons'
import Link from 'next/link'

const useStyles = makeStyles({
  navContainer: {
    padding: 30,
    textAlign:"center",
    background: "#f4eefd",
  }
});

export default function Nav () {
  const classes = useStyles()
  return (
    <Grid className={classes.navContainer}>
      <Button><Link href="/">Home</Link></Button>
      <Button><Link href="/contact">Contact Us</Link></Button>
    </Grid>
  )
}
