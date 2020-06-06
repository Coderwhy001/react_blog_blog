import '../public/style/components/footer.css'
import { TeamOutlined, EyeOutlined } from "@ant-design/icons";
import moment from 'moment'
import { useEffect, useState } from 'react'
const Footer = () => {
  let startTime = new Date("2020/05/05 00:00:00")
  let [time, setTime] = useState({})
  // let a = moment.duration(new Date() - startTime)
  // console.log(a._data)
  useEffect(() => {
    let myTime = setInterval(function() {
      setTime(moment.duration(new Date() - startTime)._data)
    }, 1000)
    return () => {
      clearInterval(myTime)
    }
  })
  // console.log(time)
  return (
  <div className="footer-div">
    <div>系统是由React+Node+Ant Design</div>
    <div>blogwuyue.com</div>
    <div>
        <EyeOutlined /> 总访问量
        <span id="busuanzi_value_site_pv"></span>次 &nbsp;|&nbsp;
        <TeamOutlined /> 访客数
        <span id="busuanzi_value_site_uv"></span>
        人次
    </div>
    <div>
      <span>本站已小心翼翼运行：</span>
      <span>{time.years} </span>年&nbsp;
      <span>{time.months} </span>月&nbsp;
      <span>{time.days} </span>天&nbsp;
      <span>{time.hours} </span>小时&nbsp;
      <span>{time.minutes} </span>分&nbsp;
      <span>{time.seconds} </span>秒&nbsp;
    </div>
    <a className="footer-a" href="http://www.beian.miit.gov.cn/">
      <span className="footer-span">赣ICP备20003947号</span>
    </a>
    <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
  </div>
  )
}

export default Footer