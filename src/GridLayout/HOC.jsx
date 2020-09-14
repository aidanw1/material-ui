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

//Instead of having a grid container for each item
const Container = (props) => <Grid container {...props} />;
//Intead of writing lots of grid items like in justify
//Easier to read when you have lots of layout components

//Renders Grid item component set to true
// const Item = (props) => <Grid item {...props} />;
//You can use the same breakpoints if you are using them over and over again
//No need to write them out for each item
//You can still override any of the breakpoints just by passing the property to any item
const Item = (props) => <Grid item xs={12} sm={6} md={3} {...props} />;

const AbstractingContainersAndItems = withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
    {" "}
    <Container spacing={4}>
      <Item>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
      </Item>
      <Item>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>{" "}
      </Item>
      <Item>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
      </Item>
      <Item>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
      </Item>
    </Container>
  </div>
));
export default AbstractingContainersAndItems;
