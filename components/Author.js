import { Avatar, Divider, Tooltip, Tag } from 'antd'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';
import '../public/style/components/author.css'
const Author = () => {
  return (
    <div className="author-div comm-box">
        <div>
          <Avatar size={100} src="http://pic4.zhimg.com/50/v2-95ce9bf17f832134f8774cf3f6450adf_hd.jpg" />
        </div>
        <div className="author-introduction">
            <div>前端蔡徐坤</div>
            <div className="author-tag">
              <Tag color="magenta">大三小白</Tag>
              <Tag color="green">热爱开源</Tag>
              <Tag color="blue">底层学习中</Tag>
              <Tag color="geekblue">算法爱好者</Tag>
              <Tag color="cyan">一入前端深似海</Tag>
            </div>
            <Divider>社交账号</Divider>
            <Tooltip title="https://github.com/Coderwhy001">
              <a href="https://github.com/Coderwhy001"><Avatar size={28} icon={<GithubOutlined />} className="account" /></a>
            </Tooltip>
            <Tooltip title="2268849815">
              <Avatar size={28} icon={<QqOutlined />} className="account" />
            </Tooltip>
            <Tooltip title="13870403967">
              <Avatar size={28} icon={<WechatOutlined />} className="account" />
            </Tooltip>
        </div>
    </div>
  )
}

export default Author