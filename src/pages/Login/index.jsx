import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";

// Formik
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";


import { login } from "../../api/login";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" to="/">
                Proximity Pods
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();



export default function SignUp() {

    const [hasError, setError] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();


    // Login Form Initial data
    const initialValues = {
        email: "",
        password: "",
    }

    //validation schema
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required("Email is a required field")
            .email("Invalid email format"),
        password: Yup.string()
            .required("Password is a required field")
            .min(8, "Password must be at least 8 characters"),
    });

    const handleSubmit = async (values) => {
       
        const response = await login(values);
        
        if (response.success) {
            navigate("/");
        } else {
            setMessage(prev => response.message);
            setError(prev => true);
        }
        
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 15,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    {
                        hasError &&
                        (
                            <Alert severity="error">{message}</Alert>
                        )
                    }

                    <Box sx={{ mt: 1 }}>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}>
                            {({ dirty, isValid, values, setFieldValue, handleChange, handleBlur, errors, touched, setFieldTouched }) => {

                                return (
                                    <Form>
                                        <TextField
                                            margin="normal"
                                            required
                                            value={values.email}
                                            error={Boolean(touched.email && errors.email)}
                                            helperText={touched.email && errors.email}
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            value={values.password}
                                            error={Boolean(touched.password && errors.password)}
                                            helperText={touched.password && errors.password}
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                             
                                        <Button
                                            type="submit"
                                            disabled={!dirty || !isValid}
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                        >
                                            Sign In
                                        </Button>

                                        <Grid container>
                                            <Grid item xs>
                                                <Link href="#" variant="body2">
                                                    {""}{/* Forgot password? */}
                                                </Link>
                                            </Grid>
                                            <Grid item>
                                                <Link to="/register" variant="body2">
                                                    {"Don't have an account? Sign Up"}
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </ Form>
                                )
                            }}
                        </Formik>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}