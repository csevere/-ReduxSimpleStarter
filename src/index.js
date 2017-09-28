import React, {Component} from 'react'; 
import ReactDOM from 'react-dom'; 
import YTSearch from 'youtube-api-search'; 
import SearchBar from './components/search_bar'; 
import VideoList from './components/video_list'; 
const API_KEY = 'AIzaSyBkiWK4KWUWkWHSoiXjh1U1i4ImIrzftgM';



// Create a new component. This component should produce
//some HTML

//turn App into a class to keep track of the list of videos by recording them on its state

//whenever the key and value are the same, condense to the anme of the variable
//this.setState({videos:videos})

class App extends Component{
	constructor(props){
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'chillhop'}, (videos) =>{
			this.setState({ videos })
			
		}); 
	}
	render(){
		return( 
			<div>
				<SearchBar />
				<VideoList videos = {this.state.videos} />
			</div>
		);
	}
} 



// <App /> //this is the instance of App 
//<App><App/> there's nothing in between so make it a self-closing tag <App/>



//Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container')); 


//downwards data flow: only the most parent component should be resp for fetching data from api or redux or flex framework
//index is the most parent component/top level comp, App, should fetch the data
// pass data from parent to child components via props 
//in a class component, props available everywhere, not true in functional component, passed ab an obj
