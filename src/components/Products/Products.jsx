import React from 'react';
import { useCommerce } from '../../contexts/commercejs-functions';
import Item from './Item';

const Products = () => {
    const { products } = useCommerce()
    return(
    <main>
    <div className="album py-5 bg-light">
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {products.map((product) => (             
                <Item product = {product}/>
            ))}
      </div>
    </div>
  </div>
</main>
    )
    // const classes = useStyles();
    // return (
    // <main>
    //     <Grid container spacing={3} direction="row" className={classes.grid} >
    //         {products.map((product) => (      
    //             
    //                 <Item product={product}/>
    //             
    //         ))}
    //     </Grid>
    // </main>
    // );
}

export default Products;