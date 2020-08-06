import React from 'react';
import './App.css';
import Quote from '../components/Quote';
import Loading from '../components/Loading';
import 'tachyons';

//combine the API URL with the cors middlware
const proxi ="https://cors-anywhere.herokuapp.com/";
const newLocal = `http://api.forismatic.com/api/1.0/?method=getQuote&format=json&key=25432&lang=en`;
const url =proxi+newLocal;

class App extends React.Component {

  constructor () {
    super();
    this.state={
      quote:"",
      author:"",
      loading:false
    };
  }
  onNewQuote = () => {
    this.setState({loading:true})
    fetch(url)
    .then(res => res.json())
    .then(data=>{
      this.setState({quote:data.quoteText , author:data.quoteAuthor , loading:false})
    })
    .catch(err=> {
      console.log("oobs , ",err);
      this.onNewQuote();});
  }

  componentDidMount(){
    this.onNewQuote();
  }
  onTweet=()=>{
    window.open(`https://twitter.com/intent/tweet?text=${this.state.quote} - (${this.state.author})&hashtags=Quote `,"_blank");
  }
  
  render(){
    const {quote,author ,loading} = this.state;
  return ( 
    <div className="App tc flex justify-center content-center items-center  vh-100 w-100">
     
      { ! loading?
      <Quote quote={quote} author={author} onNewQuote={this.onNewQuote} onTweet={this.onTweet}/>
          :
      <Loading/>
      }

    </div>
  );
}
}

export default App;
