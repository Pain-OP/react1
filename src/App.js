import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <>
   <div className='col-md-12 h1'>
    
   </div>
   <br/>

   <div className='container' >
    <div className='row'>

      <div className='col-md-6'>
        <h1 className='display-4 font1 text-primary mt-5 pt-5 '>facebook</h1>
        <h3 className=''>Facebook helps you connect and share with the people in your life.</h3>
      </div>

      <div className='col-md-6'>
        <div className='col-md-9 mt-3 boxss rounded'><br/>
          <input type='email'    placeholder='Email address or phone number' className='form-control form-control-lg '/><br/>
          <input type='password'    placeholder='Password' className='form-control form-control-lg'/><br/>

          <button className='btn btn-lg btn-primary btn-block'><b>Log in</b></button><br/>

          <center>
          <a class="" href="#">Forgotten password?</a>
          </center>

          <hr className='border'/><br/>
          <center>
          <button className='btn btn-lg btn-success '>Create new account</button>
          </center><br/>

        </div><br/>
        <p className='pl-4'><a class="text-dark" href="#"><b>Create a Page</b></a> for a celebrity, brand or business.</p>
        <p style={{color:"red", background:"pink"}}>lorem</p>
      </div>

    </div>
   </div>





   </>
  );
}

export default App;
