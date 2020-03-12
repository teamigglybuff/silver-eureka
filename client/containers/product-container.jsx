import React from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';


function productContainer () {
  const { id } = useParams();
  const allProducts = useSelector((state) => state.products.allProducts);
  // console.log(allProducts)
  // console.log('id', id)
  const currentProduct = allProducts.filter((el) => {
    console.log('in this filter');
    return el.id === Number(id);
  });


  // console.log('current product', currentProduct);
  const { description, item, link, price } = currentProduct[0];
  return(
    <div id="productContainer">
      <p>Hoi this is a product page</p>
      <br></br>
      <img src={link}></img>
      <h4>{item}</h4>
      <p>
        {description}
      </p>
    </div>
  )
};

export default productContainer;
