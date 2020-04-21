import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { CardContent, CardMedia, Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 30,
    marginTop: 30,
    maxWidth: 350,
    height: 600,
    overflowY: "auto"
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  media: {
    height: 150,
    width: 300,
  },
  grid: {
    padding: theme.spacing(2),
    maxWidth: 300,
  },
  text: {
    textAlign: "center",
  },
}));

export default function Page2() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="elevation">
      <CardContent>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
          >
            <ArrowBackIosIcon />
            <Typography>Home</Typography>
          </IconButton>
          <Typography variant="h5" style={{ textAlign: "center" }}>
            Categories
          </Typography>
        </Toolbar>
      </CardContent>
      <Divider />
      <Grid container>
        <Grid item xs={3} className={classes.grid}>
          <Card>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/6747/food-dessert-sweet-color.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Cookies"
            />
            <div className={classes.text}>
              <Typography variant="h6">Cookies</Typography>
              <Typography variant="body1">4 recipes</Typography>
            </div>
          </Card>
        </Grid>
        <Grid item xs={3} className={classes.grid}>
          <Card>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Mexican Food"
            />
            <div className={classes.text}>
              <Typography variant="h6">Mexican Food</Typography>
              <Typography variant="body1">2 recipes</Typography>
            </div>
          </Card>
        </Grid>
        <Grid item xs={3} className={classes.grid}>
          <Card>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/1239312/pexels-photo-1239312.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Italian Food"
            />
            <div className={classes.text}>
              <Typography variant="h6">Italian Food</Typography>
              <Typography variant="body1">3 recipes</Typography>
            </div>
          </Card>
        </Grid>
        <Grid item xs={3} className={classes.grid}>
          <Card>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Smoothies"
            />
            <div className={classes.text}>
              <Typography variant="h6">Smoothies</Typography>
              <Typography variant="body1">2 recipes</Typography>
            </div>
          </Card>
        </Grid>
        <Grid item xs={3} className={classes.grid}>
          <Card>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Pizzas"
            />
            <div className={classes.text}>
              <Typography variant="h6">Pizzas</Typography>
              <Typography variant="body1">2 recipes</Typography>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
}
