import 'babel-polyfill'

//中间件：即action到reducer之间
export const fetchdata = (page, limit) => {
  console.log(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
  return async (dispatch) => {
    dispatch(startFetch()) //处理start fetch的action
    try {
      let respons = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
      let resTxt = await respons.text()
      let resJson = await JSON.parse(resTxt)
      dispatch(fetchSuccess(resJson)) //处理fetch success的action
    } catch (err) {
      dispatch(fetchError(err))  //处理fetched error的action
    }
  }
}

const startFetch = () => ({
  type: 'START_FETCH'
})

const fetchSuccess = (res) => ({
  type: 'FETCH_SUCCESS',
  res
})

const fetchError = (err) => ({
  type: 'FETCH_ERROR',
  err: err.message
})
