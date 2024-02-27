import React from "react";
import { Cart } from "../constants";
import StepHeader from "./StepHeader";
import NavButtons from "./NavButtons";
import "./UserInfo.scss";

const FIELD_REQ_MESSAGE = "This field is required";
const EMAIL_INVALID = "Email is invalid";
const PHONE_INVALID = "Phone number is invalid";

export default function UserInfo({
  cart,
  updateCart,
  updateActiveStep,
}: {
  cart: Cart;
  updateCart: Function;
  updateActiveStep: Function;
}) {
  const [name, setName] = React.useState(cart.userInfo.name);
  const [nameError, setNameError] = React.useState("");
  const [email, setEmail] = React.useState(cart.userInfo.email);
  const [emailError, setEmailError] = React.useState("");
  const [phone, setPhone] = React.useState(cart.userInfo.phone);
  const [phoneError, setPhoneError] = React.useState("");

  return (
    <div className="UserInfo grid-d">
      <section className="content">
        <StepHeader
          title="Personal Info"
          desc="Please provide your name, email address, and phone number."
        />
        <form>
          <label htmlFor="name">
            Name
            {nameError && <span className="error active">{nameError}</span>}
          </label>
          <input
            type="text"
            placeholder="e.g. Stephen King"
            name="name"
            value={name}
            className={nameError ? "info error active" : "info"}
            onChange={(e) => {
              setNameError("");
              setName(e.target.value);
            }}
          />
          <label htmlFor="email">
            Email Address
            {emailError && <span className="error active">{emailError}</span>}
          </label>
          <input
            type="email"
            name="email"
            placeholder="e.g. email@website.com"
            value={email}
            className={emailError ? "info error active" : "info"}
            onChange={(e) => {
              setEmailError("");
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="phone">
            Phone Number
            {phoneError && <span className="error active">{phoneError}</span>}
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="e.g. +1 234 567 8910"
            value={phone}
            className={phoneError ? "info error active" : "info"}
            onChange={(e) => {
              setPhoneError("");
              setPhone(e.target.value);
            }}
          />
        </form>
      </section>
      <NavButtons
        hideButton={true}
        nextClick={() => {
          const emailRegExp = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
          const phoneRegExp =
            /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/;
          let errors = false;

          if (name === "") {
            setNameError(FIELD_REQ_MESSAGE);
            errors = true;
          }
          if (email === "") {
            setEmailError(FIELD_REQ_MESSAGE);
            errors = true;
          } else if (!emailRegExp.test(email)) {
            setEmailError(EMAIL_INVALID);
            errors = true;
          }
          if (phone === "") {
            setPhoneError(FIELD_REQ_MESSAGE);
            errors = true;
          } else if (!phoneRegExp.test(phone)) {
            setPhoneError(PHONE_INVALID);
            errors = true;
          }

          if (!errors) {
            updateCart((cart: Cart) => ({
              ...cart,
              userInfo: {
                name,
                email,
                phone,
              },
            }));
            updateActiveStep(2);
          }
        }}
      />
    </div>
  );
}
