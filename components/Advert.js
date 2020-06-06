import '../public/style/components/advert.css'
import { LinkOutlined } from '@ant-design/icons';

const Advert = () => {
  return (
    <div className="ad-div comm-box">
      <div>
        <LinkOutlined />&nbsp;友情链接
        <a href="http://www.duowu.site">
          <br />
          朵雾的博客
        </a>
      </div>
    </div>
  )
}

export default Advert