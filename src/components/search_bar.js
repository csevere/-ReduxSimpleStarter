import React, {Component} from 'react';

//create a class and give it all the functinality that React.component has 

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {term: ''}; //initalize a new object assign to this.state; allows it to be updated when user searches for a new term
    }
    render() {
        return( 
            <div className = "search-bar">
                <input 
                    value = {this.state.term}
                    onChange = {event => this.onInputChange(event.target.value)}/>
            </div>
        );
    }
    
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);

    }
}

export default SearchBar; 

//watch for change event of input
//use this.setState to change the state of the object 
//this.state.term to reference it
//controlled field/form element; value is set by the state
//the state should tell the input what it's current value should be

//this.setState({term: event.target.value})
//onInputChange(term) >> this function sets the state and gets the search callback from app
