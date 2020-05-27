import React from 'react';
import Title from "./components/Titles.js";
import Form from "./components/forms";
import Weather from "./components/Weather";
import Geo from "./components/geo"
import './App.css';
const API_KEY="77cfba9084dcece682391f211145dd84";



//const APP_ID="9waxpPH6Aw2CkuAR4Hh3";//App id for location API
//const KEY="8j4AQT3S9PbVIDWEu0M7f31fSEWRC_7d7R7HgBuISpY	";//API key for location API

class App extends React.Component{
  state={
    temperature:undefined,
    city : undefined,
    country : undefined,
    description:undefined,
    error:undefined,
    Username:'',
    Password:''
    

  }
  getWeather=async(e)=>{
    e.preventDefault();//prevents a full page reload
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api_call=await fetch(` https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data=await api_call.json();
    
    
    
    if(city && country){ // to prevent the code from breaking because of empty fields
      console.log(data);
      this.setState({
        temperature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        description:data.weather[0].description,
        error:"" ,
        
           
        })}
       
  
  
      
    else{
      console.log(data);
      this.setState({
        temperature:undefined,
        city:undefined,
        country:undefined,
        description:undefined,
       
        error:"Please Enter values."
  
      });}
      

      }
      login=(e)=>{
          e.preventDefault();
          const User=e.target.elements.User.value;
          const pass=e.target.elements.Pass.value;
          this.setState={
            Username:User,
            Password:pass
          }
          const dax=this.state.json();
          console.log(dax.Username);


      }
      
   
  
  
  render(){
    return(
    <div className="XXX">
      <Geo/>
      <Title/>
      <Form getWeather={this.getWeather}
            />
      <Weather temperature={this.state.temperature}
               country={this.state.country}
               city={this.state.city}
               description={this.state.description}
               error={this.state.error}
               getWeather={this.getWeather}/>
               <form onSubmit={this.login}>
                 <input type="text" placeholder="Username" className="User" name="User"/><br/>
                 <input type="text" placeholder="Password" className="Pass" name="Pass"/><br/>
                 <button>Submit</button>
               </form>
      
    </div>
    );
  }
}




export default App;
