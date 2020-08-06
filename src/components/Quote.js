import React from 'react';
import './Quote.css';



function Quote({onNewQuote,quote , author,onTweet}){
    let lng=true;
    let long="";
    let short="";
    if(author===''){
        author="Unknown"
    }
    if(quote.length>100){
         long="f3 mb2"
    }
    else{
         short="f2 mb2"
        lng=false;
    }
    return (
        <div id="q" className="mw7  mh3 mh0-l b--light-gray o-90 ba shadow-5 bg-black-05 br4 pt4" >
            {/* quote text  */}
            <div 
                className={lng?long:short}> {quote}
            </div> 
            {/* author name */}
            <span className="f5 i " >{author}</span>
            {/* buttons container */}
            <div className="flex justify-between">
                <button 
                    onClick={onTweet}
                    className="Tilt-inner tw fw5 b--light-gray br3 grow ma3 mb2 ph3 pv1 shadow-3"  >
                        <i className="fab fa-twitter f3 ph2"></i>
                </button>  
                <button
                    onClick={onNewQuote}
                    className="Tilt-inner fw7   b--light-gray br3 grow ma3 mb2 pa2 pv1 shadow-3" >
                        {"New Quote"}
                </button>
                
            </div>
        </div>
    );
}


export default Quote ;