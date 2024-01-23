import React, { useState } from "react"
import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  MenuItem,
  InputLabel,
  Select,
  CardActions,
  Button,
  CardHeader,
  FormControl,
} from "@material-ui/core"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { TextField } from "formik-material-ui"
import dayjs from "dayjs";

//Data
const initialValues = {
  fullName: "",
  email: "",
  mobileNumber: "",
  totalSeats: "",
  startDate: "",
  endDate: "",
}

const mobileRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

//validation schema
let validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  mobileNumber: Yup.string()
    .matches(mobileRegExp, 'Mobile number is not valid')
    .min(10, 'Mobile number must have 10 digits')
    .max(10, 'Mobile number must have 10 digits')
})

const BookingForm = () => {

  const [value, setValue] = useState(
    dayjs(new Date().toISOString().split("T")[0])
  );

  const onSubmit = () => {

  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Booking Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({ dirty, isValid, values, handleChange, handleBlur }) => {
          return (
            <Form>
              <CardContent>
                <Grid item container spacing={1} justify="center">
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
                  <Grid item xs={12} sm={6} md={6}>
                    <Field
                      label="Mobile Number"
                      variant="outlined"
                      fullWidth
                      name="mobileNumber"
                      value={values.mobileNumber}
                      type="number"
                      component={TextField}
                    />
                  </Grid>
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
                    <Field
                      label="Total Seats"
                      variant="outlined"
                      fullWidth
                      name="totalSeats"
                      value={values.totalSeats}
                      component={TextField}
                      InputProps={{
                        endAdornment:
                          <CustomButton
                            value="+"
                            handleClick={() => {
                              alert("Clicked")
                            }} />
                      }}
                    />
                  </Grid>
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
                    <Field
                      label="Password"
                      variant="outlined"
                      fullWidth
                      name="password"
                      value={values.password}
                      type="password"
                      component={TextField}
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button
                  disabled={!dirty || !isValid}
                  variant="contained"
                  color="primary"
                  type="Submit"
                >
                  REGISTER
                </Button>
              </CardActions>
            </Form>
          )
        }}
      </Formik>
    </>
  )
}

const CustomButton = ({ value, handleClick }) => {
  return (
    <>
      <Button onClick={handleClick}>
        +
      </Button>
      <Button onClick={handleClick}>
        -
      </Button>
    </>
  )
}
export default BookingForm;