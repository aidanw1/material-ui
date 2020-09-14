import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});

//If you wnt a fixed number of columns you should only specify the xs breakpoint property
const FixedColumnLayout = withStyles(styles)(({ classes, width }) => (
  <div className={classes.root}>
    <Grid container spacing={4}>
      {" "}
      <Grid item xs={width}>
        <Paper className={classes.paper}>xs={width}</Paper>{" "}
      </Grid>
      <Grid item xs={width}>
        <Paper className={classes.paper}>xs={width}</Paper>{" "}
      </Grid>
      <Grid item xs={width}>
        <Paper className={classes.paper}>xs={width}</Paper>
      </Grid>
      <Grid item xs={width}>
        <Paper className={classes.paper}>xs={width}</Paper>{" "}
      </Grid>
      <Grid item xs={width}>
        <Paper className={classes.paper}>xs={width}</Paper>
      </Grid>
      <Grid item xs={width}>
        <Paper className={classes.paper}>xs={width}</Paper>{" "}
      </Grid>
      <Grid item xs={width}>
        <Paper className={classes.paper}>xs={width}</Paper>
      </Grid>
      <Grid item xs={width}>
        <Paper className={classes.paper}>xs={width}</Paper>{" "}
      </Grid>
    </Grid>
    <h1>Fixed Grid - Scales dependent of width</h1>
    {/* Because values are set to xs which is 6(50%) - the grid items will only ever use two columns
    The items themselves will change their width to accommodate screen width */}
    <div className={classes.root}>
      {" "}
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>{" "}
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>{" "}
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>{" "}
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>{" "}
        </Grid>
      </Grid>
    </div>
  </div>
));
export default FixedColumnLayout;
