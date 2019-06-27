import React from 'react'
import ReactDom from 'react-dom'
// import './src/less/style.less'
// import rootReducer from './src/reducers/reducer'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { counter } from './src/reducers/counterReducer'
import { todoer } from  './src/reducers/todoReducer'
import { picture } from './src/reducers/pictureReducer'
import App1 from './src/containers/sampleContainer_1'
import App2 from './src/containers/sampleContainer_2'

import { App } from './App'

const logger = createLogger()
//const rootReducer = combineReducers({counter, todoer})
const pictureReducer = combineReducers({ picture })
const store = createStore(pictureReducer, applyMiddleware(thunk))

export class MainApp extends React.Component {
  render(){
    return(
      // <App/>
      <Provider store={store}>
        <App/>
        {/* <App1/>
        <App2/> */}
      </Provider>
    )
  }
}

ReactDom.render(
  <MainApp/>,
  document.getElementById('app')
)
