import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './index.module.less'

class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      userName: 'lzc'
    }
  }

  render(){
    const { userName } = this.state;
    return (
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.breadcrumb}>页面1</div>
        </div>
        <div className={styles.right}>
          <span>欢迎，{ userName }</span>
          <span>退出</span>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Header)
