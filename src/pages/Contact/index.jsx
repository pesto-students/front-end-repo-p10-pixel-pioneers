import React from 'react'
import {
    Box,
    Button,
    Stack,
    TextField
} from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';

import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import { enquire } from "../../api/enquiry";

// Formik
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// Contact Form Initial data
const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
}

const mobileRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const nameRegExp = /^[a-zA-Z" "]+$/

//validation schema
let validationSchema = Yup.object().shape({
    name: Yup.string().matches(nameRegExp, "Name should not contain number or special characters").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phoneNumber: Yup.string()
        .matches(mobileRegExp, 'Mobile number is not valid')
        .min(10, 'Mobile number must have 10 digits')
        .max(10, 'Mobile number must have 10 digits')
        .required("Required"),
});

const Contact = () => {

    const handleSubmit = async (values, formikBag) => {
        // event.preventDefault();
        // const data = new FormData(event.currentTarget);
        console.log(values);
        let res = await enquire({
            data: values
        });
        if (res.success) {
            toast.success("Your Enquiry Saved Successfully!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            toast.error('Unable to save enquiry', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        formikBag.resetForm();
    }


    return (
        <Stack
            component='section'
            direction="column"
            justifyContent='center'
            alignItems='center'
            sx={{
                py: 10,
                px: 2,
            }}
        >
            <Title
                text={
                    'Interested to rent a property'
                }
                textAlign={'center'}
            />
            <Paragraph
                text={
                    'If you are interested to rent the property contact us we will call you. \
                Shortly to fulfill you requirements and property.'
                }
                maxWidth={'sm'}
                mx={0}
                textAlign={'center'}
            />
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                {({ dirty, isValid, values, setFieldValue, handleChange, handleBlur, errors, touched, setFieldTouched }) => {
                    return (
                        <Box
                            sx={{
                                mt: 1,
                                py: 2
                            }}>
                            <Form>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    id="name"
                                    label="Name"
                                    name="name"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    value={values.phoneNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="phoneNumber"
                                    label="Phone Number"
                                    type="phone"
                                    id="phoneNumber"
                                    autoComplete="current-phone"
                                />
                                <Button
                                    variant="contained"
                                    fullWidth
                                    type="submit"
                                    size="medium"
                                    sx={{
                                        fontSize: '0.9rem',
                                        textTransform: 'capitalize',
                                        py: 2,
                                        mt: 3,
                                        mb: 2,
                                        borderRadius: 0,
                                        backgroundColor: '#14192d',
                                        "&:hover": {
                                            backgroundColor: '#1e2a5a',
                                        }
                                    }}
                                >
                                    send
                                </Button>
                            </Form>
                        </Box>
                    )
                }}
            </Formik>
        </Stack>
    )
}

export default Contact;