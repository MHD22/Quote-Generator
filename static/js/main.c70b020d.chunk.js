(this["webpackJsonpquote-generator"]=this["webpackJsonpquote-generator"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(3),c=n.n(r),i=(n(13),n(4)),u=n(5),s=n(7),l=n(6);n(14),n(15);var m=function(e){var t=e.onNewQuote,n=e.quote,o=e.author,r=e.onTweet,c=!0,i="",u="";return""===o&&(o="Unknown"),n.length>100?i="f3 mb2":(u="f2 mb2",c=!1),a.a.createElement("div",{id:"q",className:"mw7  mh3 mh0-m b--light-gray o-90 ba shadow-5 bg-black-05 br4 pt4"},a.a.createElement("div",{className:c?i:u}," ",n),a.a.createElement("span",{className:"f5 i "},o),a.a.createElement("div",{className:"flex justify-between"},a.a.createElement("button",{onClick:r,className:"Tilt-inner tw fw5 b--light-gray br3 grow ma3 mb2 ph3 pv1 shadow-3"},a.a.createElement("i",{className:"fab fa-twitter f3 ph2"})),a.a.createElement("button",{onClick:t,className:"Tilt-inner fw7   b--light-gray br3 grow ma3 mb2 pa2 pv1 shadow-3"},"New Quote")))};n(16);var h=function(e){return a.a.createElement("div",{className:"loader"})},w=(n(2),function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onNewQuote=function(){e.setState({loading:!0}),fetch("https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&key=25432&lang=en").then((function(e){return e.json()})).then((function(t){e.setState({quote:t.quoteText,author:t.quoteAuthor,loading:!1})})).catch((function(t){console.log("oobs , ",t),e.onNewQuote()}))},e.onTweet=function(){window.open("https://twitter.com/intent/tweet?text=".concat(e.state.quote," - (").concat(e.state.author,")&hashtags=Quote "),"_blank")},e.state={quote:"",author:"",loading:!1},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.onNewQuote()}},{key:"render",value:function(){var e=this.state,t=e.quote,n=e.author,o=e.loading;return a.a.createElement("div",{className:"App tc flex justify-center content-center items-center  vh-100 w-100"},o?a.a.createElement(h,null):a.a.createElement(m,{quote:t,author:n,onNewQuote:this.onNewQuote,onTweet:this.onTweet}))}}]),n}(a.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.c70b020d.chunk.js.map