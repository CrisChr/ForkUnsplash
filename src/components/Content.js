import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap'

/**
 * 通过滚动条实现图片无限加载 （pictures are provided by Unsplash）
 */
export class Content extends React.PureComponent {
  constructor(props){
    super(props)
    this.page = 1
    this.limit = 16
  }

  componentWillMount() {
    this.props.fetchdata(this.page, this.limit)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  /*不再需要一个状态值（state = aa）来维护接受到的props
  * 因为本身接收到的props就是一个浅拷贝的引用类型，即一个新的数组
  * 这里再将这个新的数组浅拷贝给aa，会增加内存开销，并且汇报duplicate key error
  */
  // getData = () => {
  //   // console.log('props: ', this.props)
  //   const picturesArr = this.props.pictures 
  //   console.log('component picturesArr: ', picturesArr)
  //   picturesArr.map((item, index) => {
  //     let id = item.id
  //     let imgUrl = `https://picsum.photos/id/${id}/600/500`; //字符串拼接
  //     this.setState((prevState) => ({
  //       aa: prevState.aa.concat(
  //         <Col lg={3} md={6} xs={12} key={id} style={{marginTop: 20}}>
  //           <Card>
  //             <Card.Img variant="top" src={imgUrl}/>
  //             <Card.Body>
  //               <Card.Title>{item.author}</Card.Title>
  //             </Card.Body>
  //           </Card>
  //         </Col>
  //       )
  //     }))
  //   })
  // }

  handleScroll = () => {
    const documentScrollTop = document.documentElement.scrollTop
    const documentClientHeight = document.documentElement.clientHeight
    const documentScrollHeight =  document.documentElement.scrollHeight
    // console.log(documentScrollTop + ' ' + documentClientHeight + ' ' + documentScrollHeight)
    if(documentScrollTop + documentClientHeight == documentScrollHeight){
      this.page++
      this.props.fetchdata(this.page, this.limit)
    }
  }

  render(){
    return(
      <Container fluid="true" style={{marginTop: 15, textAlign: "center"}}>
        <Row>
          {
            this.props.pictures.map((item, index) => {
              let id = item.id
              let imgUrl = `https://picsum.photos/id/${id}/600/500`; //字符串拼接
              //每次接收容器组件传来的新的props并渲染
              return (<Col lg={3} md={6} xs={12} key={id} style={{marginTop: 20}}>
                    <Card>
                      <Card.Img variant="top" src={imgUrl}/>
                      <Card.Body>
                        <Card.Title>{item.author}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              }
            )
          }
        </Row>
        {this.props.loading ? <Spinner animation="border" variant="warning"/> : " "}
      </Container>
    )
  }
}
