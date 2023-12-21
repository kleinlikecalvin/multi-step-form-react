import React from "react";
export default function UserInfo() {
  return (
    <form>
      <h1>Personal Info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <label htmlFor="name">Name</label>
      <input type="text" placeholder="e.g. Stephen King" name="name" />
      <label htmlFor="email">Email Address</label>
      <input type="email" name="email" />
      <label htmlFor="phone">Phone Number</label>
      <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone" />
    </form>
  );
}
