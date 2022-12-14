import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconBotton } from '@material-ui/core';
import { AddShoppingCart } from '@muaterial-ui/icons';
import useStyles from './styles';

// import { ClassNames } from '@emotion/react';
// import { Label } from '@mui/icons-material';
const Product = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image='' title={product.name}  />
<CardContent>
    <div className={classes.cardContent}>
      <Typography variant="h5" gutterBottom>
         {product.name}
      </Typography>
      <Typography variant="h5">
         {product.price}
      </Typography>
      </div>
      <Typography variant="h2" color="textSecondary">{product.description}</Typography>
</CardContent>
<CardActions disableSpacing className={classes.CardActions}>
    <IconBotton aria-label="Add to Cart">
      <AddShoppingCart/>
     </IconBotton>
</CardActions>
    </Card>
  )
}

export default Product