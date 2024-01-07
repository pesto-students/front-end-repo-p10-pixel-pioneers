import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Typography,
  createTheme,
} from "@material-ui/core";

const darkTheme = createTheme({
  palette: {
    type: "dark",
    background: {
      default: "#000",
    },
    text: {
      primary: "#000",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    "& .MuiInputLabel-root": {
      color: "#000",
    },
    "& .MuiInputBase-input": {
      color: "#000",
    },
  },
  checkbox: {
    color: "#000",
    marginTop: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(3),
  },
}));

export default function BookSpaceForm() {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.root}>
        <Typography variant="h5" gutterBottom style={{ color: "#000" }}>
          Book a Space
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={12}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                required
                type="email"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={12}>
              <TextField
                label="Type"
                variant="outlined"
                fullWidth
                required
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6} md={6} lg={2}>
              <TextField
                label="Start Date"
                variant="outlined"
                fullWidth
                type="date"
                required
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6} md={6} lg={2}>
              <TextField
                label="End Date"
                variant="outlined"
                fullWidth
                type="date"
                required
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={12}>
              <FormControlLabel
                control={<Checkbox color="default" />}
                label="I agree to the Terms of service and Privacy policy of Cospace company"
                className={classes.checkbox}
                required
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.submitButton}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </ThemeProvider>
  );
}
