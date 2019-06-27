
const initialState = {
  loading: false,
  pictures: [],
  error: null
}
export const picture = (state=initialState, action) => {
  switch(action.type){
    case 'START_FETCH':
      console.log('fetching start...')
      return {...state, loading: true}
    case 'FETCH_SUCCESS':
      console.log('fetching success...')
      return {
        ...state,
        loading: false,
        pictures: state.pictures.concat(action.res), //浅拷贝，返回一个新的引用类型，不修改原来的state
        error: null
      }
    case 'FETCH_ERROR':
        console.log('fetching error...')
      return {
        ...state,
        loading: false,
        error: action.err
      }
    default:
      return state
  }
}
