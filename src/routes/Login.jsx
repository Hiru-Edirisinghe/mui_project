import React from 'react';
import { useNavigate } from "react-router-dom";
import {TextField, Avatar, Link, InputAdornment, Typography,Button, CssBaseline, Container} from '@material-ui/core';

import {LockRounded, Person} from '@material-ui/icons';

import useStyles from './loginStyles';



const Login = () => {
  const classes = useStyles();
  let navigate = useNavigate();

  return (
    <>
      <CssBaseline />
      <main className={classes.main}>
          <div className={classes.container}>
              <Container maxWidth="xs" >
                <div className={classes.userIcon}>
                <Avatar src="/broken-image.jpg" className={classes.avatarIcon}/>
                </div>
                  <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                     Member Login
                  </Typography>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    InputProps={{
                        endAdornment: <InputAdornment position="start"><Person/></InputAdornment>,
                      }}
                    autoFocus
                    />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    InputProps={{
                        endAdornment: <InputAdornment position="start"><LockRounded/></InputAdornment>,
                    }}
                    />
                    <Button
                        onClick={() => {
                          navigate("/campaign");
                        }}
                        className={classes.btn}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        color="primary"
                        >
                        Sign In
                    </Button>
                    <Typography align="center" color="textPrimary" className={classes.bottomText}>
                        Forgot the password?
                     <Link href="" color="textPrimary" className={classes.clickHere}>
                        Click here
                    </Link>
                  </Typography>
              </Container>
          </div>
          
      </main>
    </>
  );
}

export default Login;