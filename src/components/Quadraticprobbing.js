import React from 'react'
import { Carousel } from 'react-bootstrap'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {Container,Row,Tabs,Tab} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Quadraticprobbing = () => {
  const codeString=`// C++ implementation of
  // the Quadratic Probing
  #include <bits/stdc++.h>
  using namespace std;
  
  // Function to print an array
  void printArray(int arr[], int n)
  {
    // Iterating and printing the array
    for (int i = 0; i < n; i++) {
      cout << arr[i] << " ";
    }
  }
  
  // Function to implement the
  // quadratic probing
  void hashing(int table[], int tsize, int arr[], int N)
  {
    // Iterating through the array
    for (int i = 0; i < N; i++) {
      // Computing the hash value
      int hv = arr[i] % tsize;
  
      // Insert in the table if there
      // is no collision
      if (table[hv] == -1)
        table[hv] = arr[i];
      else {
        // If there is a collision
        // iterating through all
        // possible quadratic values
        for (int j = 0; j < tsize; j++) {
          // Computing the new hash value
          int t = (hv + j * j) % tsize;
          if (table[t] == -1) {
            // Break the loop after
            // inserting the value
            // in the table
            table[t] = arr[i];
            break;
          }
        }
      }
    }
    printArray(table, N);
  }
  
  // Driver code
  int main()
  {
    int arr[] = { 50, 700, 76, 85, 92, 73, 101 };
    int N = 7;
  
    // Size of the hash table
    int L = 7;
    int hash_table[7];
  
    // Initializing the hash table
    for (int i = 0; i < L; i++) {
      hash_table[i] = -1;
    }
  
    // Function call
    hashing(hash_table, L, arr, N);
    return 0;
  }
  
 
  `
  const codeStr2=`// Java implementation of the Quadratic Probing

  class GFG {
  
    // Function to print an array
    static void printArray(int arr[])
    {
  
      // Iterating and printing the array
      for (int i = 0; i < arr.length; i++) {
        System.out.print(arr[i] + " ");
      }
    }
  
    // Function to implement the
    // quadratic probing
    static void hashing(int table[], int tsize, int arr[],
              int N)
    {
  
      // Iterating through the array
      for (int i = 0; i < N; i++) {
  
        // Computing the hash value
        int hv = arr[i] % tsize;
  
        // Insert in the table if there
        // is no collision
        if (table[hv] == -1)
          table[hv] = arr[i];
        else {
  
          // If there is a collision
          // iterating through all
          // possible quadratic values
          for (int j = 0; j < tsize; j++) {
  
            // Computing the new hash value
            int t = (hv + j * j) % tsize;
            if (table[t] == -1) {
  
              // Break the loop after
              // inserting the value
              // in the table
              table[t] = arr[i];
              break;
            }
          }
        }
      }
  
      printArray(table);
    }
  
    // Driver code
    public static void main(String args[])
    {
      int arr[] = { 50, 700, 76, 85, 92, 73, 101 };
      int N = 7;
  
      // Size of the hash table
      int L = 7;
      int hash_table[] = new int[L];
  
      // Initializing the hash table
      for (int i = 0; i < L; i++) {
        hash_table[i] = -1;
      }
  
      // Function call
      hashing(hash_table, L, arr, N);
    }
  }
  `
  const codeStr3=`# Python3 implementation of
  # the Quadratic Probing
  
  # Function to print an array
  
  
  def printArray(arr, n):
  
    # Iterating and printing the array
    for i in range(n):
      print(arr[i], end=" ")
  
  # Function to implement the
  # quadratic probing
  
  
  def hashing(table, tsize, arr, N):
  
    # Iterating through the array
    for i in range(N):
  
      # Computing the hash value
      hv = arr[i] % tsize
  
      # Insert in the table if there
      # is no collision
      if (table[hv] == -1):
        table[hv] = arr[i]
  
      else:
  
        # If there is a collision
        # iterating through all
        # possible quadratic values
        for j in range(tsize):
  
          # Computing the new hash value
          t = (hv + j * j) % tsize
  
          if (table[t] == -1):
  
            # Break the loop after
            # inserting the value
            # in the table
            table[t] = arr[i]
            break
  
    printArray(table, N)
  
  
  # Driver code
  if __name__ == "__main__":
    arr = [50, 700, 76,
      85, 92, 73, 101]
    N = 7
  
    # Size of the hash table
    L = 7
  
    hash_table = [0] * 7
  
    # Initializing the hash table
    for i in range(L):
      hash_table[i] = -1
  
    # Function call
    hashing(hash_table, L, arr, N)
  
 
  `
  ;
  return (
    <React.Fragment>
        <div className='qp1'>
        In Quadratic Probing, the intervals between the key positions is increased when compared to linear probing as the hash function is mostly different. The issue that is occurred due to the clustering in the above technique can be easily solved by using the quadratic probing technique. This technique is also known as mid-square method. When the iteration that is currently running is " i ", then the i^2th position is considered as the key position for that respective key. Other slots of positions are checked only when the key position that we are trying for is already occupied. This is the most efficient and effective method for a hash table which possesses closed properties. It has an average performance of cache and a subtle problem with clustering.
        </div>
    <div className='qp2'>
      <h>
      How Quadratic Probing is done? <br></br>
Let hash(x) be the slot index computed using the hash function.
<ul>
   <li>If the slot hash(x) % S is full, then we try (hash(x) + 1*1) % S.</li> 
   <li>If (hash(x) + 1*1) % S is also full, then we try (hash(x) + 2*2) % S.</li> 
   <li>If (hash(x) + 2*2) % S is also full, then we try (hash(x) + 3*3) % S.</li> 
</ul>
<br></br>
This process is repeated for all the values of i until an empty slot is found
      </h>
    </div>
    <div className='qp3'>
        <h><strong>Difficulties faced with Quadratic Probing:</strong><br></br>
        It deals with secondary clustering, and sometimes, two keys have same prob sequence whenever they possess the same key position.
        </h>
    </div>
    <div className="ex1">
      <h>Example of Quadratic Probbing</h>
    </div>
    <div className="car">
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-b100lock w-"
          src="https://i.ibb.co/ggcV7bm/1.jpg"
          alt="First slide"
        />
        <Carousel.Caption >
          <div className="pic1"><p>First Slide</p></div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/rsDmBtd/2.jpgs"
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
          src="https://i.ibb.co/prL2XWv/3.jpg"
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
          src="https://i.ibb.co/nrmNnFC/4.jpg"
          alt="Fouth slide"
        />
        <Carousel.Caption>
          <div className="pic4">
          <p>Fourth Slide</p>
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

export default Quadraticprobbing
