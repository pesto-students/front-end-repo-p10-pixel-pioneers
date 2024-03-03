import React, { useState } from "react"
import "./bookingForm.css"
import {
  Grid
} from "@material-ui/core"
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Formik, Form, Field } from "formik";
import Button from "@mui/material/Button"
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import bookingRequest from "../../api/booking";



// Booking Form Initial data
const initialValues = {
  fullName: "",
  email: "",
  phoneNumber: "",
  totalSeats: 1,
  start: new Date().toISOString(),
  end: new Date().toISOString(),
}

const mobileRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

//validation schema
let validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string()
    .matches(mobileRegExp, 'Mobile number is not valid')
    .min(10, 'Mobile number must have 10 digits')
    .max(10, 'Mobile number must have 10 digits'),
  totalSeats: Yup.number("Seats must be a Number")
    .required("Required")
    .positive("Must be a positive Integer")
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
})

const onSubmit = async (values) => {
  await  bookingRequest(values);
}

const BookingForm = () => {

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Booking Form</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          {({ dirty, isValid, values, setFieldValue, handleChange, handleBlur, errors, touched, setFieldTouched }) => {

            return (
              <Form>
                {/* <pre style={{border:"1px solid red"}}>{JSON.stringify({...values,errors,touched},null,"\n")}</pre> */}
                <Grid item container spacing={1} >
                  {/* Name Field */}
                  <Grid item xs={12} sm={6} md={6}>
                    <Field
                      label="Full Name"
                      variant="outlined"
                      fullWidth
                      name="fullName"
                      value={values.fullName}
                      component={TextField}
                    />
                  </Grid>

                  {/* Phone Number */}
                  <Grid item xs={12} sm={6} md={6}>
                    <Field
                      label="Phone Number"
                      variant="outlined"
                      fullWidth
                      name="phoneNumber"
                      value={values.phoneNumber}
                      type="number"
                      component={TextField}
                      onChange={handleChange}
                    />
                  </Grid>

                  {/* Email Field */}
                  <Grid item xs={12} sm={6} md={6}>
                    <Field
                      label="Email"
                      variant="outlined"
                      fullWidth
                      name="email"
                      value={values.email}
                      component={TextField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>

                    {/* Seats Field */}
                    <Stack direction="row">
                      <Field
                        label="Total Seats"
                        variant="outlined"
                        type="number"
                        fullWidth
                        name="totalSeats"
                        value={values.totalSeats}
                        component={TextField}
                        inputProps={{ min: 0, max: 50, step: 1 }}
                      />
                      <Button
                        onClick={() => {
                          setFieldValue("totalSeats", values.totalSeats + 1, true)
                        }}
                        variant="outlined"
                        size="small"
                        style={{ backgroundColor: "#e0e0e0", height: "55px" }}
                      >
                        <AddIcon fontSize="small" />
                      </Button>
                      <Button
                        onClick={() => {
                          if (values.totalSeats > 0) {
                            setFieldValue("totalSeats", values.totalSeats - 1, true)
                          }
                        }}
                        variant="outlined"
                        size="small"
                        style={{ backgroundColor: "#e0e0e0", height: "55px" }}
                      >
                        <RemoveIcon fontSize="small" />
                      </Button>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Field
                      component={DatePicker}
                      name="start"
                      label="Start Date"
                      disablePast
                      value={dayjs(values.start)}
                      onChange={(value) => {
                        setFieldTouched("start", true);
                        setFieldValue("start", value.format(), true);
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
                  <Grid item xs={12} sm={6} md={6}>
                    <Field
                      component={DatePicker}
                      name="end"
                      label="End Date"
                      disablePast
                      value={dayjs(values.end)}
                      onChange={(value) => {
                        setFieldTouched("end", true);
                        setFieldValue("end", value.format(), true);

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
                  disabled={!dirty || !isValid}
                  variant="contained"
                  color="primary"
                  type="Submit"
                >
                  REGISTER
                </Button>

              </Form>
            )
          }}
        </Formik>
      </LocalizationProvider>
    </>
  )
}

export default BookingForm;