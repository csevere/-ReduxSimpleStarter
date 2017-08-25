import React, {Component} from 'react';

//create a class and give it all the functinality that React.component has 

class SearchBar extends Component {
    render() {
        return <input onChange={event => console.log(event.target.value)} />; 
    }   
}

export default SearchBar; 

//watch for change event of input