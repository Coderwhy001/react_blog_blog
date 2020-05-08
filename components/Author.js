import { Avatar, Divider } from 'antd'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';
import '../public/style/components/author.css'
const Author = () => {
  return (
    <div className="author-div comm-box">
        <div>
          <Avatar size={100} src="http://pic4.zhimg.com/50/v2-95ce9bf17f832134f8774cf3f6450adf_hd.jpg" />
        </div>
        <div className="author-introduction">
            大三在校学生，专注于web和移动前端开发。希望能进入大厂找到好的工作>
            <Divider>社交账号</Divider>
            <a href="https://github.com/Coderwhy001"><Avatar size={28} icon={<GithubOutlined />} className="account" /></a>
            <Avatar size={28} icon={<QqOutlined />} className="account" />
            <Avatar size={28} icon={<WechatOutlined />} className="account" />
        </div>
    </div>
  )
}

export default Author