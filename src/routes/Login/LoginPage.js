import { Component } from 'react'
import { connect } from 'dva'
import styles from './LoginPage.scss'
import Nav from '../../components/Common/Nav/Nav'
import { Button, WingBlank, WhiteSpace, Flex, List, InputItem, Toast } from 'antd-mobile'
import img from '../../assets/img/logo.png'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      username: '',
      password: ''
    }
  }
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('Please enter 11 digits');
    }
  }
  onChange = (name, value) => {
    // if (name === 'username') {
    //   if (value.replace(/\s/g, '').length < 11) {
    //     this.setState({
    //       hasError: true,
    //     });
    //   } else {
    //     this.setState({
    //       hasError: false,
    //     });
    //   }
    // }

    this.setState({
      [name]: value,
    });
  }
  handleSubmit = () => {
    const { username, password, hasError } = this.state

    if (!hasError && username && password) {
      this.props.dispatch({
        type: 'account/login',
        payload: {
          username: username.replace(/\s/g, ''), 
          password
        }
      }).then(v => {
        if (v) this.props.history.push('/')
      })
    }
  }
  render() {
    return (
      <div className={styles.page}>
        <Nav
          title="登录"
          history={this.props.history}
        />
        <Flex
          align="center"
          justify="center"
          className={styles.height}
        >
          <div
            className={styles.avatar}
          >
            <img alt="img" src={img}/>
          </div>
        </Flex>
        <WingBlank>
          <List
            className={styles.list}
          >
            <Flex>
              <span className={styles.span}>手机：</span>
              <InputItem
                // type="phone"
                clear
                className={styles.input}
                placeholder="请输入您的注册手机号"
                error={this.state.hasError}
                onErrorClick={this.onErrorClick}
                onChange={(value) =>this.onChange('username', value)}
                value={this.state.username}
              />
            </Flex>
            <Flex>
              <span className={styles.span}>密码：</span>
              <InputItem
                type="password"
                clear
                className={styles.input}
                placeholder="请输入您的密码"
                onChange={(value) =>this.onChange('password', value)}
                value={this.state.password}
              />
            </Flex>
            <WhiteSpace/>
            <WhiteSpace/>
            <Button
              style={{color:'#fff',backgroundColor:'#F5BC34',border: 'none'}}
              onClick={this.handleSubmit}
            >登录</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

LoginPage.propTypes = {
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(LoginPage)
