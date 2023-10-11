import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Openaddressing = () => {
    const [cards]=useState([
        {
          title:'Linear Probbing',
         
          link :<div class="nav-item">
          <a class="nav-link" className='cardt1' href="/Linearprobbing">Read More</a>
        </div>,
          text:" A hash table in which a collision is resolved by putting the item in the next empty place in the array following the occupied place. Even with a moderate load factor, primary clustering tends to slow retrieval."
        },
        {
          title:'Quadratic Probbing',
         
          link:<div class="nav-item">
          <a class="nav-link" className='cardt1' href="/Quadraticprobbing">Read More</a>
        </div>,
          text:"Quadratic probing is an open-addressing scheme where we look for the i2‘th slot in the i’th iteration if the given hash value x collides in the hash table. "
        },
        {
          title:'Double Hashing',
          link:<div class="nav-item">
          <a class="nav-link" className='cardt1' href="/Doublehashing">Read More</a>
          </div>,
          text:'Double hashing is a collision resolution technique used in hash tables. It works by using two hash functions to compute two different hash values for a given key. The first hash function is used to compute the initial hash value, and the second hash function is used to compute the step size for the probing sequence.'
        },
      ])
  return (
    <React.Fragment>
    <div className='op1'>
      <h>Open hashing, also known as separate chaining, is a collision resolution technique used in hash tables or hash maps to handle situations where multiple elements are mapped to the same hash index. In a hash table, each element is associated with a key-value pair, and the hash function is used to compute the index where the element should be stored.
<br/><br/>
In open hashing, instead of overwriting elements that have the same hash index, the technique allows multiple elements with the same hash index to be stored in linked data structures, such as linked lists, at that index. Each element that maps to the same index is appended to the linked list at that location. This means that each bucket (index) in the hash table can contain multiple elements, forming a chain of elements that share the same hash index.
<br></br>
When searching for an element using its key, the hash table first computes the hash index for the key and then follows the chain at that index to find the element. The search complexity in open hashing is directly related to the length of the chain at that particular index.
<br/><br/>
In summary, open hashing is a technique to handle hash collisions by chaining elements that have the same hash index into linked lists, reducing the risk of overwriting and improving the overall efficiency of hash table operations. It is one of the widely used collision resolution methods alongside closed hashing (also known as open addressing).</h>
    </div>
    <div className='OHH'>
        <h>Open Addressing/Closed Hashing Types</h>
    </div>
     <div classname="CRTTypes">
     <section>
         <div className='containert2'>
           
           <div className='cards'>
             {
               cards.map((card,i)=>(
                 <div key={i} className='card'>
               <h3>{card.title}</h3>
               <p>
               {
                 card.text
               }
 
               </p>
             
 <p>
   {
   card.link
 }
 </p>
             </div>
 
               ))
             }
             
           </div>
         </div>
       </section>
     </div>
   
     </React.Fragment>

  )
}

export default Openaddressing
