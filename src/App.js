import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Payment } from "./features/payment/Payment";
import { Donate } from "./features/preview/Donate";
import { Preview } from "./features/preview/Preview";
import { Status } from "./features/status/Status";
import Donations from "./components/Donations";
import "./App.css";

const App = () => {
  const [amount, setAmount] = useState(25);

  return (
    <Router>
      <Switch>
        <Route path="/donate/:type">
          <Donate amount={amount} />
        </Route>
        <Route path="/preview/:type">
          <Preview />
        </Route>
        <Route path="/checkout/:type">
          <Payment />
        </Route>
        <Route path="/status/:type">
          <Status />
        </Route>
        <Route path="/">
          <div className="main-container">
            <Donations />
            {/* <div className="info">
              <h1>Select a demo</h1>
              <p>Click to view an interactive example of a PCI-compliant React UI integration for online payments.</p>
              <p>
                Make sure the payment method you want to use are enabled for your account. Refer{" "}
                <a href="https://docs.adyen.com/payment-methods#add-payment-methods-to-your-account">the documentation</a> to add missing
                payment methods.
              </p>
              <p>
                To learn more about client-side integration solutions, check out{" "}
                <a href="https://docs.adyen.com/checkout">Online payments.</a>
              </p>
            </div> */}

            <h1>Premium Account</h1>
            <ul className="integration-list">
              <li className="integration-list-item">
                <Link to="/preview/dropin" className="integration-list-item-link">
                  <div className="title-container">
                    <p className="integration-list-item-title">Premium</p>
                  </div>
                </Link>
              </li>
              {/* <li className="integration-list-item">
                <Link to="/donate/dropin" className="integration-list-item-link">
                  <div onClick={() => setAmount(25)} className="title-container">
                    <p className="integration-list-item-title">$25,- Donation</p>
                  </div>
                </Link>
              </li>
              <li className="integration-list-item">
                <Link to="/preview/ideal" className="integration-list-item-link">
                  <div className="title-container">
                    <p className="integration-list-item-title">iDEAL</p>
                  </div>
                </Link>
              </li>
              <li className="integration-list-item">
                <Link to="/preview/giropay" className="integration-list-item-link">
                  <div className="title-container">
                    <p className="integration-list-item-title">giropay</p>
                  </div>
                </Link>
              </li>
              <li className="integration-list-item">
                <Link to="/preview/dotpay" className="integration-list-item-link">
                  <div className="title-container">
                    <p className="integration-list-item-title">Dotpay</p>
                  </div>
                </Link>
              </li>
              <li className="integration-list-item">
                <Link to="/preview/eps" className="integration-list-item-link">
                  <div className="title-container">
                    <p className="integration-list-item-title">EPS</p>
                  </div>
                </Link>
              </li>
              <li className="integration-list-item">
                <Link to="/preview/directEbanking" className="integration-list-item-link">
                  <div className="title-container">
                    <p className="integration-list-item-title">Sofort</p>
                  </div>
                </Link>
              </li>
              <li className="integration-list-item">
                <Link to="/preview/bcmc" className="integration-list-item-link">
                  <div className="title-container">
                    <p className="integration-list-item-title">Bancontact card</p>
                  </div>
                </Link>
              </li>
              <li className="integration-list-item">
                <Link to="/preview/paysafecard" className="integration-list-item-link">
                  <div className="title-container">
                    <p className="integration-list-item-title">PaySafe card</p>
                  </div>
                </Link>
              </li> */}
            </ul>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
