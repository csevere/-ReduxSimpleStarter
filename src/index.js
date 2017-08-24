import React from 'react'; 
import ReactDOM from "react-dom"; 

// Create a new component. This component should produce
//some HTML

const App = function(){
	return <div>Hi!</div>; 
} //this is a class

// <App /> //this is the instance of App 
//<App><App/> there's nothing in between so make it a self-closing tag <App/>



//Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />); 
