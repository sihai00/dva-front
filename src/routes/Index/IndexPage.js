import { Component } from 'react'
import { connect } from 'dva'
import styles from './IndexPage.scss'

class IndexPage extends Component {
  render() {
    return (
      <div className={styles.page}>
        index
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
