import React, { useState } from "react";
// import HDS from "./images/HDS.png"

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [collisionResolution, setCollisionResolution] = useState(false);
  function hMobileNav() {
    const headerEl = document.querySelector(".header");
    headerEl.classList.toggle("nav-open");
    const mainNav = document.querySelector(".main-nav");
    mainNav.classList.display = "flex";
  }
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;

    switch (selectedValue) {
      case "techniques":
        // Handle accordingly
        break;
      case "open-addressing":
        window.location.href = "/openaddressing";
        break;
      case "separate-chaining":
        window.location.href = "/separatechaining";
        break;
      case "bucket-hashing":
        window.location.href = "/buckethashing";
        break;
      case "linear-probbing":
        window.location.href = "/linearprobbing";
        break;
      case "quadratic-probbing":
        window.location.href = "/quadraticprobbing";
        break;
      case "double-hashing":
        window.location.href = "/doublehashing";
        break;
      default:
        break;
    }
  };

  return (
    // <div className="Navbar0">
    //   <section className="navbar-bg">
    //     <nav
    //       className="scrollbar"
    //       class="navbar navbar-expand-lg navbar-dark bg-dark"
    //     >
    //       <select value={collisionResolution} onChange={handleSelectChange}>
    //         <option value="techniques">Table Of Contents</option>
    //         <option value="open-addressing">Open Addressing</option>
    //         <option value="linear-probbing">Linear Probbing</option>
    //         <option value="quadratic-probbing">Quadratic Probing</option>
    //         <option value="double-hashing">Double hashing</option>
    //         <option value="separate-chaining">Open Hashing</option>
    //         <option value="bucket-hashing">Bucket Hashing</option>
    //       </select>
    //       <div class="container">
    //         <a class="navbar-brand" href="#">
    //           <h className="heading">Hashing In Data Structures</h>
    //         </a>

    //         <button
    //           class="navbar-toggler"
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#navbarSupportedContent"
    //           aria-controls="navbarSupportedContent"
    //           aria-expanded="false"
    //           aria-label="Toggle navigation"
    //           onClick={() => setShow(!show)}
    //         >
    //           <span class="navbar-toggler-icon"></span>
    //         </button>

    //         <div
    //           className="anothernav"
    //           class={`collapse navbar-collapse ${show ? "show" : ""}`}
    //         >
    //           <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
    //             <li class="nav-item">
    //               <a class="nav-link active" aria-current="page" href="/">
    //                 Home
    //               </a>
    //             </li>

    //             <li class="nav-item">
    //               <a class="nav-link" href="/about-us">
    //                 About Us
    //               </a>
    //             </li>
    //             <li class="nav-item">
    //               {/* <li class="nav-item">
    //       <a class="nav-link" href="">Simulation</a>
    //     </li> */}
    //               <a class="nav-link" href="/contact">
    //                 Contact
    //               </a>
    //             </li>
    //             <li class="nav-item">
    //               <a class="nav-link" href="/simulation">
    //                 Simulation
    //               </a>
    //             </li>
    //             {/* <li class="nav-item">
    //       <a class="nav-link" href="/signup">Sign up</a>
    //     </li> */}
    //           </ul>
    //           {/* <form class="d-flex">
    //     <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //     <button class="btn btn-outline-success" type="submit">SignUp</button>
    //     <button class="btn btn-outline-success" type="submit">Login</button>

    //   </form> */}
    //         </div>
    //       </div>
    //     </nav>
    //   </section>
    // </div>
    <>
      {/* <div className="nav-container">
        <div>
          {" "}
          <select
            className="table"
            value={collisionResolution}
            onChange={handleSelectChange}
          >
            <option value="techniques">Table Of Contents</option>
            <option value="open-addressing">Open Addressing</option>
            <option value="linear-probbing">Linear Probbing</option>
            <option value="quadratic-probbing">Quadratic Probing</option>
            <option value="double-hashing">Double hashing</option>
            <option value="separate-chaining">Open Hashing</option>
            <option value="bucket-hashing">Bucket Hashing</option>{" "}
          </select>
        </div>
        <div>
          <h1 class="topic">Hashing in Data structure</h1>
        </div>
        <nav class="main-nav">
          <ul class="header-list">
            <li>
              <a class="header-list-links" href="#howItWorks">
                How it works
              </a>
            </li>
            <li>
              <a class="header-list-links" href="#mealls">
                Meals
              </a>
            </li>
            <li>
              <a class="header-list-links" href="#testemonialss">
                Testimonials
              </a>
            </li>
            <li>
              <a class="header-list-links" href="#pricing">
                Pricing
              </a>
            </li>
            <li>
              <a
                class="header-list-links  header-list-button"
                href="#tryForFree"
              >
                Try for free
              </a>
            </li>
          </ul>
        </nav>
        <button class="mobile-nav">
          <ion-icon class="icon-mobile-nav1" name="menu-outline"></ion-icon>
          <ion-icon class="icon-mobile-nav2" name="close-outline"></ion-icon>
        </button> */}
      {/* <div class="main-nav">
          <a class="nav-button" href="/">
            Home
          </a>
          <a class="nav-button" href="/about-us">
            About us
          </a>
          <a class="nav-button" href="/contact">
            Contact us
          </a>
          <a class="nav-button simulation-btn" href="/simulation">
            Simulation
          </a>
        </div>
        <div class="mobile-nav-btn">
          {" "}
          <button onClick={hMobileNav}>
            <ion-icon
              id="mob-icon"
              class="icon-mobile-nav1"
              name="menu-outline"
            ></ion-icon>
            {/* <ion-icon class="icon-mobile-nav2" name="close-outline"></ion-icon> */}
      {/* </button> */}
      {/* </div> */}
      {/* </div> */}
      <div className="header1 sticky">
        {/* <div class="topic1">
          <h1>Hashing in Data structure</h1>
        </div> */}
        <header class="header ">
          <div>
            {" "}
            <select
              className="table"
              value={collisionResolution}
              onChange={handleSelectChange}
            >
              <option value="techniques">Table Of Contents</option>
              <option value="open-addressing">Open Addressing</option>
              <option value="linear-probbing">Linear Probbing</option>
              <option value="quadratic-probbing">Quadratic Probing</option>
              <option value="double-hashing">Double hashing</option>
              <option value="separate-chaining">Open Hashing</option>
              <option value="bucket-hashing">Bucket Hashing</option>{" "}
            </select>
          </div>{" "}
          <div>
            <h1 class="topic">Hashing in Data structure</h1>
          </div>
          <nav class="main-nav">
            <ul class="header-list">
              <li>
                <a class="header-list-links" href="/">
                  Home
                </a>
              </li>
              <li>
                <a class="header-list-links" href="/about-us">
                  About us
                </a>
              </li>
              <li>
                <a class="header-list-links" href="/contact">
                  Contact us
                </a>
              </li>
              <li>
                <a class="header-list-links simulation-btn" href="/simulation">
                  Simulation
                </a>
              </li>
            </ul>
          </nav>
          <button onClick={hMobileNav} class="mobile-nav">
            <ion-icon class="icon-mobile-nav1" name="menu-outline"></ion-icon>
            <ion-icon class="icon-mobile-nav2" name="close-outline"></ion-icon>
          </button>
        </header>
      </div>
    </>
  );
};

export default Navbar;
