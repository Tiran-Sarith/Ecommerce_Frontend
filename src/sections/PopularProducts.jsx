import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const products = [
  { id: 1, name: "Product 1", description: "Description for Product 1.", image: "/static/images/cards/product1.jpg" },
  { id: 2, name: "Product 2", description: "Description for Product 2.", image: "/static/images/cards/product2.jpg" },
  { id: 3, name: "Product 3", description: "Description for Product 3.", image: "/static/images/cards/product3.jpg" },
  { id: 4, name: "Product 4", description: "Description for Product 4.", image: "/static/images/cards/product4.jpg" },
  { id: 5, name: "Product 5", description: "Description for Product 5.", image: "/static/images/cards/product5.jpg" },
  { id: 6, name: "Product 6", description: "Description for Product 6.", image: "/static/images/cards/product6.jpg" },
  { id: 7, name: "Product 7", description: "Description for Product 7.", image: "/static/images/cards/product7.jpg" },
  { id: 8, name: "Product 8", description: "Description for Product 8.", image: "/static/images/cards/product8.jpg" }
];

function PopularProducts() {
  return (
    <Grid container spacing={3} justifyContent="center">
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" alt={product.name} height="140" image={product.image} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Buy now</Button>
              <Button size="small">View more</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default PopularProducts;