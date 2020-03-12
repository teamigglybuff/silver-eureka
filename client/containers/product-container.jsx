import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NavBar from '../components/nav-bar.jsx';
import AddButton from '../components/preview-add-button.jsx';


function productContainer() {
  const { id } = useParams();
  const allProducts = useSelector((state) => state.products.allProducts);
  // console.log(allProducts)
  // console.log('id', id)
  const currentProduct = allProducts.filter((el) => el.id === Number(id));


  // console.log('current product', currentProduct);
  const {
    description, item, link, price,
  } = currentProduct[0];
  return (
    <div id="productContainer">
      <NavBar />
      <p>Hoi this is a product page</p>
      <br />
      <img src={link} />
      <h4>{item}</h4>
      <p>
        {description}
      </p>
      <p>{price}</p>
      <AddButton item={currentProduct[0]} />
    </div>
  );
}

export default productContainer;
