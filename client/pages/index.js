<<<<<<< HEAD
import axios from 'axios';
import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  // console.log(currentUser);
  // axios.get('/api/users/currentuser');
  return currentUser?(<h1>you are signed in {currentUser.email}</h1>):(<h1>you are not signed in</h1>)

  
};

LandingPage.getInitialProps = async context => {
  const client=buildClient(context);
  const {data}= await client.get('/api/users/currentuser');
  
  return data;
  }
  

export default LandingPage;
=======
import axios from "axios";

const LandingPage=({currentUser})=>{
    console.log(currentUser)
    axios.get('api/users/currentuser').catch((err)=>{
        console.log(err.message);
    })
    return <h1>landing page2</h1>
}




export default LandingPage;
>>>>>>> master
