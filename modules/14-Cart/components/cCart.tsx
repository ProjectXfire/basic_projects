import React, { useContext, useEffect } from "react";
// External libraries
import styled from "styled-components";
// Contexts
import { CartContext } from "../context/cartContext";
// Data
import { items } from "../data/items";
// Components
import { Item } from "./cItem";
import { TotalAmount } from "./cTotalAmount";

//******** COMPONENTS ********//

export const Cart = () => {
  //--> Hooks

  const {
    setValues,
    clearAll,
    state: { cart },
  } = useContext(CartContext);

  //--> Effects

  useEffect(() => {
    setValues(items);
  }, []);

  //--> Renders

  return (
    <SCart>
      <h2>YOUR BAG</h2>
      <div>
        {cart.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <TotalAmount />
      <SButtonContainer>
        <button type="button" onClick={clearAll}>
          Clear cart
        </button>
      </SButtonContainer>
    </SCart>
  );
};

//******** STYLES ********//

const SCart = styled.section`
  width: 90%;
  max-width: 1000px;
  margin: 80px auto 20px auto;
  & h2 {
    text-align: center;
  }
`;

const SButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  & button {
    padding: 8px 14px;
    background-color: white;
    color: #be2f2f;
    border: 2px solid #be2f2f;
    border-radius: 4px;
    font-weight: bold;
  }
`;
