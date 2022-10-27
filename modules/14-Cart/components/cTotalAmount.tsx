import React, { useContext } from "react";
// External libraries
import styled from "styled-components";
// Contexts
import { CartContext } from "../context/cartContext";

//******** COMPONENTS ********//

export const TotalAmount = () => {
  //--> Hooks

  const {
    state: { totalAmount },
  } = useContext(CartContext);

  //--> Renders

  return (
    <STotalAmount>
      <p>Total</p>
      <p>${totalAmount.toFixed(2)}</p>
    </STotalAmount>
  );
};

//******** STYLES ********//

const STotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  border-top: 2px solid black;
  font-weight: bold;
`;
