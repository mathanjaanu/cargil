import React, { Component } from 'react';
import Countrylist from "./country-list.jsx"

export default class Country extends Component{
    
    render(){
        
        return(
            <div>
            <h1>Countries List</h1>
            <div class="wrapper">
            <Countrylist></Countrylist>
            </div>
            </div>
            )
        }
    }
    