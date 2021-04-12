import React from 'react';

const Cart = (props) => {
  const addCountry=props.cart
  let totalPopulation=0;
  for (let i = 0; i < addCountry.length; i++) {
      const newCountry = addCountry[i];
      totalPopulation=totalPopulation + newCountry.population;
  }
    return (
        <div>
            <h1>this is cart:{addCountry.length}</h1>
           <p>total:{totalPopulation}</p>
        </div>
    );
};

export default Cart;