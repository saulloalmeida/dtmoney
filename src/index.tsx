import React from 'react';
import ReactDOM from 'react-dom';
import {createServer} from 'miragejs'
import { App } from './App';

createServer({
  routes(){
    this.namespace = 'api'

    this.get('/transactions', ()=>{
      return[{
        id:1,
        title:"transaction",
        amount:400,
        type:'deposit'
      }]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);