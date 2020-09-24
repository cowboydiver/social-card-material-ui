import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CardActionArea,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import CommentIcon from "@material-ui/icons/Comment";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import "fontsource-roboto";

const useStyles = makeStyles({
  root: {
    width: 425,
    margin: 20,
  },
  avatar: {
    backgroundColor: red[500],
    display: "flex",
  },
  small: {
    width: 40,
    height: 40,
  },
  medium: {
    width: 55,
    height: 55,
  },
  large: {
    width: 70,
    height: 70,
  },
  cardImage: {
    height: 400,
  },
  interactionButton: {
    textAlign: "center",
    padding: "auto",
  },
});

export default function SocialCard(props) {
  const classes = useStyles();
  const userName = props.userName;
  const datePosted = props.datePosted;
  const postText = props.postText;
  const profilePictireURL = props.profilePictireURL;
  const postImage = props.postImage;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            alt="profile picture"
            src={profilePictireURL}
            className={(classes.avatar, classes.medium)}
          ></Avatar>
        }
        action={
          <IconButton>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        }
        title={userName}
        subheader={datePosted}
      ></CardHeader>
      <CardContent>
        <Typography variant="body2" component="p" gutterBottom>
          {postText}
        </Typography>
      </CardContent>
      <CardActionArea>
        <CardMedia className={classes.cardImage} image={postImage}></CardMedia>
      </CardActionArea>
      <CardActions display="flex" alignItems="stretch">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Button disableRipple variant="text" startIcon={<ThumbUpAltIcon />}>
              3
            </Button>
          </Grid>
          <Grid item>
            <Button disableRipple>34 Comments</Button>
            <Button disableRipple>2 shares</Button>
          </Grid>
        </Grid>
      </CardActions>
      <CardActions>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid className={classes.interactionButton} item xs>
            <Button disableRipple variant="text" startIcon={<ThumbUpAltIcon />}>
              Like
            </Button>
          </Grid>
          <Grid className={classes.interactionButton} item xs>
            <Button disableRipple variant="text" startIcon={<CommentIcon />}>
              Comment
            </Button>
          </Grid>
          <Grid className={classes.interactionButton} item xs>
            <Button disableRipple variant="text" startIcon={<ShareIcon />}>
              Share
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
