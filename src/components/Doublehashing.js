import React from 'react'
import { Carousel } from 'react-bootstrap'
import {Container,Row,Tabs,Tab} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Doublehashing = () => {
  const codeString = `/*
  ** Handling of collision via open addressing
  ** Method for Probing: Double Hashing
  */
  
  #include <iostream>
  #include <vector>
  #include <bitset>
  using namespace std;
  #define MAX_SIZE 10000001ll
  
  class doubleHash {
  
    int TABLE_SIZE, keysPresent, PRIME;
    vector<int> hashTable;
    bitset<MAX_SIZE> isPrime;
  
    /* Function to set sieve of Eratosthenes. */
    void __setSieve(){
      isPrime[0] = isPrime[1] = 1;
      for(long long i = 2; i*i <= MAX_SIZE; i++)
        if(isPrime[i] == 0)
          for(long long j = i*i; j <= MAX_SIZE; j += i)
            isPrime[j] = 1;
  
    }
  
    int inline hash1(int value){
      return value%TABLE_SIZE;
    }
    
    int inline hash2(int value){	
      return PRIME - (value%PRIME);
    }
  
    bool inline isFull(){
      return (TABLE_SIZE == keysPresent);
    }
  
    public:
  
    doubleHash(int n){
      __setSieve();
      TABLE_SIZE = n;
  
      /* Find the largest prime number smaller than hash table's size. */
      PRIME = TABLE_SIZE - 1;
      while(isPrime[PRIME] == 1)
        PRIME--;
  
      keysPresent = 0;
  
      /* Fill the hash table with -1 (empty entries). */
      for(int i = 0; i < TABLE_SIZE; i++)
        hashTable.push_back(-1);
    }
  
    void __printPrime(long long n){
      for(long long i = 0; i <= n; i++)
        if(isPrime[i] == 0)
          cout<<i<<", ";
      cout<<endl;
    }
  
    /* Function to insert value in hash table */
    void insert(int value){
  
      if(value == -1 || value == -2){
        cout<<("ERROR : -1 and -2 can't be inserted in the table\n");
      }
  
      if(isFull()){
        cout<<("ERROR : Hash Table Full\n");
        return;
      }
      
      int probe = hash1(value), offset = hash2(value); // in linear probing offset = 1;
      
      while(hashTable[probe] != -1){
        if(-2 == hashTable[probe])				
          break;								 // insert at deleted element's location
        probe = (probe+offset) % TABLE_SIZE;
      }
  
      hashTable[probe] = value;
      keysPresent += 1;
    }
  
    void erase(int value){
      /* Return if element is not present */
      if(!search(value))
        return;	
      
      int probe = hash1(value), offset = hash2(value);
  
      while(hashTable[probe] != -1)
        if(hashTable[probe] == value){
          hashTable[probe] = -2;		 // mark element as deleted (rather than unvisited(-1)).
          keysPresent--;
          return;
        }
        else
          probe = (probe + offset) % TABLE_SIZE;
  
    }
  
    bool search(int value){
      int probe = hash1(value), offset = hash2(value), initialPos = probe;
      bool firstItr = true;
  
      while(1){
        if(hashTable[probe] == -1)				 // Stop search if -1 is encountered.
          break;
        else if(hashTable[probe] == value)		 // Stop search after finding the element.
          return true;
        else if(probe == initialPos && !firstItr) // Stop search if one complete traversal of hash table is completed.
          return false;
        else
          probe = ((probe + offset) % TABLE_SIZE); // if none of the above cases occur then update the index and check at it.
  
        firstItr = false;
      }
      return false;
    }
  
    /* Function to display the hash table. */
    void print(){
      for(int i = 0; i < TABLE_SIZE; i++)
        cout<<hashTable[i]<<", ";
      cout<<"\n";
    }
  
  };
  
  int main(){
    doubleHash myHash(13); // creates an empty hash table of size 13
  
    /* Inserts random element in the hash table */
    
    int insertions[] = {115, 12, 87, 66, 123},
      n1 = sizeof(insertions)/sizeof(insertions[0]);
    
    for(int i = 0; i < n1; i++)
      myHash.insert(insertions[i]);
    
    cout<< "Status of hash table after initial insertions : "; myHash.print();
    
  
    /*
    ** Searches for random element in the hash table,
    ** and prints them if found.
    */
    
    int queries[] = {1, 12, 2, 3, 69, 88, 115},
      n2 = sizeof(queries)/sizeof(queries[0]);
    
    cout<<"\n"<<"Search operation after insertion : \n";
  
    for(int i = 0; i < n2; i++)
      if(myHash.search(queries[i]))
        cout<<queries[i]<<" present\n";
    
  
    /* Deletes random element from the hash table. */
    
    int deletions[] = {123, 87, 66},
      n3 = sizeof(deletions)/sizeof(deletions[0]);
    
    for(int i = 0; i < n3; i++)
      myHash.erase(deletions[i]);
  
    cout<< "Status of hash table after deleting elements : "; myHash.print();
    
    return 0;
  }
  `
  const codeStr2 =`from typing import List
  import math
  
  MAX_SIZE = 10000001
  
  class DoubleHash:
    def __init__(self, n: int):
      self.TABLE_SIZE = n
      self.PRIME = self.__get_largest_prime(n - 1)
      self.keysPresent = 0
      self.hashTable = [-1] * n
  
    def __get_largest_prime(self, limit: int) -> int:
      is_prime = [True] * (limit + 1)
      is_prime[0], is_prime[1] = False, False
      for i in range(2, int(math.sqrt(limit)) + 1):
        if is_prime[i]:
          for j in range(i * i, limit + 1, i):
            is_prime[j] = False
      for i in range(limit, -1, -1):
        if is_prime[i]:
          return i
  
    def __hash1(self, value: int) -> int:
      return value % self.TABLE_SIZE
  
    def __hash2(self, value: int) -> int:
      return self.PRIME - (value % self.PRIME)
  
    def is_full(self) -> bool:
      return self.TABLE_SIZE == self.keysPresent
  
    def insert(self, value: int) -> None:
      if value == -1 or value == -2:
        print("ERROR : -1 and -2 can't be inserted in the table")
        return
      if self.is_full():
        print("ERROR : Hash Table Full")
        return
      probe, offset = self.__hash1(value), self.__hash2(value)
      while self.hashTable[probe] != -1:
        if -2 == self.hashTable[probe]:
          break
        probe = (probe + offset) % self.TABLE_SIZE
      self.hashTable[probe] = value
      self.keysPresent += 1
  
    def erase(self, value: int) -> None:
      if not self.search(value):
        return
      probe, offset = self.__hash1(value), self.__hash2(value)
      while self.hashTable[probe] != -1:
        if self.hashTable[probe] == value:
          self.hashTable[probe] = -2
          self.keysPresent -= 1
          return
        else:
          probe = (probe + offset) % self.TABLE_SIZE
  
    def search(self, value: int) -> bool:
      probe, offset, initialPos, firstItr = self.__hash1(value), self.__hash2(value), self.__hash1(value), True
      while True:
        if self.hashTable[probe] == -1:
          break
        elif self.hashTable[probe] == value:
          return True
        elif probe == initialPos and not firstItr:
          return False
        else:
          probe = (probe + offset) % self.TABLE_SIZE
        firstItr = False
      return False
  
    def print(self) -> None:
      print(*self.hashTable,sep=', ')
  
  if __name__ == '__main__':
    myHash = DoubleHash(13)
  
    # Inserts random element in the hash table
    insertions = [115, 12, 87, 66, 123]
    for insertion in insertions:
      myHash.insert(insertion)
    print("Status of hash table after initial insertions : ", end="")
    myHash.print()
  
    # Searches for random element in the hash table, and prints them if found.
    queries = [1, 12, 2, 3, 69, 88, 115]
    n2 = len(queries)
    print("\nSearch operation after insertion : ")
    
    for i in range(n2):
      if myHash.search(queries[i]):
        print(queries[i], "present")
        
    # Deletes random element from the hash table.
    deletions = [123, 87, 66]
    n3 = len(deletions)
    
    for i in range(n3):
      myHash.erase(deletions[i])
      
    print("Status of hash table after deleting elements : ",end='')
    myHash.print()
  `
  const codeStr3=`using System;
  using System.Collections.Generic;
  using System.Linq;
  
  class doubleHash {
  
    int TABLE_SIZE, keysPresent, PRIME, MAX_SIZE = 10000001;
    List<int> hashTable;
    bool[] isPrime;
  
    /* Function to set sieve of Eratosthenes. */
    void __setSieve()
    {
      isPrime[0] = isPrime[1] = true;
      for (long i = 2; i * i <= MAX_SIZE; i++) {
        if (isPrime[i] == false) {
          for (long j = i * i; j <= MAX_SIZE;
            j += i) {
            isPrime[j] = true;
          }
        }
      }
    }
  
    int hash1(int value) { return value % TABLE_SIZE; }
  
    int hash2(int value) { return PRIME - (value % PRIME); }
  
    bool isFull() { return (TABLE_SIZE == keysPresent); }
  
    public doubleHash(int n)
    {
      isPrime = new bool[MAX_SIZE + 1];
      __setSieve();
      TABLE_SIZE = n;
  
      /* Find the largest prime number smaller than hash
      * table's size. */
      PRIME = TABLE_SIZE - 1;
      while (isPrime[PRIME] == true)
        PRIME--;
  
      keysPresent = 0;
      hashTable = new List<int>();
      /* Fill the hash table with -1 (empty entries). */
      for (int i = 0; i < TABLE_SIZE; i++)
        hashTable.Add(-1);
    }
  
    public void __printPrime(long n)
    {
      for (long i = 0; i <= n; i++)
        if (isPrime[i] == false)
          Console.Write(i + ", ");
      Console.WriteLine();
    }
  
    /* Function to insert value in hash table */
    public void insert(int value)
    {
  
      if (value == -1 || value == -2) {
        Console.Write(
          "ERROR : -1 and -2 can't be inserted in the table\n");
      }
  
      if (isFull()) {
        Console.Write("ERROR : Hash Table Full\n");
        return;
      }
  
      int probe = hash1(value),
        offset
        = hash2(value); // in linear probing offset = 1;
  
      while (hashTable[probe] != -1) {
        if (-2 == hashTable[probe])
          break; // insert at deleted element's
            // location
        probe = (probe + offset) % TABLE_SIZE;
      }
  
      hashTable[probe] = value;
      keysPresent += 1;
    }
  
    public void erase(int value)
    {
      /* Return if element is not present */
      if (!search(value))
        return;
  
      int probe = hash1(value), offset = hash2(value);
  
      while (hashTable[probe] != -1)
        if (hashTable[probe] == value) {
          hashTable[probe]
            = -2; // mark element as deleted (rather
              // than unvisited(-1)).
          keysPresent--;
          return;
        }
        else
          probe = (probe + offset) % TABLE_SIZE;
    }
  
    public bool search(int value)
    {
      int probe = hash1(value), offset = hash2(value),
        initialPos = probe;
      bool firstItr = true;
  
      while (true) {
        if (hashTable[probe]
          == -1) // Stop search if -1 is encountered.
          break;
        else if (hashTable[probe]
            == value) // Stop search after finding
                // the element.
          return true;
        else if (probe == initialPos
            && !firstItr) // Stop search if one
                  // complete traversal of
                  // hash table is
                  // completed.
          return false;
        else
          probe = ((probe + offset)
              % TABLE_SIZE); // if none of the
                      // above cases occur
                      // then update the
                      // index and check
                      // at it.
  
        firstItr = false;
      }
      return false;
    }
  
    /* Function to display the hash table. */
    public void print()
    {
      for (int i = 0; i < TABLE_SIZE; i++)
        Console.Write(hashTable[i] + ", ");
      Console.Write("\n");
    }
  }
  
  public class Program {
    static void Main()
    {
      doubleHash myHash = new doubleHash(
        13); // creates an empty hash table of size 13
  
      /* Inserts random element in the hash table */
  
      int[] insertions = { 115, 12, 87, 66, 123 };
      int n1 = insertions.Length;
  
      for (int i = 0; i < n1; i++)
        myHash.insert(insertions[i]);
  
      Console.Write(
        "Status of hash table after initial insertions : ");
      myHash.print();
  
      /*
      ** Searches for random element in the hash table,
      ** and prints them if found.
      */
  
      int[] queries = { 1, 12, 2, 3, 69, 88, 115 };
      int n2 = queries.Length;
  
      Console.Write(
        "\n"
        + "Search operation after insertion : \n");
  
      for (int i = 0; i < n2; i++)
        if (myHash.search(queries[i]))
          Console.Write(queries[i] + " present\n");
  
      /* Deletes random element from the hash table. */
  
      int[] deletions = { 123, 87, 66 };
      int n3 = deletions.Length;
  
      for (int i = 0; i < n3; i++)
        myHash.erase(deletions[i]);
  
      Console.Write(
        "Status of hash table after deleting elements : ");
      myHash.print();
    }
  }
  `
  ;
 return (
    <React.Fragment>
    <div className='dh1'>
      <h>
      Double hashing is a collision resolution technique used in hash tables. It works by using two hash functions to compute two different hash values for a given key. The first hash function is used to compute the initial hash value, and the second hash function is used to compute the step size for the probing sequence.
<br></br>
Double hashing has the ability to have a low collision rate, as it uses two hash functions to compute the hash value and the step size. This means that the probability of a collision occurring is lower than in other collision resolution techniques such as linear probing or quadratic probing.
<br></br>
However, double hashing has a few drawbacks. First, it requires the use of two hash functions, which can increase the computational complexity of the insertion and search operations. Second, it requires a good choice of hash functions to achieve good performance. If the hash functions are not well-designed, the collision rate may still be high.
      </h>
    </div>
    <div className='dh2'>
        <h>
       <strong> Advantages of Double hashing</strong><br></br>
       <ul>
        <li> The advantage of Double hashing is that it is one of the best forms of probing, producing a uniform distribution of records throughout a hash table.</li>
        <li>This technique does not yield any clusters.</li>
        <li>It is one of the effective methods for resolving collision</li>
       </ul>

      <strong> Difficulties in Double hashing:</strong><br></br>

Compared to other techniques, double hashing possesses poor cache performance but does not have any clustering issues. The time required for the completion of the entire process is more as there are two hash functions that are supposed to be performed. So, this causes poor cache performance. Other than this, there is no problem with Double hashing.
      </h>
    </div>
    <div className='dh3'>
        <h><strong>Double hashing can be done using : </strong>
(hash1(key) + i * hash2(key)) % TABLE_SIZE <br></br>
Here hash1() and hash2() are hash functions and TABLE_SIZE <br></br>
is size of hash table. <br></br>
We repeat by increasing i when collision occurs</h>
    </div>
    <div className="ex1">
      <h>Example of Double Hashing</h>
    </div>
    <div className="car">
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-b100lock w-"
          src="https://i.ibb.co/4T5k0zk/1.jpg"
          alt="First slide"
        />
        <Carousel.Caption >
          <div className="pic1"><p>First Slide</p></div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/9cgRK59/2.jpg"
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
          src="https://i.ibb.co/K9Yy5dh/3.jpg"
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
          src="https://i.ibb.co/5Rfx2V9/4.jpg"
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
    
    </Carousel>
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
                <Tab eventKey="tab-2" title="Python3">
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
                <Tab eventKey="tab-3" title="C#">
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

export default Doublehashing
