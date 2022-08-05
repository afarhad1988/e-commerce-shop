import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const SummaryTotal = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  height: 300px;
  padding: 20px;
  margin-left: 30px;
`;
const SummaryTitle = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const SummaryItemTitle = styled.div`
  font-weight: bold;
`;
const SummaryItemPrice = styled.div`
  color: gray;
`;
const Button = styled.button`
  width: 100%;
  margin-top: 30px;
  border: none;
  background: none;
`;

const Summary = ({ item }) => {
  const { totalPrice } = useSelector((s) => s.cart);

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://ry7v05l6on.sse.codesandbox.io/checkout",
      { token, item }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <SummaryTotal>
      <SummaryTitle>Order Summary</SummaryTitle>
      <SummaryItem>
        <SummaryItemTitle>Subtotal:</SummaryItemTitle>
        <SummaryItemPrice>${totalPrice}</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem>
        <SummaryItemTitle>Shipping:</SummaryItemTitle>
        <SummaryItemPrice>$30</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem>
        <SummaryItemTitle>Discount:</SummaryItemTitle>
        <SummaryItemPrice>$30</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem>
        <SummaryItemTitle>Total:</SummaryItemTitle>
        <SummaryItemPrice>${totalPrice + 30 + 30}</SummaryItemPrice>
      </SummaryItem>

      <Button>
        {" "}
        <StripeCheckout
          token={handleToken}
          stripeKey={
            "pk_test_51LT7hKDbMjW3C9kYggAi5N67QUpMNbiMvf39cI0YD1aHZS0QfmZYyRRCjd5TBQhn4qrKM5X4T8BR2hUiMsV2RLqP00DDynxit9"
          }
          billingAddress
          shippingAddress
        />
      </Button>
      <ToastContainer />
    </SummaryTotal>
  );
};

export default Summary;
