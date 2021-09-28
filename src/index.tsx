import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({

  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [{
        id: 1,
        title: 'Freela',
        amount: 2000,
        category: 'desenvolvimento',
        type: 'deposit',
        createdAt: new Date('2021-12-12 09:00:00')
      }, {
        id: 2,
        title: 'Aluguel',
        amount: 500,
        category: 'casa',
        type: 'withdraw',
        createdAt: new Date('2021-12-23 09:00:00')
      }]
    })
  },
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);