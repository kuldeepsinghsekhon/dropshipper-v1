import React from 'react';

const Product = ({id, name, description, img, price }) => {

  return (
   
    <div classname="Product">
    <img src={img} />
    <h2> {name}</h2>
    <h2 className="f5 fw4 gray mt0">{description}</h2>
    <span>$ {price}</span>
  </div>
  );
};

export default Product;