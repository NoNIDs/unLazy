import React, { useState } from "react";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <a href="https://material-ui.com/">UnLazy</a> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login(props) {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    props.login(username, password);
  };

  if (props.isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container justify="center">
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item>
              <Typography>
                Don't have an account?{" "}
                <Link to="/register" variant="body2">
                  Sign Up
                </Link>{" "}
              </Typography>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
