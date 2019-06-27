import { connect } from 'react-redux'
import { fetching, fetched } from '../actions/fetchAction'
import { Content } from '../components/Content'

const mapStateToProps = (state, ownProps) => {
  return {
    pictures: state.picture.pictures,
    loading: state.picture.loading
  }
}

const mapDispatchToProps = (state, ownProps) => {
  return {
    fetching: () => dispatch(fetching),
    fetched: () => dispatch(fetched)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
