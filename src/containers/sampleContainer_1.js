
import {connect} from 'react-redux'
import { App1 } from '../components/sampleComponent_1'
import { increment, decrement } from '../actions/action'

const mapStateToPorps = (state) => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment),
    decrement: () => dispatch(decrement)
  }
}

export default connect(mapStateToPorps, mapDispatchToProps)(App1)