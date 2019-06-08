export const increment = {type: 'INCREMENT'}
export const decrement = {type: 'DECREMENT'}

//action接受参数
export const addText = (text) => {
  console.log('action text: ', text)
  return{
    type: 'ADDTEXT',
    text
  }
}
