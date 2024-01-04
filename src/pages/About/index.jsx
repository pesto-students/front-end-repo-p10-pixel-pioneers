import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  Card,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
  section: {
    marginBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(3),
  },
  teamMemberCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginBottom: theme.spacing(2),
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom>
            About Us
          </Typography>

          {/* Company Information Section */}
          <section className={classes.section}>
            <Paper className={classes.paper}>
              <Typography variant="h5" gutterBottom>
                Our Company
              </Typography>
              <Typography variant="body1">
                Add information about your company here... It is a long
                established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </Typography>
            </Paper>
          </section>
          {/* Team Members Section */}
          <section className={classes.section}>
            <Typography variant="h5" align="center" gutterBottom>
              Our Team
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              {/* Sample team members, replace with actual team data */}
              {[1, 2, 3].map((member) => (
                <Grid item xs={12} sm={4} key={member}>
                  <Card className={classes.teamMemberCard}>
                    <Avatar
                      alt={`Team Member ${member}`}
                      src={`https://via.placeholder.com/150`} // Replace with team member image URL
                      className={classes.avatar}
                    />
                    <CardContent>
                      <Typography variant="h6">Team Member {member}</Typography>
                      <Typography variant="body2">
                        Role/Position description
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </section>
          {/* Contact Section */}
          <section className={classes.section}>
            <Paper className={classes.paper}>
              <Typography variant="h5" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body1">
                Add contact information or a contact form here... Ipsum as their
                default model text, and a search for 'lorem ipsum' will uncover
                many web sites still in their infancy. Various versions have
                evolved over the years, sometimes by accident, sometimes on
                purpose (injected humour and the like).
                <br />
                Email: dummyEmail@proximityPods.com
                <br />
                Contact Number: +91 123762562
              </Typography>
            </Paper>
          </section>
        </Container>
      </div>
    </div>
  );
};

export default About;
