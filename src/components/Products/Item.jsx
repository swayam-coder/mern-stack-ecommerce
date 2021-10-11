import React from "react";
import { useCommerce } from '../../contexts/commercejs-functions';

const Item = ({ product }) => {
    const { handleWishlist, handleAddToCart } = useCommerce()
    return (
      <div className="col">
      <div className="card shadow-sm">
        <div className="imageContainer">
            <img src={product.media.source} className="image mx-auto" alt="productImage"></img>
        </div>

        <div className="card-body">
          <p className="card-text" dangerouslySetInnerHTML={{ __html: product.description }} />  {/*if we dont add dangerouslySetInnerHTML={{ __html: product.description }} and make <p> a self closing tag then it will return <p>your description</p> */}
          <div className="d-flex justify-content-between align-items-center">
            <h4>{product.price.formatted_with_symbol}</h4>
            {/* <button type="button" className="btn btn-sm btn-secondary">Add to cart</button> */}
            <div className="btn-group">
              {/* <button type="button" className="btn btn-sm btn-outline-secondary">View the product</button> */}
              <button type="button" className="btn btn-sm btn-outline-secondary" style={{marginRight: 15}} onClick={() => handleAddToCart(product.id, 1)}><i class="fas fa-cart-arrow-down"></i> Add to cart</button>
              <button type="button" className="btn btn-outline-primary" onClick={() => handleWishlist(product.id, 1)}><i class="far fa-heart"></i></button>
            </div>
            {/* <small className="text-muted">9 mins</small> */}
          </div>
        </div>
      </div>
    </div>
    );
}

export default Item;