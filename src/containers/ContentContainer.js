import { connect } from 'react-redux'
import { fetchdata } from '../actions/fetchAction'
import { Content } from '../components/Content'

const mapStateToProps = (state, ownProps) => {
  return {
    pictures: state.picture.pictures,
    loading: state.picture.loading,
    error: state.picture.error
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchdata: (page, limit) => dispatch(fetchdata(page, limit))
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Content) //容器型组件与UI型组件关联
