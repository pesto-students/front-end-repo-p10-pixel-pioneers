import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
import { toast, ToastContainer } from 'react-toastify';
import { addProperty } from "../../api/property";


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
  const navigate = useNavigate();
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (localStorage.user) {
      const data = new FormData(event.currentTarget);
      data.append("ownedBy", JSON.parse(localStorage.user).id);
      data.append("workSpace",{
        "total":250,
        "available":250
      })
      const image = document.getElementById("image");
      Object.keys(image.files).forEach(key => {
        data.append("images", image.files[key]);
      })
      let res = await addProperty(data);
      if (res.success) {
        toast.success("Property Added Successfully !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        navigate("/profile");
      } else {
        toast.error('Unable to Add Property', {
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
    } else {
      navigate('/login')
    }

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
              <Grid item xs={6} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="propertyName"
                  label="Property Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="title"
                  required
                  fullWidth
                  id="title"
                  label="Title"
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
                  multiline
                  minRows={4}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Property Address"
                  name="address"
                  autoComplete="address"
                  multiline
                  minRows={3}
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
                  name="city"
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="state"
                  label="State"
                  name="state"
                  autoComplete="state"
                />
              </Grid>
              <Grid item xs={6}>
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
              
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number"
                  id="phoneNumber"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  required
                  fullWidth
                  name="cost"
                  label="Rent of Property"
                  id="cost"
                />
              </Grid>
              {/* <Grid item xs={12}>
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
              </Grid> */}
             
              <Grid item>
                <Button variant="contained" component="label">
                  Upload Property Images
                  <input type="file" accept="image/*" id="image" multiple hidden onChange={handleChange} />
                  <img name="image" src={file} />
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
