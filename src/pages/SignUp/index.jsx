import React, {useState} from 'react';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Alert from '@mui/material/Alert';
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { register } from "../../api/login";
import { toast, ToastContainer } from 'react-toastify';

// Formik
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="/">
        Proximity Pods
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {

  const [hasError, setError] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    let res = await register(values);

    if (res.success) {
      navigate("/");
    } else {
      setError(prev => true);
      setMessage(prev => res.message)
    }


  };
  
  const mobileRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  // Initial Values 
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  }

  // Validation Schema
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("This field is required"),
    lastName: Yup.string().notRequired(),
    username: Yup.string().required("This field is required"),
    email: Yup.string().email("Please enter a valid email").required("This field is required"),
    phoneNumber: Yup.string()
      .matches(mobileRegExp, 'Mobile number is not valid')
      .min(10, 'Mobile number must have 10 digits')
      .max(10, 'Mobile number must have 10 digits')
      .required("Required"),
    password: Yup.string()
      .required("This field is required")
      .min(8, "Pasword must be 8 or more characters")
      .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Password ahould contain at least one uppercase and lowercase character")
      .matches(/\d/, "Password should contain at least one number")
      .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password should contain at least one special character"),
    confirmPassword: Yup.string().when("password", (password, field) => {
      if (password) {
        return field.required("The passwords do not match").oneOf([Yup.ref("password")], "The passwords do not match");
      }
    }),
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 11,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {
            hasError &&
            (
              <Alert severity="error">{message}</Alert>
            )
          }
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            {({ dirty, isValid, values, setFieldValue, handleChange, handleBlur, errors, touched, setFieldTouched }) => {
              return (
                <Box
                  sx={{ mt: 3 }}
                >
                  <Form>
                    <Grid container spacing={2}>
                      {/* <pre>{JSON.stringify({values, errors,touched, dirty, isValid}, null, 2)}</pre> */}
                      {/* First Name */}
                      <Grid item xs={12} sm={6}>
                        <TextField
                          name="firstName"
                          required
                          fullWidth
                          value={values.firstName}
                          error={Boolean(touched.firstName && errors.firstName)}
                          helperText={touched.firstName && errors.firstName}
                          id="firstName"
                          label="First Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Grid>

                      {/* Last Name */}
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          value={values.lastName}
                          error={Boolean(touched.lastName && errors.lastName)}
                          helperText={touched.lastName && errors.lastName}
                          id="lastName"
                          label="Last Name"
                          name="lastName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Grid>

                      {/* User Name */}
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          value={values.username}
                          error={Boolean(touched.username && errors.username)}
                          helperText={touched.username && errors.username}
                          id="username"
                          label="User Name"
                          name="username"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Grid>

                      {/* Phone Number */}
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          value={values.phoneNumber}
                          error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                          helperText={touched.phoneNumber && errors.phoneNumber}
                          id="phoneNumber"
                          label="Phone Number"
                          name="phoneNumber"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Grid>

                      {/* Email */}
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          value={values.email}
                          error={Boolean(touched.email && errors.email)}
                          helperText={touched.email && errors.email}
                          id="email"
                          label="Email Address"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Grid>

                      {/* Password */}
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          value={values.password}
                          error={Boolean(touched.password && errors.password)}
                          helperText={touched.password && errors.password}
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Grid>

                      {/* Confirm Password */}
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          value={values.confirmPassword}
                          error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                          helperText={touched.confirmPassword && errors.confirmPassword}
                          name="confirmPassword"
                          label="Confirm Password"
                          type="password"
                          id="confirmPassword"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      disabled={!dirty || !isValid}
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end" marginBottom={4}>
                      <Grid item>
                        <Link to="/login" variant="body2">
                          Already have an account? Sign in
                        </Link>
                      </Grid>
                    </Grid>
                  </Form>
                </Box>
              )
            }}
          </Formik>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
