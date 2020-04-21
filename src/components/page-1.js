import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { CardContent, CardMedia, Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 25,
    marginTop: 30,
    maxWidth: 350,
    height: 600,
    overflowY:"auto"
  },
  menuButton: {
    marginRight: theme.spacing(5),
  },
  media: {
    height: 130,
    width: 130,
  },
  grid: {
    padding: theme.spacing(1),
    maxWidth: 300,
  },
}));

export default function Page1() {
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
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" style={{ textAlign: "center" }}>
            Home
          </Typography>
        </Toolbar>
      </CardContent>
      <Divider />
      <Grid container>
        <Grid item xs={2} className={classes.grid}>
          <Card>
            <CardMedia
              className={classes.media}
              image="https://image.shutterstock.com/image-photo/oatmeal-cookies-chocolate-chips-on-600w-1666615762.jpg"
              title="Oatmeal Cookies"
            />
            <Typography variant="h6">Oatmeal Cookies</Typography>
            <Typography variant="body1">Cookies</Typography>
          </Card>
        </Grid>
        <Grid item xs={2} className={classes.grid}>
          <Card>
            <CardMedia
              className={classes.media}
              image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png"
              title="Triple Berry Smoothie"
            />
            <Typography variant="h6">Triple Berry Smoothie</Typography>
            <Typography variant="body1">Smoothies</Typography>
          </Card>
        </Grid>
        <Grid item xs={2} className={classes.grid}>
          <Card>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Vegan Cookies"
            />
            <Typography variant="h6">Vegan Cookies</Typography>
            <Typography variant="body1">Cookies</Typography>
          </Card>
        </Grid>
        <Grid item xs={2} className={classes.grid}>
          <Card>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/2372528/pexels-photo-2372528.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Pumpkin Spice Cookies"
            />
            <Typography variant="h6">Pumpkin Spice Cookies</Typography>
            <Typography variant="body1">Cookies</Typography>
          </Card>
        </Grid>
        <Grid item xs={2} className={classes.grid}>
          <Card>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/683499/pexels-photo-683499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Brownies"
            />
            <Typography variant="h6">Brownies</Typography>
            <Typography variant="body1">Cookies</Typography>
          </Card>
        </Grid>
        <Grid item xs={2} className={classes.grid}>
          <Card>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/674578/pexels-photo-674578.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Perfect Fish Tacos"
            />
            <Typography variant="h6">Perfect Fish Tacos</Typography>
            <Typography variant="body1">Mexican Food</Typography>
          </Card>
        </Grid>
        
        <Grid item xs={2} className={classes.grid}>
          <Card>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/765082/pexels-photo-765082.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Chicken Fajitas"
            />
            <Typography variant="h6">Chicken Fajitas</Typography>
            <Typography variant="body1">Mexican Food</Typography>
          </Card>
        </Grid>
        <Grid item xs={2} className={classes.grid}>
          <Card>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Buffalo Pizza"
            />
            <Typography variant="h6">Buffalo Pizza</Typography>
            <Typography variant="body1">Italian Food</Typography>
          </Card>
        </Grid>
        <Grid item xs={2} className={classes.grid}>
          <Card>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/2765875/pexels-photo-2765875.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Classic Lasagna"
            />
            <Typography variant="h6">Classic Lasagna</Typography>
            <Typography variant="body1">Pizza</Typography>
          </Card>
        </Grid>
        <Grid item xs={2} className={classes.grid}>
          <Card>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Spaghetti Carbonara"
            />
            <Typography variant="h6">Spaghetti Carbonara</Typography>
            <Typography variant="body1">Italian Food</Typography>
          </Card>
        </Grid>
        <Grid item xs={2} className={classes.grid}>
          <Card>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/921362/pexels-photo-921362.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Lasagna"
            />
            <Typography variant="h6">Lasagna</Typography>
            <Typography variant="body1">Italian Food</Typography>
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
}
