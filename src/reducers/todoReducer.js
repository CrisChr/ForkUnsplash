
export const todoer = (state = [''], action) => {
  switch(action.type){
    case 'ADDTEXT':
      console.log('reducer state: ', action.text)
      return state.concat(action.text) //reducer获取action参数
    default:
      return state
  }
}
