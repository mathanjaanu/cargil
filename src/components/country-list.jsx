import React, { Component } from 'react';
// import * as Link from "react-router";
import Single from "./single.jsx";

export default class Countrylist extends Component{
    
    
    constructor(props){
        super(props);
        this.state = {
            array : [],
            sort:true
        };
        
    }
    
    componentDidMount(){
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => {
            this.setState({
                array : data
            })
            console.log(data)
        })
    }
    
    
    sortAscending = () => { 
        if(this.state.sort){
            const { array } = this.state;
            array.sort((a, b) => a.population - b.population).reverse()    
            this.setState({ array , sort :!this.state.sort})
        }
        else{
            const { array } = this.state;
            array.sort((a, b) => a.population - b.population)
            this.setState({ array , sort :!this.state.sort})
        }
    }
    
    
    
    onChange = (event) =>{


      

        const { array } = this.state;        
        var textToSearch = event.target.value;
        var filteredArray = array.filter((str)=>{
            return str.name.toLowerCase().indexOf(textToSearch.toLowerCase()) >= 0; 
        });
        
        this.setState({ array : filteredArray });


        
    }  
    
    render(){
        var items = this.state.array;
        console.log(items)
        return(
            <div>
            
            <button className="asc_dsc" onClick={this.sortAscending}>Sort By : Population</button>
            
            <input type="text" placeholder="Search Here ..."  onChange={this.onChange.bind(this)} />           
            
            <div className="single-countries">
            
            {items.map(item => (
                <Single capital={item.capital} population={item.population} lang={item.languages} name={item.name}>  {item.name} </Single>
                ))}
                </div>               
                </div>
                )
            }
        }