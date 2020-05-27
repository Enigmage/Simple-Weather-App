import React from "react";
class Weather extends React.Component{
    render(){
       return(
           <div >
              {this.props.city && this.props.country &&<p>{this.props.city},{this.props.country}</p>}
              {this.props.temperature && <p>Temperature in Kelvin :{this.props.temperature}</p>}
              {this.props.error && <p>{this.props.error}</p>}
              
           </div>//this helps preventing the printing of epty keys before clicking button
       );
    }
}
export default Weather;