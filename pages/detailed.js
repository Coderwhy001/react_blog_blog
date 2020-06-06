import React from 'react';
import Head from 'next/head'
import { Row, Col, Breadcrumb, Affix } from 'antd'
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../public/style/pages/detailed.css'
import 'markdown-navbar/dist/navbar.css'
import axios from 'axios'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import Tocify from '../components/tocify.tsx'
import servicePath from '../config/apiUrl'


const Detailed = (props) => {
  
  const tocify = new Tocify()
  const renderer = new marked.Renderer()

  renderer.heading = function(text, level, raw) {
    const anchor = tocify.add(text, level)
    return `<a id="${anchor}" herf="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
  }
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    highlight: function(code) {
      return hljs.highlightAuto(code).value
    }
  })

  let html = marked(props.article_content)
  let title = props.title
  let typeName = props.typeName
  let typeId = props.typeId
  let view_count = props.view_count
  let addTime = props.addTime
  console.log(props)
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href={"/list?id=" + typeId}>{typeName}</a></Breadcrumb.Item>
                <Breadcrumb.Item>{title}</Breadcrumb.Item>
              </Breadcrumb> 
            </div>
            <div>
              <div className="detailed-title">
                {title}
              </div>
              <div className="list-icon center">
                <span><CalendarOutlined />{addTime}</span>
                <span><FolderOutlined /> {typeName}</span>
                <span className={view_count > 100 ? "hot" : ""}><FireOutlined /> {view_count}</span>
              </div>
              <div className="detailed-content"
                 dangerouslySetInnerHTML={{__html:html}}
              >
              </div>
            </div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              {tocify && tocify.render()}
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </div>
  )

}

Detailed.getInitialProps = async (ctx) => {
  console.log(ctx.query.id)
  let id = ctx.query.id
  const promise = new Promise((resolve) => {
    axios(servicePath.getArticleById+id).then(
      (res) => {
        // console.log(res.data)
        resolve(res.data.data[0])
      }
    )
  })
  return await promise
}

export default Detailed