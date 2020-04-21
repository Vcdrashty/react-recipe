import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Page1 from "./components/page-1";
import Page2 from "./components/page-2";
import Page3 from "./components/page-3";
import Page4 from "./components/page-4";

const useStyles = makeStyles((theme) => ({
  app: {
    dispaly: "flex",
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Grid container>
        <Grid item xs={3}>
          <Page1 />
        </Grid>
        <Grid item xs={3}>
          <Page2 />
        </Grid>
        <Grid item xs={3}>
          <Page3 />
        </Grid>
        <Grid item xs={3}>
          <Page4 />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
