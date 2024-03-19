import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import FormControlContext from "@mui/material/FormControl/FormControlContext";
import CloseIcon from "@mui/icons-material/Close";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { enquire } from "../../api/enquiry";

const EnquiryForm = ({ property }) => {
  const [open, openchange] = useState(false);
  const [value, setValue] = useState(
    dayjs(new Date().toISOString().split("T")[0])
  );
  const navigate = useNavigate();
  const functionopenpopup = () => {
    openchange(true);
  };
  const closepopup = () => {
    openchange(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   name: data.get("name"),
    //   email: data.get("email"),
    //   phoneNumber: data.get("phoneNumber"),
    //   numberOfSeats: data.get("numberOfSeats"),
    //   date: data.get("checkIn"),
    //   propertyID: property.id,
    //   propertyName: property.name,
    // });
    let res = await enquire({
      data: {
        name: data.get("name"),
        email: data.get("email"),
        phoneNumber: data.get("phoneNumber"),
        numberOfSeats: data.get("numberOfSeats"),
        date: dayjs(data.get("checkIn")).format("YYYY-MM-DD"),
        propertyID: String(property.id),
        propertyName: property.name,
      },
    });

    if (res.success) {
      closepopup();
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
      navigate("/properties");
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
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack
        component="form"
        noValidate
        onSubmit={handleSubmit}
        spacing={2}
        margin={2}
      >
        <TextField
          name="name"
          variant="outlined"
          label="Full Name*"
        ></TextField>
        <TextField
          name="email"
          variant="outlined"
          label="Email*"
        ></TextField>
        <TextField
          name="phoneNumber"
          variant="outlined"
          label="Phone Number*"
        ></TextField>
        <TextField
          name="numberOfSeats"
          variant="outlined"
          label="No of people"
          type="number"
          inputProps={{ min: 0, max: 50, step: 1 }}
        ></TextField>
        <DatePicker
          name="checkIn"
          disablePast
          label="Select Date*"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
        <Button color="primary" type="submit" variant="contained">
          Enquire Now
        </Button>
      </Stack>
    </LocalizationProvider>
  );
};
export default EnquiryForm;
