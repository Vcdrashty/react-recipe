import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  makeStyles,
  Button,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
// import Carousel from "react-material-ui-carousel";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
    marginLeft: 30,
    maxWidth: 350,
    height: 600,
  },
  media: {
    height: 290,
  },
  text: {
    textAlign: "center",
    paddingInline: theme.spacing(3),
  },
}));

/*function Image(props) {
  const images = [
    {
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png",
      name: "Triple Berry Smoothie",
    },
    {
      image:
        "https://images.pexels.com/photos/434295/pexels-photo-434295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Smoothie",
    },
    {
      image:
        "https://images.pexels.com/photos/4239/restaurant-drink-colorful-colourful.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Smoothie",
    },
  ];
  return (
    <Carousel>
      {images.map((img) => {
          <CardMedia image={img.image}
                      title={img.name}/>
      })}
    </Carousel>
  );
}*/

export default function Page3() {
  const classes = useStyles();
  
  const handleClick = () => {
  };

  return (
    <div className={classes.root}>
      <Card>
        <ArrowBackIosIcon />
        <CardMedia
          className={classes.media}
          image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png"
          title="Triple Berry Smoothie"
        />
        <CardContent className={classes.text}>
          <Typography variant="h4">Triple Berry Smoothie</Typography>
          <Typography>SMOOTHIES</Typography>
          <Typography variant="h5">10 minutes</Typography>
          <Button variant="outlined" onClick={handleClick}>
            View Ingredients
          </Button>
          <Typography>
            In a blender, combine all ingredients and blend until smooth. Then
            divide between 2 cups and top with blackberries, if desired.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
