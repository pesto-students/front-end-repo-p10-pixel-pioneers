import { useEffect, useState } from "react";
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField } from "@mui/material";
import FormControlContext from "@mui/material/FormControl/FormControlContext";
import CloseIcon from "@mui/icons-material/Close";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const EnquiryForm = ({property}) => {
    const [open, openchange] = useState(false);
    const [value, setValue] = useState(dayjs(new Date().toISOString().split('T')[0]));

    const functionopenpopup = () => {
        openchange(true);
    }
    const closepopup = () => {
        openchange(false);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            fullName: data.get("fullName"),
            email: data.get("email"),
            phoneNumber: data.get("phoneNumber"),
            numberOfSeats: data.get("numberOfSeats"),
            checkIn: data.get("checkIn"),
            propertyID:property.id,
            propertyName: property.name
        });
        // await register({
        //   email: data.get("email"),
        //   password: data.get("password"),
        //   username: data.get("username"),
        //   firstName: data.get("firstName"),
        //   lastName: data.get("lastName"),
        //   phoneNumber: data.get("phoneNumber"),
        // });
      };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Get in Touch</h1>
            <Button onClick={functionopenpopup} color="primary" variant="contained">Open Popup</Button>
            <Dialog
                // fullScreen 
                open={open} onClose={closepopup} fullWidth maxWidth="sm">
                <DialogTitle>Private Office <IconButton onClick={closepopup} style={{ float: 'right' }}><CloseIcon color="primary"></CloseIcon></IconButton>  </DialogTitle>
                <DialogContent>
                    {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            spacing={2}
                            margin={2}
                        >
                            <TextField name="fullName" variant="outlined" label="Full Name*"></TextField>
                            <TextField name="email" variant="outlined" label="Email*"></TextField>
                            <TextField name="phoneNumber" variant="outlined" label="Phone Number*"></TextField>
                            <TextField name="numberOfSeats" variant="outlined" label="No of people" type="number" inputProps={{ min: 0, max: 50, step: 1 }}></TextField>
                            <DatePicker
                                name="checkIn"
                                disablePast
                                label="Select Date*"
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                            />
                            <Button color="primary" type="submit" variant="contained">Enquire Now</Button>
                        </Stack>
                    </LocalizationProvider>
                </DialogContent>
                <DialogActions>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default EnquiryForm  