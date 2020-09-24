import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { store } from "../../app/storage";

export function Donate() {
  const userData = useContext(store);
  let { type } = useParams();

  const { donation } = userData.state;
  return (
    <main className="preview-page">
      <section className="cart">
        <h2>Cart</h2>
        <div className="order-summary">
          <ul className="order-summary-list">
            <li className="order-summary-list-list-item">
              <img src="/images/donations.png" className="order-summary-list-list-item-image-donation" alt="" />
              <p className="order-summary-list-list-item-title">Donation</p>
              <p className="order-summary-list-list-item-price">{donation}</p>
            </li>
          </ul>
        </div>
        <div className="cart-footer">
          <span className="cart-footer-label">Total:</span>
          <span className="cart-footer-amount">{donation}</span>
          <Link to={`/checkout/${type}`}>
            <p className="button">Continue to checkout</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
