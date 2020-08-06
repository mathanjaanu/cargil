import React, { Component } from 'react';

export default class Single extends Component{
    
    
    
    Countrydetails =(event)=>{
        alert("My Capital is " + event.currentTarget.dataset.capital +"        " + 
        "My population is " + event.currentTarget.dataset.population );
    }

    render(){
    
        return(
            <div>
            <p lang={this.props.lang} data-capital={this.props.capital} data-population={this.props.population} onClick={this.Countrydetails.bind(this)}>{this.props.name}</p>
           
            
            </div>
            )
        }
    }