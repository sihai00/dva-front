import { Component } from 'react'
import { connect } from 'dva'

class IndexPage extends Component {
  render() {
    return (
      <div>
        <h1>user</h1>
        <button onClick={() => this.props.history.push('/user/user1')}>to user</button>
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
