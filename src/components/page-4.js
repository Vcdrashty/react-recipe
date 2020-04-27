import React from "react";
import {
  Grid,
  Toolbar,
  makeStyles,
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
    marginLeft: 30,
    maxWidth: 300,
    height:600,
    overflowY:"auto"
  },
  button: {
    marginRight: theme.spacing(5),
  },
  media: {
    height: 60,
    width: 60,
    padding: theme.spacing(2),
  },
  grid: {
    padding: theme.spacing(1),
    maxWidth: 90,
  },
}));
export default function Page4() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card variant="outlined">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.button}
            aria-label="menu"
            color="primary"
          >
            <ArrowBackIosIcon />
            <Typography color="primary">Back</Typography>
          </IconButton>
          <Typography variant="h5" style={{ textAlign: "center" }} noWrap>
            Ingredients for Pumpkin Cookie
          </Typography>
        </Toolbar>
        <Grid container>
          <Grid item xs={1} className={classes.grid}>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Oil"
            />
            <CardContent>
              <Typography>Oil</Typography>
              <Typography variant="body2">2 tablespoons</Typography>
            </CardContent>
          </Grid>
          <Grid item xs={1} className={classes.grid}>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/244395/pexels-photo-244395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Chopped Onion"
            />
            <CardContent>
              <Typography>Onion Chopped</Typography>
              <Typography variant="caption">1/2</Typography>
            </CardContent>
          </Grid>
          <Grid item xs={1} className={classes.grid}>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/53588/tomatoes-vegetables-food-frisch-53588.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Tomato Paste"
            />
            <CardContent>
              <Typography>Tomato Paste</Typography>
              <Typography variant="caption">2 tablespoons</Typography>
            </CardContent>
          </Grid>
          <Grid item xs={1} className={classes.grid}>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/1460862/pexels-photo-1460862.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Garlic Powder"
            />
            <CardContent>
              <Typography>Garlic Powder</Typography>
              <Typography variant="caption">2 cloves</Typography>
            </CardContent>
          </Grid>
          <Grid item xs={1} className={classes.grid}>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/33038/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Paprika"
            />
            <CardContent>
              <Typography>Paprika</Typography>
              <Typography variant="caption">1 teaspon</Typography>
            </CardContent>
          </Grid>
          <Grid item xs={1} className={classes.grid}>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/1091778/pexels-photo-1091778.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Chili Powder"
            />
            <CardContent>
              <Typography>Chili Powder</Typography>
              <Typography variant="caption">1 tablespoon</Typography>
            </CardContent>
          </Grid>
          <Grid item xs={1} className={classes.grid}>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/128401/pexels-photo-128401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Ground Beef"
            />
            <CardContent>
              <Typography>Ground Beef</Typography>
              <Typography variant="caption">1 lb</Typography>
            </CardContent>
          </Grid>
          <Grid item xs={1} className={classes.grid}>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/452744/pexels-photo-452744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Salt"
            />
            <CardContent>
              <Typography>Salt</Typography>
              <Typography variant="caption">2 tablespoon</Typography>
            </CardContent>
          </Grid>
          <Grid item xs={1} className={classes.grid}>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/14593/SW_Gabriela%2BLupu.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Pepper"
            />
            <CardContent>
              <Typography>Black Pepper</Typography>
              <Typography variant="caption">2 teaspoons</Typography>
            </CardContent>
          </Grid>
          <Grid item xs={1} className={classes.grid}>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/1313643/pexels-photo-1313643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Kidney Beans"
            />
            <CardContent>
              <Typography>Can kidney beans, rinsed and drained</Typography>
              <Typography variant="caption">15 oz</Typography>
            </CardContent>
          </Grid>
          <Grid item xs={1} className={classes.grid}>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/1200362/pexels-photo-1200362.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Tortilla"
            />
            <CardContent>
              <Typography>Large Tortillas</Typography>
              <Typography variant="caption">8</Typography>
            </CardContent>
          </Grid>
          <Grid item xs={1} className={classes.grid}>
            <CardMedia className={classes.media} image="" title="Firtos" />
            <CardContent>
              <Typography>Firtos</Typography>
              <Typography variant="caption">2</Typography>
            </CardContent>
          </Grid>
          <Grid item xs={1} className={classes.grid}>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Shredded cheddar"
            />
            <CardContent>
              <Typography>Shredded Cheddar</Typography>
              <Typography variant="caption">2 cups</Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
