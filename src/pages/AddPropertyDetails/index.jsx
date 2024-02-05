import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Formik, Form, Field } from "formik";

import * as Yup from "yup";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { addProperty } from "../../api/property";


const ImageUploader = ({ setFieldValue, selectedfile, SetSelectedFile, Files, SetFiles }) => {

  const filesizes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  const InputChange = (e) => {
    // --For Multiple File Input
    let images = [];
    setFieldValue("images", e.currentTarget.files);
    for (let i = 0; i < e.target.files.length; i++) {
      images.push((e.target.files[i]));
      let reader = new FileReader();
      let file = e.target.files[i];

      reader.onloadend = () => {
        SetSelectedFile((preValue) => {
          return [
            ...preValue,
            {
              id: crypto.randomUUID(),
              filename: e.target.files[i].name,
              filetype: e.target.files[i].type,
              fileimage: reader.result,
              datetime: e.target.files[i].lastModifiedDate.toLocaleString('en-IN'),
              filesize: filesizes(e.target.files[i].size),
              orignal: e.target.files[i],
            }
          ]
        });
      }
      if (e.target.files[i]) {
        reader.readAsDataURL(file);
      }
    }
  }

  const DeleteSelectFile = (id) => {
    if (window.confirm("Are you sure you want to delete this Image?")) {
      const result = selectedfile.filter((data) => data.id !== id);
      SetSelectedFile(result);
    } else {
      // alert('No');
    }

  }

  const DeleteFile = async (id) => {
    if (window.confirm("Are you sure you want to delete this Image?")) {
      const result = Files.filter((data) => data.id !== id);
      SetFiles(result);
    } else {
      // alert('No');
    }
  }

  return (

    <div className="fileupload-view">
      <div className="row justify-content-center m-0">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <div className="kb-data-box">
                <div className="kb-file-upload">
                  <div className="file-upload-box">
                    <input type="file" id="fileupload" className="file-upload-input" onChange={InputChange} multiple />
                    <span>Drag and drop or <span className="file-link">Choose your files</span></span>
                  </div>
                </div>
                <div className="kb-attach-box mb-3">
                  {
                    selectedfile.map((data, index) => {
                      const { id, filename, filetype, fileimage, datetime, filesize } = data;
                      return (
                        <div className="file-atc-box" key={id}>
                          {
                            filename.match(/.(jpg|jpeg|png|gif|svg|webp)$/i) ?
                              <div className="file-image"> <img src={fileimage} alt="" /></div> :
                              <div className="file-image"><i className="far fa-file-alt"></i></div>
                          }
                          <div className="file-detail">
                            <h6>{filename}</h6>
                            <p></p>
                            <p><span>Size : {filesize}</span><span className="ml-2">Modified Time : {datetime}</span></p>
                            <div className="file-actions">
                              <button type="button" className="file-action-btn" onClick={() => DeleteSelectFile(id)}>Delete</button>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
                {Files.length > 0 ?
                  <div className="kb-attach-box">
                    <hr />
                    {
                      Files.map((data, index) => {
                        const { id, filename, filetype, fileimage, datetime, filesize } = data;
                        return (
                          <div className="file-atc-box" key={index}>
                            {
                              filename.match(/.(jpg|jpeg|png|gif|svg|webp)$/i) ?
                                <div className="file-image"> <img src={fileimage} alt="" /></div> :
                                <div className="file-image"><i className="far fa-file-alt"></i></div>
                            }
                            <div className="file-detail">
                              <h6>{filename}</h6>
                              <p><span>Size : {filesize}</span><span className="ml-3">Modified Time : {datetime}</span></p>
                              <div className="file-actions">
                                <button className="file-action-btn" onClick={() => DeleteFile(id)}>Delete</button>
                                <a href={fileimage} className="file-action-btn" download={filename}>Download</a>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                  : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );

}


/* Property Details Form Initial Values */
const initialValues = {
  name: "",
  title: "",
  description: "",
  address: "",
  capacity: 100,
  pincode: "",
  city: "",
  state: "",
  country: "",
  phoneNumber: "",
  cost: 0,
  images: null,
}

const mobileRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

/* Validtion Schema */
let validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  capacity: Yup.number().required("Required"),
  pincode: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  phoneNumber: Yup.string()
    .matches(mobileRegExp, 'Mobile number is not valid')
    .min(10, 'Mobile number must have 10 digits')
    .max(10, 'Mobile number must have 10 digits')
    .required("Required"),
  cost: Yup.number().required("Required"),
})

const onSubmit = () => {
console.log("Onsubmit")
}

const AddPropertyDetails = () => {

  const navigate = useNavigate();

  const [selectedfile, SetSelectedFile] = useState([]);
  const [Files, SetFiles] = useState([]);

  const handleSubmit = async (values) => {

    if (localStorage.user) {

      // Adding Owner id 
      values.ownedBy = JSON.parse(localStorage.user).id

      let res = await addProperty(values);

      // if (res.success) {
      //   navigate(`/property-details/${res.data.id}`);
      // }
    } else {
      navigate('/login')
    }

  };



  return (
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
        <h1>Add Property</h1>
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
                <pre style={{border:"1px solid red"}}>{JSON.stringify({...values,errors,touched},null,"\n")}</pre>
                <Grid container spacing={2}>

                  {/* Name */}
                  <Grid item xs={6} sm={6}>
                    <TextField
                      name="name"
                      value={values.name}
                      error={touched.name && errors.name}
                      helperText={touched.name && errors.name}
                      required
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="propertyName"
                      label="Property Name"
                    />
                  </Grid>

                  {/* Title */}
                  <Grid item xs={6} sm={6}>
                    <TextField
                      name="title"
                      value={values.title}
                      error={touched.title && errors.title}
                      helperText={touched.title && errors.title}
                      required
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="title"
                      label="Title"
                    />
                  </Grid>

                  {/* Description */}
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="description"
                      label="description"
                      name="description"
                      value={values.description}
                      error={touched.description && errors.description}
                      helperText={touched.description && errors.description}
                      multiline
                      minRows={4}
                    />
                  </Grid>

                  {/* Address */}
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="address"
                      label="Property Address"
                      name="address"
                      value={values.address}
                      error={touched.address && errors.address}
                      helperText={touched.address && errors.address}
                      autoComplete="address"
                      multiline
                      minRows={3}
                    />
                  </Grid>

                  {/* Capacity */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="capacity"
                      label="max capacity"
                      name="capacity"
                      value={values.capacity}
                      error={touched.capacity && errors.capacity}
                      helperText={touched.capacity && errors.capacity}
                    />
                  </Grid>

                  {/* Pincode */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="pincode"
                      label="Pin Code"
                      name="pincode"
                      value={values.pincode}
                      error={touched.pincode && errors.pincode}
                      helperText={touched.pincode && errors.pincode}
                    />
                  </Grid>

                  {/* City */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="city"
                      label="City"
                      name="city"
                      value={values.city}
                      error={touched.city && errors.city}
                      helperText={touched.city && errors.city}
                    />
                  </Grid>

                  {/* State */}
                  <Grid item xs={6}>
                    <TextField
                      required
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="state"
                      label="State"
                      name="state"
                      autoComplete="state"
                      value={values.state}
                      error={touched.state && errors.state}
                      helperText={touched.state && errors.state}
                    />
                  </Grid>

                  {/* Country */}
                  <Grid item xs={6}>
                    <TextField
                      required
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="country"
                      label="country"
                      type="country"
                      id="country"
                      autoComplete="country"
                      value={values.country}
                      error={touched.country && errors.country}
                      helperText={touched.country && errors.country}
                    />
                  </Grid>

                  {/* Phone Number */}
                  <Grid item xs={6}>
                    <TextField
                      required
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="phoneNumber"
                      label="Phone Number"
                      id="phoneNumber"
                      value={values.phoneNumber}
                      error={touched.phoneNumber && errors.phoneNumber}
                      helperText={touched.phoneNumber && errors.phoneNumber}
                    />
                  </Grid>

                  {/* Cost */}
                  <Grid item xs={12}>
                    <TextField
                      type="number"
                      required
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="cost"
                      label="Rent of Property"
                      id="cost"
                      value={values.cost}
                      error={touched.cost && errors.cost}
                      helperText={touched.cost && errors.cost}
                    />
                  </Grid>


                  <Grid item xs={12}>
                    <ImageUploader setFieldValue={setFieldValue} selectedfile={selectedfile} SetSelectedFile={SetSelectedFile} Files={Files} SetFiles={SetFiles} />
                  </Grid>

                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={!dirty || !isValid}
                  sx={{ mt: 3, mb: 2 }}
                >
                  Register This Property
                </Button>
                </Form>
              </Box>
            )
          }}
          </Formik>
      </Box>
    </Container>
  );
};

export default AddPropertyDetails;


