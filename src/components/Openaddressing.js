import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import "./App.css";
const Openaddressing = () => {
  const [cards] = useState([
    {
      title: "Linear Probbing",

      link: (
        <div class="nav-item">
          <a class="nav-link" className="cardt1" href="/Linearprobbing">
            Read More
          </a>
        </div>
      ),
      text: " A hash table in which a collision is resolved by putting the item in the next empty place in the array following the occupied place. Even with a moderate load factor, primary clustering tends to slow retrieval.",
    },
    {
      title: "Quadratic Probbing",

      link: (
        <div class="nav-item">
          <a class="nav-link" className="cardt1" href="/Quadraticprobbing">
            Read More
          </a>
        </div>
      ),
      text: "Quadratic probing is an open-addressing scheme where we look for the i2‘th slot in the i’th iteration if the given hash value x collides in the hash table. ",
    },
    {
      title: "Double Hashing",
      link: (
        <div class="nav-item">
          <a class="nav-link" className="cardt1" href="/Doublehashing">
            Read More
          </a>
        </div>
      ),
      text: "Double hashing is a collision resolution technique used in hash tables. It works by using two hash functions to compute two different hash values for a given key. The first hash function is used to compute the initial hash value, and the second hash function is used to compute the step size for the probing sequence.",
    },
  ]);
  return (
    <React.Fragment>
      <div className="op1">
        <h>
          Open addressing is a collision resolution technique in which a method
          known as probing is used to make efficient use of the hash table’s
          space. All elements are stored in the hash table itself in open
          addressing. Unlike chaining, multiple elements cannot be stored in the
          same slot in the hash table.
          <br />
          Probing : A collision is resolved by searching through alternate
          locations in the hash table until either the target key is located and
          the data is stored there itself. If some value is already present,
          then the information is stored at the next available space.This method
          is known as Probing. Open addressing is also known as Closed hashing.
          <br />
          Note that the size of the hash table must be greater than or equal to
          the total number of keys.
          <br />
          <br /> Steps followed in Open addressing : <br />
          <ul>
            <li> Keys are generated using a hash function. </li>
            <li>
              {" "}
              Go to the required generated index to find if it is empty or not.
            </li>
            <li>If the index is empty, then store data at that index.</li>
            <li>
              {" "}
              If there is a value already present at that location, then store
              data at the next available space.
            </li>
          </ul>
          <br />
          In this way, keys can be stored without any extra pointer or a linked
          list. In open addressing technique, each slot is either filled with a
          single key or left empty or nil.
          <br />
        </h>
      </div>
      <div className="OHH">
        <h>Open Addressing Types</h>
      </div>
      <div class="CRTTypes">
        <section>
          <div className="containert2">
            <div className="cards">
              {cards.map((card, i) => (
                <div key={i} className="card">
                  <h3>{card.title}</h3>
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

export default Openaddressing;
