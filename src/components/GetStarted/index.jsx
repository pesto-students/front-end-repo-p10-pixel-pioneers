import React from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import Title from "../Title";
import imgDetail from "../../Assets/8.jpg";
import six from "../../Assets/10.jpg";

const GetStarted = () => {
  const CustomGridItem = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });

  const CustomTypography = styled(Typography)({
    fontSize: "1.1rem",
    textAlign: "start",
    lineHeight: "1.5",
    color: "#515151",
    marginTop: "1.5rem",
  });

  return (
    <Grid
      container
      spacing={{ xs: 4, sm: 4, md: 0 }}
      sx={{
        py: 10,
        px: 2,
      }}
      className="section-1-home"
    >
      <CustomGridItem item xs={12} sm={8} md={6} component="section">
        <Box
          component="article"
          sx={{
            px: 4,
          }}
        >
          <Title text={"Welcome to the joy of coworking"} textAlign={"start"} />
          <CustomTypography>
            Embrace a dynamic work culture, and enjoy move-in-ready spaces for
            your growing teams. Explore our fully-furnished, private, lockable
            spaces with access to shared amenities and conference rooms.
          </CustomTypography>
        </Box>
      </CustomGridItem>

      <Grid item xs={12} sm={4} md={6}>
        <img
          src={imgDetail}
          alt=""
          style={{
            width: "100%",
            borderRadius: "15px",
          }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={4}
        md={6}
        sx={{
          order: { xs: 4, sm: 4, md: 3 },
        }}
      >
        <img
          src={six}
          alt=""
          style={{
            width: "100%",
            borderRadius: "15px",
          }}
        />
      </Grid>

      <CustomGridItem
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          order: { xs: 3, sm: 3, md: 4 },
        }}
      >
        <Box
          component="article"
          sx={{
            px: 4,
          }}
        >
          <Title
            text={"Discover a collaborative private office space"}
            textAlign={"start"}
          />
          <CustomTypography>
            At ProximityPods, you’ll find joy in our thoughtfully designed
            spaces, in our commitment to your well-being and growth, and in your
            interactions with one of the largest communities of working
            professionals in India.
          </CustomTypography>
        </Box>
      </CustomGridItem>
    </Grid>
  );
};

export default GetStarted;
