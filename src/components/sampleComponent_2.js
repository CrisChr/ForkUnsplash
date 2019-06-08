
/**
 * UI 组件
 * 只负责 UI 的呈现，不带有任何业务逻辑
 * 没有状态（即不使用this.state这个变量）
 * 所有数据都由参数（this.props）提供
 * 不使用任何 Redux 的 API
 */
import React from 'react'

export class App2 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }

  addNewText(text) {
    console.log('before dispatch: ', text)
    if(text !== ''){
      this.props.addText(text)
    }
  }

  render(){
    return(
      <div>
        <input type='text' onChange={(e) => this.setState({text: e.target.value})}/>
        <button onClick={() => this.addNewText(this.state.text)}>New Text</button>

        <p>{this.props.textArr}</p>
      </div>
    )
  }
}

