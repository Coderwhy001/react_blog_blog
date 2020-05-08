import React, { useState, useEffect } from 'react';
import '../public/style/components/header.css'
import { Row, Col, Menu, icon } from 'antd'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import { HomeOutlined, YoutubeOutlined, SmileOutlined, MessageOutlined } from '@ant-design/icons'


const Header = () => {
  const [navArray, setNavArray] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getTypeInfo).then(
        (res) => {
          return res.data.data
        }
      )
      setNavArray(result)
    }
    fetchData()
  }, [])

  const handleClick = (e) => {
    if (e.key == 0) {
      Router.push('/index')
    } else {
      Router.push('/list?id=' + e.key)
    }
  }
  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">五月</span>
          <span className="header-txt">前端开发程序员</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal">
            <Menu.Item key="0" onClick={handleClick}>
              <HomeOutlined />
              首页
            </Menu.Item>
            <Menu.Item key="1" onClick={handleClick}>
              <YoutubeOutlined />
              视频教程
            </Menu.Item>
            <Menu.Item key="2" onClick={handleClick}>
              <MessageOutlined />
                大神逼逼叨
            </Menu.Item>
            <Menu.Item key="3" onClick={handleClick}>
              <SmileOutlined />
              快乐生活
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default Header
