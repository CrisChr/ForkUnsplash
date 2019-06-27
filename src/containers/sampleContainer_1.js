
import {connect} from 'react-redux'
import { App1 } from '../components/sampleComponent_1'
import { increment, decrement } from '../actions/action'

const mapStateToPorps = (state, ownProps) => {
  // console.log('own props: ', ownProps)
  return {
    count: state.counter.count
  }
}

//函数形式
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     increment: () => dispatch(increment),
//     decrement: () => dispatch(decrement)
//   }
// }

//对象形式
const mapDispatchToProps = {
  increment: () => increment,
  decrement: () => decrement
}

export default connect(mapStateToPorps, mapDispatchToProps)(App1)
