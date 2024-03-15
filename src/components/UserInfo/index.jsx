import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import {Box} from "@mui/material";
import Stack from "@mui/material/Stack";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const defaultTheme = createTheme();


// Icons
// import PhoneIcon from "@material-ui/icons/Phone";
// import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import galleryImage1 from "../../Assets/gallery-1.jpeg";

const UserInfo = ({ user }) => {

  const mobileRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const {
    firstName,
    lastName,
    email,
    username,
    phoneNumber,
  } = user;

  // Initial Values 
  const initialValues = {
    firstName,
    lastName,
    email,
    username,
    phoneNumber
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
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
          //   onSubmit={handleSubmit}
          >
            {({ dirty, isValid, values, setFieldValue, handleChange, handleBlur, errors, touched, setFieldTouched }) => {
              return (
                <Box>
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
                          disabled
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
                          disabled
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
                          disabled
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
                          disabled
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
                          disabled
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      disabled={true || !dirty || !isValid}
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Update
                    </Button>
                  </Form>
                </Box>
              )
            }}
          </Formik>
        </Box>
      </Container>
    </ThemeProvider>
  )
};

export default UserInfo