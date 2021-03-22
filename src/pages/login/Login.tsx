import React,{FC} from 'react'
import  styles from  './Login.less'
import LoginBox from './LoginBox'
const Login:FC = () => {
  return <div className={styles.login_box}>
        <div className={styles.box}>
          <LoginBox/>
        </div>
  </div>
}

export default Login