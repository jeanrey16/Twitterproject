import './App.css';
import twitterlogo from './images/twitter-logo.svg';
import twitterlogowhite from './images/Twitter-logo-white.png';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <div className='Box-frond-left'>
          <img
           className='twitter-background'
           src={twitterlogowhite}
           alt='twitter logo'/>               
        </div>
      <div className='Box-frond-right'>
        <div className='form-box'>
        <img
         className='Twitter-logo'
         src={twitterlogo}
         alt='Twitter logo 2'/>
        <h1 className='Welcome'> Welcome to Twitter</h1>
        <h2 className='Join'>Join Twitter today</h2>
        <form className='Log-in'>
          <h3 className='Log-into'>Log into Twitter</h3>
          <input type={'text'} className='User' placeholder='User'></input>
          <input type={'password'} className='Password' placeholder='Password'></input>
          <input type={'submit'} className='Submit'value={'Log in'}></input>
          <button className='Create-account'>Create new account</button>
        </form>
        </div>
        </div>
      </div> 
    </div>
  );
}

//<h1>Wellcome to Twitter</h1>
export default App;
 