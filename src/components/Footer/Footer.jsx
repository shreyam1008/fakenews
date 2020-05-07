

import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
    
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
  }));


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/shreyam1008">
        </Link>{' '}
        2020{'.'}
      </Typography>
    );
  }

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">All rights to this website belongs to TOPHATS Group.</Typography>
          <Copyright />
        </Container>
      </footer>
    )
}


export default Footer
