import React from 'react'
import { Carousel } from 'react-bootstrap'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {Container,Row,Tabs,Tab} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Separatechaining = () => {
  const codeString=`#include <stdio.h>
  #include <stdlib.h>
  #include <string.h>
  
  // Linked List node
  struct node {
  
    // key is string
    char* key;
  
    // value is also string
    char* value;
    struct node* next;
  };
  
  // like constructor
  void setNode(struct node* node, char* key, char* value)
  {
    node->key = key;
    node->value = value;
    node->next = NULL;
    return;
  };
  
  struct hashMap {
  
    // Current number of elements in hashMap
    // and capacity of hashMap
    int numOfElements, capacity;
  
    // hold base address array of linked list
    struct node** arr;
  };
  
  // like constructor
  void initializeHashMap(struct hashMap* mp)
  {
  
    // Default capacity in this case
    mp->capacity = 100;
    mp->numOfElements = 0;
  
    // array of size = 1
    mp->arr = (struct node**)malloc(sizeof(struct node*)
                    * mp->capacity);
    return;
  }
  
  int hashFunction(struct hashMap* mp, char* key)
  {
    int bucketIndex;
    int sum = 0, factor = 31;
    for (int i = 0; i < strlen(key); i++) {
  
      // sum = sum + (ascii value of
      // char * (primeNumber ^ x))...
      // where x = 1, 2, 3....n
      sum = ((sum % mp->capacity)
        + (((int)key[i]) * factor) % mp->capacity)
        % mp->capacity;
  
      // factor = factor * prime
      // number....(prime
      // number) ^ x
      factor = ((factor % __INT16_MAX__)
          * (31 % __INT16_MAX__))
          % __INT16_MAX__;
    }
  
    bucketIndex = sum;
    return bucketIndex;
  }
  
  void insert(struct hashMap* mp, char* key, char* value)
  {
  
    // Getting bucket index for the given
    // key - value pair
    int bucketIndex = hashFunction(mp, key);
    struct node* newNode = (struct node*)malloc(
  
      // Creating a new node
      sizeof(struct node));
  
    // Setting value of node
    setNode(newNode, key, value);
  
    // Bucket index is empty....no collision
    if (mp->arr[bucketIndex] == NULL) {
      mp->arr[bucketIndex] = newNode;
    }
  
    // Collision
    else {
  
      // Adding newNode at the head of
      // linked list which is present
      // at bucket index....insertion at
      // head in linked list
      newNode->next = mp->arr[bucketIndex];
      mp->arr[bucketIndex] = newNode;
    }
    return;
  }
  
  void delete (struct hashMap* mp, char* key)
  {
  
    // Getting bucket index for the
    // given key
    int bucketIndex = hashFunction(mp, key);
  
    struct node* prevNode = NULL;
  
    // Points to the head of
    // linked list present at
    // bucket index
    struct node* currNode = mp->arr[bucketIndex];
  
    while (currNode != NULL) {
  
      // Key is matched at delete this
      // node from linked list
      if (strcmp(key, currNode->key) == 0) {
  
        // Head node
        // deletion
        if (currNode == mp->arr[bucketIndex]) {
          mp->arr[bucketIndex] = currNode->next;
        }
  
        // Last node or middle node
        else {
          prevNode->next = currNode->next;
        }
        free(currNode);
        break;
      }
      prevNode = currNode;
      currNode = currNode->next;
    }
    return;
  }
  
  char* search(struct hashMap* mp, char* key)
  {
  
    // Getting the bucket index
    // for the given key
    int bucketIndex = hashFunction(mp, key);
  
    // Head of the linked list
    // present at bucket index
    struct node* bucketHead = mp->arr[bucketIndex];
    while (bucketHead != NULL) {
  
      // Key is found in the hashMap
      if (bucketHead->key == key) {
        return bucketHead->value;
      }
      bucketHead = bucketHead->next;
    }
  
    // If no key found in the hashMap
    // equal to the given key
    char* errorMssg = (char*)malloc(sizeof(char) * 25);
    errorMssg = "Oops! No data found.\n";
    return errorMssg;
  }
  
  // Drivers code
  int main()
  {
  
    // Initialize the value of mp
    struct hashMap* mp
      = (struct hashMap*)malloc(sizeof(struct hashMap));
    initializeHashMap(mp);
  
    insert(mp, "Yogaholic", "Anjali");
    insert(mp, "pluto14", "Vartika");
    insert(mp, "elite_Programmer", "Manish");
    insert(mp, "GFG", "GeeksforGeeks");
    insert(mp, "decentBoy", "Mayank");
  
    printf("%s\n", search(mp, "elite_Programmer"));
    printf("%s\n", search(mp, "Yogaholic"));
    printf("%s\n", search(mp, "pluto14"));
    printf("%s\n", search(mp, "decentBoy"));
    printf("%s\n", search(mp, "GFG"));
  
    // Key is not inserted
    printf("%s\n", search(mp, "randomKey"));
  
    printf("\nAfter deletion : \n");
  
    // Deletion of key
    delete (mp, "decentBoy");
    printf("%s\n", search(mp, "decentBoy"));
  
    return 0;
  }
  `
  const codeStr2=`#include <iostream>
  #include <cstring>
  
  // Linked List node
  struct node {
    // key is string
    char* key;
    // value is also string
    char* value;
    struct node* next;
  };
  
  // like constructor
  void setNode(struct node* node, char* key, char* value) {
    node->key = key;
    node->value = value;
    node->next = NULL;
    return;
  }
  
  struct hashMap {
    // Current number of elements in hashMap
    // and capacity of hashMap
    int numOfElements, capacity;
    // hold base address array of linked list
    struct node** arr;
  };
  
  // like constructor
  void initializeHashMap(struct hashMap* mp) {
    // Default capacity in this case
    mp->capacity = 100;
    mp->numOfElements = 0;
    // array of size = 1
    mp->arr = (struct node**)malloc(sizeof(struct node*) * mp->capacity);
    return;
  }
  
  int hashFunction(struct hashMap* mp, char* key) {
    int bucketIndex;
    int sum = 0, factor = 31;
    for (int i = 0; i < strlen(key); i++) {
      // sum = sum + (ascii value of
      // char * (primeNumber ^ x))...
      // where x = 1, 2, 3....n
      sum = ((sum % mp->capacity) + (((int)key[i]) * factor) % mp->capacity) % mp->capacity;
      // factor = factor * prime
      // number....(prime
      // number) ^ x
      factor = ((factor % __INT16_MAX__) * (31 % __INT16_MAX__)) % __INT16_MAX__;
    }
    bucketIndex = sum;
    return bucketIndex;
  }
  
  void insert(struct hashMap* mp, char* key, char* value) {
    // Getting bucket index for the given
    // key - value pair
    int bucketIndex = hashFunction(mp, key);
    struct node* newNode = (struct node*)malloc(
      // Creating a new node
      sizeof(struct node));
    // Setting value of node
    setNode(newNode, key, value);
    // Bucket index is empty....no collision
    if (mp->arr[bucketIndex] == NULL) {
      mp->arr[bucketIndex] = newNode;
    }
    // Collision
    else {
      // Adding newNode at the head of
      // linked list which is present
      // at bucket index....insertion at
      // head in linked list
      newNode->next = mp->arr[bucketIndex];
      mp->arr[bucketIndex] = newNode;
    }
    return;
  }
  
  void deleteKey(struct hashMap* mp, char* key) {
    // Getting bucket index for the
    // given key
    int bucketIndex = hashFunction(mp, key);
    struct node* prevNode = NULL;
    // Points to the head of
    // linked list present at
    // bucket index
    struct node* currNode = mp->arr[bucketIndex];
    while (currNode != NULL) {
      // Key is matched at delete this
      // node from linked list
      if (strcmp(key, currNode->key) == 0) {
        // Head node
        // deletion
        if (currNode == mp->arr[bucketIndex]) {
          mp->arr[bucketIndex] = currNode->next;
        }
        // Last node or middle node
        else {
          prevNode->next = currNode->next;
  }
  free(currNode);
  break;
  }
  
  prevNode = currNode;
      currNode = currNode->next;
    }
  return;
  }
  
  char* search(struct hashMap* mp, char* key) {
  // Getting the bucket index for the given key
  int bucketIndex = hashFunction(mp, key);
  // Head of the linked list present at bucket index
  struct node* bucketHead = mp->arr[bucketIndex];
  
  while (bucketHead != NULL) {
    
    // Key is found in the hashMap
    if (strcmp(bucketHead->key, key) == 0) {
      return bucketHead->value;
    }
    
    bucketHead = bucketHead->next;
  }
  
  // If no key found in the hashMap equal to the given key
  char* errorMssg = (char*)malloc(sizeof(char) * 25);
  strcpy(errorMssg, "Oops! No data found.\n");
  return errorMssg;
  }
  
  
  // Drivers code
  int main()
  {
  // Initialize the value of mp
  struct hashMap* mp = (struct hashMap*)malloc(sizeof(struct hashMap));
  initializeHashMap(mp);
  insert(mp, "Yogaholic", "Anjali");
  insert(mp, "pluto14", "Vartika");
  insert(mp, "elite_Programmer", "Manish");
  insert(mp, "GFG", "GeeksforGeeks");
  insert(mp, "decentBoy", "Mayank");
  
  printf("%s\n", search(mp, "elite_Programmer"));
  printf("%s\n", search(mp, "Yogaholic"));
  printf("%s\n", search(mp, "pluto14"));
  printf("%s\n", search(mp, "decentBoy"));
  printf("%s\n", search(mp, "GFG"));
  
  // Key is not inserted
  printf("%s\n", search(mp, "randomKey"));
  
  printf("\nAfter deletion : \n");
  
  // Deletion of key
  deleteKey(mp, "decentBoy");
  
  // Searching the deleted key
  printf("%s\n", search(mp, "decentBoy"));
  return 0;
  }
  `;
  return (
    <React.Fragment>
    <div className='sc1'>
      <h>The idea behind separate chaining is to implement the array as a linked list called a chain. Separate chaining is one of the most popular and commonly used techniques in order to handle collisions.</h>
    </div>
    <div className='sc2'>
    The linked list data structure is used to implement this technique. So what happens is, when multiple elements are hashed into the same slot index, then these elements are inserted into a singly-linked list which is known as a chain. 


    </div>
    <div className='sc3'>
    Here, all those elements that hash into the same slot index are inserted into a linked list. Now, we can use a key K to search in the linked list by just linearly traversing. If the intrinsic key for any entry is equal to K then it means that we have found our entry. If we have reached the end of the linked list and yet we haven’t found our entry then it means that the entry does not exist. Hence, the conclusion is that in separate chaining, if two different elements have the same hash value then we store both the elements in the same linked list one after the other.
    </div>
    <div className='sc4'>
   <strong> Advantages:</strong><br></br>
   <ul>
    <li>Simple to implement.</li>
    <li>Hash table never fills up, we can always add more elements to the chain.</li>
    <li>Less sensitive to the hash function or load factors.</li>
    <li>It is mostly used when it is unknown how many and how frequently keys may be inserted or deleted. </li>
   </ul>
 
 
 

<strong>Disadvantages:</strong> <br></br>
<ul>
    <li>The cache performance of chaining is not good as keys are stored using a linked list. Open addressing provides better cache performance as everything is stored in the same table.</li>
    <li>Wastage of Space (Some Parts of the hash table are never used)</li>
    <li>If the chain becomes long, then search time can become O(n) in the worst case</li>
    <li>Uses extra space for links</li>
</ul>
 
 


<strong>Performance of Chaining:</strong> <br></br>
Performance of hashing can be evaluated under the assumption that each key is equally likely to be hashed to any slot of the table (simple uniform hashing).  <br></br>

m = Number of slots in hash table<br></br>
n = Number of keys to be inserted in hash table<br></br>

Load factor α = n/m<br></br>
Expected time to search = O(1 + α)<br></br>
Expected time to delete = O(1 + α)<br></br>

Time to insert = O(1)<br></br>
Time complexity of search insert and delete is O(1) if  α is O(1)
</div>
<div className='sc5'>
<strong>Data Structures For Storing Chains:</strong> <br></br>
<strong>1. Linked lists</strong><br></br>
<ul>
    <li>Search: O(l) where l = length of linked list</li>
    <li>Delete: O(l)</li>
    <li>Insert: O(l)</li>
    <li>Not cache friendly</li>
</ul>




<strong>2. Dynamic Sized Arrays ( Vectors in C++, ArrayList in Java, list in Python)</strong><br></br>
<ul>
    <li><strong>Search:</strong> O(l) where l = length of array</li>
    <li><strong>Delete:</strong> O(l)</li>
    <li><strong>Insert: </strong>O(l)</li>
    <li><strong>Cache friendly</strong></li>
</ul>




<strong>3. Self Balancing BST ( AVL Trees, Red-Black Trees)</strong><br></br>
<ul>
    <li><strong>Search:</strong> O(log(l)) where l = length of linked list</li>
    <li><strong>Delete:</strong> O(log(l))</li>
    <li><strong>Insert:</strong> O(l)</li>
    <li><strong>Not Cache friendly</strong></li>
</ul>


</div>
<div className="ex1">
      <h>Example of Collision In Hashing</h>
    </div>
    <div className="car">
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-b100lock w-"
          src='https://i.ibb.co/p3qpfR4/1.jpg'
          alt="First slide"
        />
        <Carousel.Caption >
          <div className="pic1"><p>First Slide</p></div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/b18JVsM/2.jpg"
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
          src="https://i.ibb.co/2dBGh7T/3.jpg"
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
          src="https://i.ibb.co/SvNdW9S/4.jpg"
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
          src="https://i.ibb.co/cLJZdbm/5.jpg"
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
          src="https://i.ibb.co/zQbXWcX/6.jpg"
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
          src="https://i.ibb.co/Thhb3LP/7.jpg"
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <div className="pic5">
          <p>Seventh Slide</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/nQsq5n9/8.jpg"
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <div className="pic5">
          <p>Eighth Slide</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Container className='py-4'>
        <Row className='justify-content-center'>
            <Tabs justify variant="pills" defaultActiveKey="tab-1" className='mb-1 p-0'>
                <Tab eventKey="tab-1" title="C" className='cs'>
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
                <Tab eventKey="tab-2" title="CPP">
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
               
            </Tabs>
        </Row>
    
    </Container>
</div>
   
    </React.Fragment>
  )
}

export default Separatechaining
