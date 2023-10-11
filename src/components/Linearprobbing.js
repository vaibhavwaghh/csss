import React from 'react'
import { Carousel } from 'react-bootstrap'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {Container,Row,Tabs,Tab} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Linearprobbing = () => {
  const codeString=`#include <bits/stdc++.h>
  using namespace std;
  
  // template for generic type
  template <typename K, typename V>
  
  // Hashnode class
  class HashNode {
  public:
    V value;
    K key;
  
    // Constructor of hashnode
    HashNode(K key, V value)
    {
      this->value = value;
      this->key = key;
    }
  };
  
  // template for generic type
  template <typename K, typename V>
  
  // Our own Hashmap class
  class HashMap {
    // hash element array
    HashNode<K, V>** arr;
    int capacity;
    // current size
    int size;
    // dummy node
    HashNode<K, V>* dummy;
  
  public:
    HashMap()
    {
      // Initial capacity of hash array
      capacity = 20;
      size = 0;
      arr = new HashNode<K, V>*[capacity];
  
      // Initialise all elements of array as NULL
      for (int i = 0; i < capacity; i++)
        arr[i] = NULL;
  
      // dummy node with value and key -1
      dummy = new HashNode<K, V>(-1, -1);
    }
    // This implements hash function to find index
    // for a key
    int hashCode(K key)
    {
      return key % capacity;
    }
  
    // Function to add key value pair
    void insertNode(K key, V value)
    {
      HashNode<K, V>* temp = new HashNode<K, V>(key, value);
  
      // Apply hash function to find index for given key
      int hashIndex = hashCode(key);
  
      // find next free space
      while (arr[hashIndex] != NULL
        && arr[hashIndex]->key != key
        && arr[hashIndex]->key != -1) {
        hashIndex++;
        hashIndex %= capacity;
      }
  
      // if new node to be inserted
      // increase the current size
      if (arr[hashIndex] == NULL
        || arr[hashIndex]->key == -1)
        size++;
      arr[hashIndex] = temp;
    }
  
    // Function to delete a key value pair
    V deleteNode(int key)
    {
      // Apply hash function
      // to find index for given key
      int hashIndex = hashCode(key);
  
      // finding the node with given key
      while (arr[hashIndex] != NULL) {
        // if node found
        if (arr[hashIndex]->key == key) {
          HashNode<K, V>* temp = arr[hashIndex];
  
          // Insert dummy node here for further use
          arr[hashIndex] = dummy;
  
          // Reduce size
          size--;
          return temp->value;
        }
        hashIndex++;
        hashIndex %= capacity;
      }
  
      // If not found return null
      return NULL;
    }
  
    // Function to search the value for a given key
    V get(int key)
    {
      // Apply hash function to find index for given key
      int hashIndex = hashCode(key);
      int counter = 0;
  
      // finding the node with given key
      while (arr[hashIndex] != NULL) { // int counter =0; // BUG!
  
        if (counter++ > capacity) // to avoid infinite loop
          return NULL;
  
        // if node found return its value
        if (arr[hashIndex]->key == key)
          return arr[hashIndex]->value;
        hashIndex++;
        hashIndex %= capacity;
      }
  
      // If not found return null
      return NULL;
    }
  
    // Return current size
    int sizeofMap()
    {
      return size;
    }
  
    // Return true if size is 0
    bool isEmpty()
    {
      return size == 0;
    }
  
    // Function to display the stored key value pairs
    void display()
    {
      for (int i = 0; i < capacity; i++) {
        if (arr[i] != NULL && arr[i]->key != -1)
          cout << "key = " << arr[i]->key
            << " value = "
            << arr[i]->value << endl;
      }
    }
  };
  
  // Driver method to test map class
  int main()
  {
    HashMap<int, int>* h = new HashMap<int, int>;
    h->insertNode(1, 1);
    h->insertNode(2, 2);
    h->insertNode(2, 3);
    h->display();
    cout << h->sizeofMap() << endl;
    cout << h->deleteNode(2) << endl;
    cout << h->sizeofMap() << endl;
    cout << h->isEmpty() << endl;
    cout << h->get(2);
  
    return 0;
  }
  `
  const codeStr2=`// Our own HashNode class
  class HashNode {
    int key;
    int value;
  
    public HashNode(int key, int value) {
      this.key = key;
      this.value = value;
    }
  }
  
  // Our own Hashmap class
  class HashMap {
    // hash element array
    int capacity;
    int size;
    HashNode[] arr;
    // dummy node
    HashNode dummy;
  
    public HashMap() {
      this.capacity = 20;
      this.size = 0;
      this.arr = new HashNode[this.capacity];
      // initialize with dummy node
      this.dummy = new HashNode(-1, -1);
    }
  
    // This implements hash function to find index for a key
    public int hashCode(int key) {
      return key % this.capacity;
    }
  
    // Function to add key value pair
    public void insertNode(int key, int value) {
      HashNode temp = new HashNode(key, value);
      // Apply hash function to find index for given key
      int hashIndex = hashCode(key);
      // find next free space
      while (this.arr[hashIndex] != null && this.arr[hashIndex].key != key && this.arr[hashIndex].key != -1) {
        hashIndex++;
        hashIndex %= this.capacity;
      }
      // if new node to be inserted, increase the current size
      if (this.arr[hashIndex] == null || this.arr[hashIndex].key == -1) {
        this.size++;
      }
      this.arr[hashIndex] = temp;
    }
  
    // Function to delete a key value pair
    public int deleteNode(int key) {
      // Apply hash function to find index for given key
      int hashIndex = hashCode(key);
      // finding the node with given key
      while (this.arr[hashIndex] != null) {
        // if node found
        if (this.arr[hashIndex].key == key) {
          HashNode temp = this.arr[hashIndex];
          // Insert dummy node here for further use
          this.arr[hashIndex] = this.dummy;
          // Reduce size
          this.size--;
          return temp.value;
        }
        hashIndex++;
        hashIndex %= this.capacity;
      }
      // If not found return -1
      return -1;
    }
  
    // Function to search the value for a given key
    public int get(int key) {
      // Apply hash function to find index for given key
      int hashIndex = hashCode(key);
      int counter = 0;
      // finding the node with given key
      while (this.arr[hashIndex] != null) {
        // If counter is greater than capacity to avoid infinite loop
        if (counter > this.capacity) {
          return -1;
        }
        // if node found return its value
        if (this.arr[hashIndex].key == key) {
          return this.arr[hashIndex].value;
        }
        hashIndex++;
        hashIndex %= this.capacity;
        counter++;
      }
      // If not found return 0
      return 0;
    }
  
    // Return current size
    public int sizeofMap() {
      return this.size;
    }
  
    // Return true if size is 0
    public boolean isEmpty() {
      return this.size == 0;
    }
  
    // Function to display the stored key value pairs
    public void display() {
      for (int i = 0; i < this.capacity; i++) {
        if (this.arr[i] != null && this.arr[i].key != -1) {
          System.out.println("key = " + this.arr[i].key + " value = " + this.arr[i].value);
        }
      }
    }
  }
  
  public class Main {
    public static void main(String[] args) {
      HashMap h = new HashMap();
      h.insertNode(1, 1);
      h.insertNode(2, 2);
      h.insertNode(2, 3);
      h.display();
      System.out.println(h.sizeofMap());
      System.out.println(h.deleteNode(2));
      System.out.println(h.sizeofMap());
      System.out.println(h.isEmpty());
      System.out.println(h.get(2));
    }
  }
  `
  const codeStr3=`# Our own Hashnode class
  class HashNode:
    def __init__(self, key, value):
      self.key = key
      self.value = value
  
  # Our own Hashmap class
  class HashMap:
    # hash element array
    def __init__(self):
      self.capacity = 20
      self.size = 0
      self.arr = [None] * self.capacity
      # dummy node
      self.dummy = HashNode(-1, -1)
  
    # This implements hash function to find index for a key
    def hashCode(self, key):
      return key % self.capacity
  
    # Function to add key value pair
    def insertNode(self, key, value):
      temp = HashNode(key, value)
      # Apply hash function to find index for given key
      hashIndex = self.hashCode(key)
      # find next free space
      while self.arr[hashIndex] is not None and self.arr[hashIndex].key != key and self.arr[hashIndex].key != -1:
        hashIndex += 1
        hashIndex %= self.capacity
      # if new node to be inserted, increase the current size
      if self.arr[hashIndex] is None or self.arr[hashIndex].key == -1:
        self.size += 1
      self.arr[hashIndex] = temp
  
    # Function to delete a key value pair
    def deleteNode(self, key):
      # Apply hash function to find index for given key
      hashIndex = self.hashCode(key)
      # finding the node with given key
      while self.arr[hashIndex] is not None:
        # if node found
        if self.arr[hashIndex].key == key:
          temp = self.arr[hashIndex]
          # Insert dummy node here for further use
          self.arr[hashIndex] = self.dummy
          # Reduce size
          self.size -= 1
          return temp.value
        hashIndex += 1
        hashIndex %= self.capacity
      # If not found return None
      return None
  
    # Function to search the value for a given key
    def get(self, key):
      # Apply hash function to find index for given key
      hashIndex = self.hashCode(key)
      counter = 0
      # finding the node with given key
      while self.arr[hashIndex] is not None:
        # If counter is greater than capacity to avoid infinite loop
        if counter > self.capacity:
          return None
        # if node found return its value
        if self.arr[hashIndex].key == key:
          return self.arr[hashIndex].value
        hashIndex += 1
        hashIndex %= self.capacity
        counter += 1
      # If not found return None
      return 0
  
    # Return current size
    def sizeofMap(self):
      return self.size
  
    # Return true if size is 0
    def isEmpty(self):
      return self.size == 0
  
    # Function to display the stored key value pairs
    def display(self):
      for i in range(self.capacity):
        if self.arr[i] is not None and self.arr[i].key != -1:
          print("key = ", self.arr[i].key, " value = ", self.arr[i].value)
  
  # Driver method to test map class
  if __name__ == "__main__":
    h = HashMap()
    h.insertNode(1, 1)
    h.insertNode(2, 2)
    h.insertNode(2, 3)
    h.display()
    print(h.sizeofMap())
    print(h.deleteNode(2))
    print(h.sizeofMap())
    print(h.isEmpty())
    print(h.get(2))
  `
  ;
  return (
    <React.Fragment>
    <div className='lp1'>
      <h>
      In linear probing, the hash table is systematically examined beginning at the hash's initial point. If the site we receive is already occupied, we look for a different one.
<br/><br/>
The rehashing function is as follows: table-size = (n+1)% rehash(key). As may be seen in the sample below, the usual space between two probes is 1.
<br/><br/>

Let S be the size of the table and let hash(x) be the slot index calculated using a hash algorithm.
      </h>
    </div>
    <div className='lp2'>
        If slot hash (x) % S is full, then we try ( hash (x) + 1 ) % S  <br></br>
If ( hash (x) + 1 ) % S is also full, then we try ( hash (x) + 2) % S<br></br>  
If ( hash (x) + 2 ) % S is also full, then we try ( hash (x) + 3 ) % S   <br></br>
.................................................. <br></br> 
..................................................  <br></br>

    </div>
    <div className="ex1">
      <h>Example of Linear Probbing</h>
    </div>
    <div className="car">
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-b100lock w-"
          src="https://i.ibb.co/Wkb2428/1.jpg"
          alt="First slide"
        />
        <Carousel.Caption >
          <div className="pic1"><p>First Slide</p></div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/m0YZv6X/2.jpg"
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
          src="https://i.ibb.co/LQ1BpcH/3.jpg"
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
          src="https://i.ibb.co/Jvg9c1r/4.jpg"
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
          src="https://i.ibb.co/YkjHqft/5.jpg"
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <div className="pic5">
          <p>Fifth Slide</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/982f2DT/6.jpg"
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <div className="pic5">
          <p>Sixth Slide</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/GJ8HzHY/7.jpg"
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <div className="pic5">
          <p>Seventh Slide</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className='lp2'>
        <strong>Primary Clustering:</strong> Primary clustering is one of the issues with linear probing. Many successive items form clusters, making it difficult to locate a free slot or to search for an element.
        <br/><br/>
<strong>Secondary Clustering:</strong> Secondary clustering is less severe, and two records can only share a collision chain (also known as a probe sequence) if they start out in the same location.
<br/><br/>
<strong>Advantage-</strong>
<br></br>
Calculating this is simple.<br></br>
<strong>Disadvantage-</strong>
<ul>
 <li>Clustering is the fundamental issue with linear probing.</li>
 <li>Groups are composed of several adjacent pieces.</li>
 <li>After then, searching for an element or an empty bucket takes time.</li>   
</ul>



<strong>Time Complexity:</strong>
<br></br>

The worst time in linear probing to search an element is O ( table size ). This is due to
<br></br>
<ul>
    <li>even if all other elements are absent and there is only one element.</li>
    <li>The hash table's "deleted" markers then force a full table search.</li>
</ul>
<Container className='py-4'>
        <Row className='justify-content-center'>
            <Tabs justify variant="pills" defaultActiveKey="tab-1" className='mb-1 p-0'>
                <Tab eventKey="tab-1" title="CPP" className='cs'>
                  <div className="max-w-2x1 min-w-[25rem] bg-[#C0AEF1]  rounded-md overflow-hidden">
                    <div className="flex justify-between px-4 text-pink text-xs items-center">
                        <p className='text-sm' class="eg">Example Code</p>
                        {/* <button class="b1"className='py-1 inline-flex items-center gap-1'>
                          <span className='text-bae'>
                            <ion-icon name="clipboard-outline" ></ion-icon> </span>
                          Copy Code
                         
                        </button> */}

                    </div>
                <SyntaxHighlighter language="jsx" style={atomOneDark} customStyle={{
                  padding: '25 px',
                }}>

      {codeString}
    </SyntaxHighlighter>
    </div>
                </Tab>
                <Tab eventKey="tab-2" title="JAVA">
                <div className="max-w-2x1 min-w-[25rem] bg-[#C0AEF1]  rounded-md overflow-hidden">
                    <div className="flex justify-between px-4 text-pink text-xs items-center">
                        <p className='text-sm' class="eg">Example Code</p>
                        {/* <button class="b1"className='py-1 inline-flex items-center gap-1'>
                          <span className='text-bae'>
                            <ion-icon name="clipboard-outline" ></ion-icon> </span>
                          Copy Code
                         
                        </button> */}

                    </div>
                <SyntaxHighlighter language="jsx" style={atomOneDark} customStyle={{
                  padding: '25 px',
                }}>

      {codeStr2}
    </SyntaxHighlighter>
    </div>
                </Tab>
                <Tab eventKey="tab-3" title="Python3">
                <div className="max-w-2x1 min-w-[25rem] bg-[#C0AEF1]  rounded-md overflow-hidden">
                    <div className="flex justify-between px-4 text-pink text-xs items-center">
                        <p className='text-sm' class="eg">Example Code</p>
                        {/* <button class="b1"className='py-1 inline-flex items-center gap-1'>
                          <span className='text-bae'>
                            <ion-icon name="clipboard-outline" ></ion-icon> </span>
                          Copy Code
                         
                        </button> */}

                    </div>
                <SyntaxHighlighter language="jsx" style={atomOneDark} customStyle={{
                  padding: '25 px',
                }}>

      {codeStr3}
    </SyntaxHighlighter>
    </div>
                </Tab>
            </Tabs>
        </Row>
    
    </Container>

</div>
    </React.Fragment>
  )
}

export default Linearprobbing
