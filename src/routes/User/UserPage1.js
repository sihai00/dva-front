import { Component } from 'react'
import { connect } from 'dva'

class IndexPage extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>user1</h1>
          <button onClick={() => this.props.history.push('/user/user1/user2')}>to user</button>
        </div>
        <div>
          <h1>user1</h1>
          <button onClick={() => this.props.history.push('/user/user1/user2')}>to user</button>
        </div>
        <div>
          <h1>user1</h1>
          <button onClick={() => this.props.history.push('/user/user1/user2')}>to user</button>
        </div>
        <div>
          <h1>user1</h1>
          <button onClick={() => this.props.history.push('/user/user1/user2')}>to user</button>
        </div>
        <div>
          <h1>user1</h1>
          <button onClick={() => this.props.history.push('/user/user1/user2')}>to user</button>
        </div>
        <div>
          <h1>user1</h1>
          <button onClick={() => this.props.history.push('/user/user1/user2')}>to user</button>
        </div>
        <div>
          <h1>user1</h1>
          <button onClick={() => this.props.history.push('/user/user1/user2')}>to user</button>
        </div>
        <div>
          <h1>user1</h1>
          <button onClick={() => this.props.history.push('/user/user1/user2')}>to user</button>
        </div>
        <div>
          <h1>user1</h1>
          <button onClick={() => this.props.history.push('/user/user1/user2')}>to user</button>
        </div>
        <div>
          <h1>user1</h1>
          <button onClick={() => this.props.history.push('/user/user1/user2')}>to user</button>
        </div>
        <div>
          <h1>user1</h1>
          <button onClick={() => this.props.history.push('/user/user1/user2')}>to user</button>
        </div>
        <div>
          <h1>user1</h1>
          <button onClick={() => this.props.history.push('/user/user1/user2')}>to user</button>
        </div>
      </div>
    )
  }
}

IndexPage.propTypes = {
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(IndexPage)
