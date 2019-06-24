import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'babel-polyfill'
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap'

/**
 * 通过滚动条实现图片无限加载 （pictures are provided by Unsplash）
 */
export class Content extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      aa: [],
      loadMore: false
    }
    this.page = 1
    this.limit = 20
  }

  componentWillMount() {
    this.setState({
      loadMore: true
    })
    this.fetchService(this.page)
  }

  componentDidMount() {
    window.addEventListener("scroll", () => this.handleScroll())
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", () => this.handleScroll())
  }

  fetchService = async() => {
    const fetchUrl = `https://picsum.photos/v2/list?page=${this.page}&limit=${this.limit}`
    const pictures = await fetch(fetchUrl)
    const responseTxt = await pictures.text()
    const picturesArr = await JSON.parse(responseTxt)
    picturesArr.map((item, index) => {
      let id = item.id
      let imgUrl = `https://picsum.photos/id/${id}/600/500`; //字符串拼接
      this.setState((prevState) => ({
        aa: prevState.aa.concat(
          <Col lg={3} md={6} xs={12} key={id} style={{marginTop: 20}}>
            <Card>
              <Card.Img variant="top" src={imgUrl}/>
              <Card.Body>
                <Card.Title>{item.author}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ),
        loadMore: false
      }))
    })
  }

  handleScroll = () => {
    const documentScrollTop = document.documentElement.scrollTop
    const documentClientHeight = document.documentElement.clientHeight
    const documentScrollHeight =  document.documentElement.scrollHeight
    // console.log(documentScrollTop + ' ' + documentClientHeight + ' ' + documentScrollHeight)
    if(documentScrollTop + documentClientHeight +1 >= documentScrollHeight){
      this.setState({
        loadMore: true
      })
      // this.page++
      // console.log('page: ', this.page)
      this.fetchService(this.page++)
    }
  }

  render(){
    return(
      <Container fluid="true" style={{marginTop: 15, textAlign: "center"}}>
        <Row>
          {this.state.aa}
        </Row>
        {this.state.loadMore ? <Spinner animation="border" variant="warning"/> : " "}
      </Container>
    )
  }
}
