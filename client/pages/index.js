import axios from "axios";

const LandingPage=({currentUser})=>{
    console.log(currentUser)
    axios.get('api/users/currentuser').catch((err)=>{
        console.log(err.message);
    })
    return <h1>landing page</h1>
}




export default LandingPage;