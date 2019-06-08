/**
 * 容器组件
 * 负责管理数据和业务逻辑，不负责 UI 的呈现
 * 带有内部状态
 * 使用 Redux 的 API
 */

import { connect } from 'react-redux'
import { addText } from '../actions/action'
import { App2 } from '../components/sampleComponent_2'

const mapStateToProps = (state) => {
  // console.log('todo state: ', state)
  return {
    textArr: state.todoer // 如果使用了combinedReducers组件则通state.reducerKey.value获取reducer返回的状态
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addText: (text) => dispatch(addText(text)) // 通过dipatch给action函数传参
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App2)