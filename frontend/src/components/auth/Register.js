import React, { useState } from "react";
import { Link } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers";
// import * as yup from "yup";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// const schema = yup.object().shape({
//   username: yup
//     .string()
//     .required("Required field! Please enter your username."),
//   email: yup
//     .string()
//     .email("Please enter valid email.")
//     .required("Required field! Please enter your email."),
//   password: yup
//     .string()
//     .min(5)
//     // .matches() regex for hard password
//     .required("Required field! Please enter password."),
// });

function Register(props) {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // const { register, handleSubmit, errors } = useForm({
  //   resolver: yupResolver(schema),
  // });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      props.createMessage({ passwordNotMatch: "Passwords do not match" });
    } else {
      const newUser = {
        username,
        password,
        email,
      };
      console.log(newUser);
      props.register(newUser);
    }
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
          Sign up
        </Typography>
        <form
          className={classes.form}
          // noValidate
          onSubmit={onSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="username"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                // ref={register}
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              {/* {errors.username && (
                <Typography className="reg_form_err">
                  {" "}
                  {errors.username.message}
                </Typography>
              )} */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                autoComplete="email"
                // ref={register}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {/* {errors.email && (
                <Typography className="reg_form_err">
                  {" "}
                  {errors.email.message}
                </Typography>
              )} */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                // ref={register}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {/* {errors.password && (
                <Typography className="reg_form_err">
                  {" "}
                  {errors.password.message}
                </Typography>
              )} */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="passwordConfirm"
                label="Confirm Password"
                type="password"
                id="passwordConfirm"
                autoComplete="current-password"
                value={passwordConfirm}
                onChange={(e) => {
                  setPasswordConfirm(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Typography>
                Already have an account?{" "}
                <Link to="/login" variant="body2">
                  Sign in
                </Link>{" "}
              </Typography>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, createMessage })(Register);
