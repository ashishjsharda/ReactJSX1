import React from 'react';
import ReactDOM from 'react-dom';

const fruits=["Apple","Banana","Grapes"];
const element=<ol>
  {fruits.map((fruit,index)=><li key={index}>{fruit}</li>)}
</ol>
ReactDOM.render(
  element,
  document.getElementById('root')
);

