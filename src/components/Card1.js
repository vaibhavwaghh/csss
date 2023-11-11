import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Slider from "./Slider";
import hm1 from "./images/hm1.jpg";
import hm2 from "./images/hm2.jpg";
import hm3 from "./images/hm3.jpg";
import hm4 from "./images/hm4.jpg";
import hm5 from "./images/hm5.jpg";
const Card1 = () => {
  const [cards] = useState([
    {
      title: "Open Addressing",

      link: (
        <div class="nav-item">
          <a class="nav-link" className="cardt1" href="/Openaddressing">
            Read More
          </a>
        </div>
      ),
      text: "Open hashing, also known as separate chaining, is a collision resolution technique used in hash tables or hash maps to handle situations where multiple elements are mapped to the same hash index. In a hash table, each element is associated with a key-value pair, and the hash function is used to compute the index where the element should be stored.",
    },
    {
      title: "Separate Chaining/Open Hashing",

      link: (
        <div class="nav-item">
          <a class="nav-link" className="cardt1" href="/Separatechaining">
            Read More
          </a>
        </div>
      ),
      text: "The idea behind separate chaining is to implement the array as a linked list called a chain. Separate chaining is one of the most popular and commonly used techniques in order to handle collisions.",
    },
    {
      title: "Bucket Hashing",
      link: (
        <div class="nav-item">
          <a class="nav-link" className="cardt1" href="/Buckethashing">
            Read More
          </a>
        </div>
      ),
      text: "Open hashing, also known as separate chaining, is a collision resolution technique used in hash tables. Hash tables are data structures that store key-value pairs and provide efficient lookup, insertion, and deletion operations.",
    },
  ]);
  const images = [hm1, hm2, hm3, hm4, hm5];
  return (
    <React.Fragment>
      <div className="ex1-1">
        <h>Example of Collision In Hashing</h>
      </div>
      <Slider images={images} />
      <div className="car">
        {/* <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-b100lock w-"
          src="https://i.ibb.co/cctj1pP/1.jpg"
          alt="First slide"
        />
        <Carousel.Caption >
          <div className="pic1"><p>First Slide</p></div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/ynJptTP/2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className="pic2">
          <p>Second Slide</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/H2vH5v0/3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className="pic3">
          <p>
            Third Slide
          </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/wM00YX3/4.jpg"
          alt="Fouth slide"
        />
        <Carousel.Caption>
          <div className="pic4">
          <p>Fourth Slide</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/Z1tLpvw/5.jpg"
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <div className="pic5">
          <p>Fifth Slide</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
      </div>
      <div className="crtimage">
        <img
          id="img-open-address"
          src="https://i.ibb.co/2YxbVxS/Whats-App-Image-2023-08-02-at-5-12-47-PM.jpg"
          alt="crtimage"
        />
      </div>
      <div className="CRTHeading">
        <h>
          <strong>Types Of Collision Resolution Techniques</strong>
        </h>
      </div>
      <div classname="CRTTypes">
        <section>
          <div className="containert1">
            <div className="cards">
              {cards.map((card, i) => (
                <div key={i} className="card">
                  <h1>{card.title}</h1>
                  <p>{card.text}</p>

                  <p>{card.link}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Card1;
