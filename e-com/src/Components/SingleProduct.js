import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../Context/Context";

const SingleProduct = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  console.log(cart);
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>${product.price.split(".")[0]}</span>
          </Card.Subtitle>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>{product.Description}</span>
          </Card.Subtitle>
          {cart.some((p) => p.id === product.id) ? (
            <Button
              variant="danger"
              onClick={() => {
                dispatch({
                  type: "REMOVE-FROM-CART",
                  payload: product,
                });
              }}
            >
              Remove
            </Button>
          ) : (
            <Button
              disabled={!product.inStock}
              onClick={() => {
                dispatch({
                  type: "ADD-TO-CART",
                  payload: product,
                });
              }}
            >
              {!product.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
