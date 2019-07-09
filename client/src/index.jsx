import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

let testData = [
{
  roomname: 'SHINJUKU',
  roomLocation: "near train",
  roomImg: "https://loremflickr.com/320/240/city",
  stars: 4,
  price: 35,
  reviewNum: 250
},
{
  roomname: 'WESTFALL',
  roomLocation: "not train",
  roomImg: "https://loremflickr.com/320/240/city",
  stars: 5,
  price: 68,
  reviewNum: 560
},
{
  roomname: 'LORD OF DUH NAWTH',
  roomLocation: "is  train",
  roomImg: "https://loremflickr.com/320/240/city",
  stars: 3,
  price: 12,
  reviewNum: 120
},
]

ReactDOM.render(<App testData={testData}/>, document.getElementById('app'));