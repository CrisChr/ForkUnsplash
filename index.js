import React from 'react'
import ReactDom from 'react-dom'
// import './src/less/style.less'
// import rootReducer from './src/reducers/reducer'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { counter } from './src/reducers/counterReducer'
import { todoer } from  './src/reducers/todoReducer'
import App1 from './src/containers/sampleContainer_1'
import App2 from './src/containers/sampleContainer_2'

import { App } from './App'

const rootReducer = combineReducers({counter, todoer})
const store = createStore(rootReducer)

export class MainApp extends React.Component {
  render(){
    return(
      <App/>
      // <Provider store={store}>
      //   <App1/>
      //   <App2/>
      // </Provider>
    )
  }
}

ReactDom.render(
  <MainApp/>,
  document.getElementById('app')
)
