import React from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function AllFilms({ pageContext: { allFilms } }) {
  const classes = useStyles();
return(
  <div style={{ padding: 20 }}>
    <Typography variant="h4" component="h4">#tiff22 Films Quick Reference</Typography>
  <Grid container spacing={4}>
      {allFilms.map(film => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card variant="outlined" xs={1} md={4}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={film.posterUrl}
                title="{film.title}"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {film.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {film.description}
                </Typography>
              </CardContent>
              <CardContent>
                Directors: {film.d}<br />
                Languages: {film.languages}<br />
                Countries: {film.countries}<br />
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Fav Coming Soon
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
  </Grid>
  </div>
)
};

export const Head = () => <Seo title="#tiff22 films" />