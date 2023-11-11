import React from "react";

import { useState } from "react";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [year, setYear] = useState("");
  const [division, setDivision] = useState("");
  const [review, setReview] = useState("");
  const [msg, setMsg] = useState("");
  function hName(e) {
    setName(e.target.value);
  }
  function hEmail(e) {
    setEmail(e.target.value);
  }
  function hPhone(e) {
    setPhone(e.target.value);
  }
  function hCollege(e) {
    setCollege(e.target.value);
  }
  function hYear(e) {
    setYear(e.target.value);
  }
  function hDiv(e) {
    setDivision(e.target.value);
  }
  function hRev(e) {
    setReview(e.target.value);
  }
  function save(e) {
    e.preventDefault();
    let data = { name, email, phone, college, year, division, review };
    let url = "http://127.0.0.1:8500"; // Include the protocol
    axios
      .post(url, data)
      .then((res) => {
        setMsg("WE GOT YOUR RESPONSE. Thank you!!!");
        setName("");
        setCollege("");
        setDivision("");
        setEmail("");
        setReview("");
        setPhone("");
        setYear("");
      })
      .catch((err) => setMsg(`Issue is ${err}`));
  }

  return (
    <>
      <section className="signupclass">
        <form onSubmit={save}>
          <div className="signupform">
            <div class="each-input">
              <label>Full Name:</label>{" "}
              <input
                onChange={hName}
                type="text"
                id="name"
                name="name"
                placeholder="Enter your Name"
                required
                value={name}
              />
            </div>
            <div class="each-input">
              <label>Email:</label>
              <input
                onChange={hEmail}
                type="email"
                id="email"
                placeholder="Enter your Email"
                name="email"
                required
                value={email}
              />
            </div>
            <div class="each-input">
              <label>Phone Number:</label>
              <input
                onChange={hPhone}
                type="tel"
                id="phone"
                placeholder="Enter your Phone number"
                name="phone"
                required
                value={phone}
              />
            </div>
            <div class="each-input">
              <label>College Name:</label>
              <input
                onChange={hCollege}
                type="text"
                id="college"
                placeholder="Enter your College name"
                name="college"
                required
                value={college}
              />
            </div>
            <div class="each-input">
              <label>Year:</label>
              <input
                onChange={hYear}
                type="text"
                id="year"
                name="year"
                placeholder="Currently Studying in which year"
                required
                value={year}
              />
            </div>
            <div class="each-input">
              <label> Division:</label>
              <input
                onChange={hDiv}
                type="text"
                id="division"
                name="division"
                placeholder=" Division"
                required
                value={division}
              />
            </div>
            <div class="each-input">
              <label>Share Your Thoughts:</label>
              <textarea
                onChange={hRev}
                id="thoughts"
                name="thoughts"
                placeholder="Any reviews for us"
                rows="4"
                cols="50"
                style={{ resize: "none" }}
                value={review}
              ></textarea>
              {/* <input type="text" /> */}
            </div>
            <div class="sub-form">
              <button class="submitt" type="submit">
                Submit
              </button>
              {/* <button type="button" class="btn btn-outline-success " id="sub">
                Submit
              </button> */}
              {/* <button
                type="button"
                class="btn btn-primary btn-outline-success btn-lg"
              >
                Submit
              </button> */}
            </div>
            <div class="sub-form">
              <h1>{msg}</h1>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Signup;
