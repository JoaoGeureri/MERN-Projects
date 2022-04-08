import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import styles from "./styles";
import instaverse from "./images/icons8-instagram-64.png";

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar style={styles.appBar} position="static" color="inherit">
        <Typography style={styles.heading} variant="h2" align="center">
          Instaverse
        </Typography>
        <img
          style={styles.image}
          src={instaverse}
          alt="instaverse"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
};
export default App;
