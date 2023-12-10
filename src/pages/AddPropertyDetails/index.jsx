import { useState } from "react";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function AddPropertyDetails() {
  const [file, setFile] = useState();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      data,
      // email: data.get('email'),
      // password: data.get('password'),
    });
    // await register({
    //     email: data.get('email'),
    //     password: data.get('password'),
    //     username: data.get('username'),
    //     firstName: data.get('firstName'),
    //     lastName: data.get('lastName'),
    //     phoneNumber: data.get('phoneNumber'),
    // });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Add Property Details
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="propertyName"
                  required
                  fullWidth
                  id="propertyName"
                  label="Property Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  label="description"
                  name="description"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Property Address"
                  name=" property address"
                  autoComplete="address"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="capacity"
                  label="max capacity"
                  name="maxcapacity"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="pincode"
                  label="Pin Code"
                  name="pincode"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="city"
                  label="City"
                  name="City"
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="state"
                  label="State"
                  name="State"
                  autoComplete="state"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="country"
                  label="country"
                  type="country"
                  id="country"
                  autoComplete="country"
                />
              </Grid>
              <Grid item xs={12}>
                <label>Facilities</label>
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      color="success"
                      name="High Speed Wifi"
                    />
                  }
                  label="High Speed Wifi"
                />
                <FormControlLabel
                  control={<Checkbox color="success" name="Cafe" />}
                  label="Cafe"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      color="success"
                      // checked={}
                      // onChange={handleChange}
                      name="Parking"
                    />
                  }
                  label="Parking"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      color="success"
                      // checked={}
                      // onChange={handleChange}
                      name="Meeting Room"
                    />
                  }
                  label="Meeting Room"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      color="success"
                      // checked={}
                      // onChange={handleChange}
                      name="Power Backup"
                    />
                  }
                  label="Power Backup"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      color="success"
                      // checked={}
                      // onChange={handleChange}
                      name="Outdoor seating"
                    />
                  }
                  label="Outdoor seating"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      color="success"
                      // checked={}
                      onChange={handleChange}
                      name="Printer and Scanner"
                    />
                  }
                  label="Printer and Scanner"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={12}>
                <TextField
                  multiline
                  aria-label="minimum height"
                  minRows={2}
                  placeholder="Minimum 2 rows"
                />
              </Grid>
              <Grid item>
                <Button variant="contained" component="label">
                  Upload Property Snippets
                  <input type="file" hidden />
                  <img src={file} />
                </Button>
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register This Property
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
