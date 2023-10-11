import React,{useState} from 'react'
import sign from "./images/sign.jpg";
const Signup = () => {
  
  const [user,setUser]=useState({
    name:"",email:"",phone:"",work:"",comment:""});
    let name,value;
    const handleInputs =(e) =>{
      console.log(e);
      name=e.target.name;
      value=e.target.value;
      setUser({...user,[name]:value});

    }
  
  return (
   
    <>
      <section className="signup">
      {/* <img className="signimage" src={sign}></img> */}
         <div className='container mt-15'>
          <div className='signup-content'>
           
            <div className='signup-form'>
           
              <h2  className='form-title'>SignUp</h2>
             
             
              <form className='registration-form' id="registration-form"></form>
           
                <div className='form-group'>
                  
                
                  <label htmlFor='name'>
                  <i class="zmdi zmdi-account"></i>
                  </label>
                  <input type="text" name="name" id="name" autoComplete='off' value={user.name} onChange={handleInputs}  placeholder='Your Name' />
                </div><br></br>
                <div className='form-group'>
                  <label htmlFor='email '>
                  <i class="zmdi zmdi-email material-icons-name "></i>
                  </label>
                  <input type="email" name="email" id="email" autoComplete='off'value={user.email} onChange={handleInputs}  placeholder='Your Email'/>
                </div><br></br>
                <div className='form-group'>
                  <label htmlFor='phone'>
                  <i class="zmdi zmdi-phone-in-talk"></i>
                  </label>
                  <input type="number" name="phone" id="phone" autoComplete='off'value={user.phone} onChange={handleInputs}  placeholder='Your Phone Number'/>
                </div><br></br>
                <div className='form-group'>
                  <label htmlFor='work'>
                  <i class="zmdi zmdi-slideshow"></i>
                  </label>
                  <input type="text" name="work" id="work" autoComplete='off' value={user.work} onChange={handleInputs} placeholder='Your Profession'/>
                  
                </div><br></br>
                <div className='form-group'>
                  <label htmlFor='comment'>
                  <i class="zmdi zmdi-slideshow"></i>
                  </label>
                  <input type="text" name="comment" id="comment" autoComplete='off'value={user.comment} onChange={handleInputs}  placeholder='Share Your Thoughts'/>
                 
                </div><br></br>
                <div className='form-group'>
                 
                 
                <input type="submit" name="submit" value="Submit" ></input>
                </div>
               
                
                
                
            </div>
          </div>
         </div>
         
      </section>
    </>
  )
}

export default Signup