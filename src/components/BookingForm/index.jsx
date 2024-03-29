import React, { useState } from 'react';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Alert from '@mui/material/Alert';
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { register } from "../../api/login";

// Formik
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { booking } from "../../api/booking";

const defaultTheme = createTheme();

// Booking Form Initial data
const initialValues = {
  fullName: "",
  email: "",
  phoneNumber: "",
  totalSeats: 1,
  start: new Date(new Date().setHours(0, 0, 0, 0)).toISOString(),
  end: new Date(new Date().setHours(24, 0, 0, 0)).toISOString(),
}

const mobileRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const nameRegExp = /^[a-zA-Z" "]+$/

//validation schema
let validationSchema = Yup.object().shape({
  fullName: Yup.string().matches(nameRegExp, "Name should not contain number or special characters").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string()
    .matches(mobileRegExp, 'Mobile number is not valid')
    .min(10, 'Mobile number must have 10 digits')
    .max(10, 'Mobile number must have 10 digits')
    .required("Required"),
  totalSeats: Yup.number("Seats must be a Number")
    .required("Required")
    .positive("Must be a positive Integer")
    .min(1, "Seats must be atleast 1")
    .max(50, "Seats cannot be more than 50")
    .integer("Seats must be Integer"),
  start: Yup.date()
    .required("Start Date Required"),
  end: Yup.date()
    .required("End Date Required")
    .when('start', (start) => {
      if (start) {
        return Yup.date()
          .min(start, 'End Date must be greater than Start Date')
          .typeError('End Date is required')
      }
    }),
});

const handlePrice = (values) => {
  const endDate = values.end;
  const startDate = values.start;
  const totalDays = endDate.diff(startDate, "days") || 1;
  if (values.totalSeats > 0 && values.totalSeats < 50 && totalDays > 0) {
    const amount = parseInt((values.totalSeats || 0) * values.cost * (totalDays / 30));
    return amount;
  }
  return 0;
};

const BookingForm = ({ propertyDetails, handleBooking }) => {

  const [hasError, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState(handlePrice({
    cost: propertyDetails.cost,
    totalSeats: parseInt(initialValues.totalSeats),
    start: dayjs(initialValues.start),
    end: dayjs(initialValues.end),
  }));

  const onSubmit = async (values) => {
    const start = dayjs(values.start);
    const end = dayjs(values.end);

    const days = end.diff(start, "day");
    values.amount = values.totalSeats * propertyDetails.cost * (days / 30);
    values.bookedOn = new Date().toISOString();

    const user = JSON.parse(localStorage.user);
    values.userID = String(user.id);
    values.propertyID = String(propertyDetails.id);

    const resp = await booking(values);
handleBooking(resp);
  };
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: { xs: 0, sm: 4 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {
            hasError &&
            (
              <Alert severity="error">{message}</Alert>
            )
          }
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}>
              {({ dirty, isValid, values, setFieldValue, handleChange, handleBlur, errors, touched, setFieldTouched }) => {
                return (
                  <Box
                    sx={{ mt: 3 }}
                  >
                    <Form>
                      <Grid container spacing={2}>
                        {/* <pre>{JSON.stringify({ values, errors, touched, dirty, isValid }, null, 2)}</pre> */}

                        {/* Full Name */}
                        <Grid item xs={12}>
                          <TextField
                            name="fullName"
                            required
                            fullWidth
                            value={values.fullName}
                            error={Boolean(touched.fullName && errors.fullName)}
                            helperText={touched.fullName && errors.fullName}
                            id="fullName"
                            label="Full Name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Grid>

                        {/* Email */}
                        <Grid item xs={12}>
                          <TextField
                            name="email"
                            required
                            fullWidth
                            value={values.email}
                            error={Boolean(touched.email && errors.email)}
                            helperText={touched.email && errors.email}
                            id="email"
                            label="Email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Grid>

                        {/* Phone Number */}
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            value={values.phoneNumber}
                            error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                            helperText={touched.phoneNumber && errors.phoneNumber}
                            name="phoneNumber"
                            label="Phone Number"
                            id="phoneNumber"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Grid>

                        {/* Total Seats */}
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            value={values.totalSeats}
                            error={Boolean(touched.totalSeats && errors.totalSeats)}
                            helperText={touched.totalSeats && errors.totalSeats}
                            name="totalSeats"
                            label="Total Seats"
                            type="number"
                            onChange={(e) => {
                              handleChange(e);
                              setAmount(prev => {
                                return handlePrice({
                                  cost: propertyDetails.cost,
                                  totalSeats: parseInt(e.target.value),
                                  start: dayjs(values.start),
                                  end: dayjs(values.end),
                                });
                              });

                            }}
                            onBlur={handleBlur}
                          />
                        </Grid>

                        {/* Start Date */}
                        <Grid item xs={6} sm={6}>
                          <Field
                            component={DatePicker}
                            name="start"
                            label="Start Date"
                            disablePast
                            value={dayjs(values.start)}
                            onChange={(value) => {
                              setFieldTouched("start", true);
                              setFieldValue("start", value.format(), true);
                              setAmount(prev => {
                                return handlePrice({
                                  cost: propertyDetails.cost,
                                  totalSeats: parseInt(values.totalSeats),
                                  start: dayjs(value.format()),
                                  end: dayjs(values.end),
                                });
                              });
                            }}
                            slotProps={{
                              textField: {
                                variant: "outlined",
                                error: touched.start && Boolean(errors.start),
                                helperText: touched.start && errors.start
                              }
                            }}
                          />
                        </Grid>

                        {/* End Date */}
                        <Grid item xs={6} sm={6}>
                          <Field
                            component={DatePicker}
                            name="end"
                            label="End Date"
                            disablePast
                            value={dayjs(values.end)}
                            onChange={(value) => {
                              setFieldTouched("end", true);
                              setFieldValue("end", value.format(), true);
                              setAmount(prev => {
                                return handlePrice({
                                  cost: propertyDetails.cost,
                                  totalSeats: parseInt(values.totalSeats),
                                  start: dayjs(values.start),
                                  end: dayjs(value.format()),
                                });
                              });
                            }}
                            slotProps={{
                              textField: {
                                variant: "outlined",
                                error: Boolean(errors.end),
                                helperText: errors.end
                              }
                            }}
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
                        {
                          (amount === 0) ? `PAY` : `PAY ₹${amount}`
                        }
                      </Button>
                    </Form>
                  </Box>
                )
              }}
            </Formik>
          </LocalizationProvider>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default BookingForm;