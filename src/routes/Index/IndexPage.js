import { Component } from 'react'
import { connect } from 'dva'
import styles from './IndexPage.scss'

class IndexPage extends Component {
  render() {
    return (
      <div>
        <h1>index</h1>
        <button onClick={() => this.props.history.push('/user')}>to user</button>
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
