import { Component } from 'react'
import { connect } from 'dva'

class IndexPage extends Component {
  render() {
    return (
      <div>
        user
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
