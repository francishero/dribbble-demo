import React, { Component } from 'react'
import List from '../components/List'
import { connect } from 'react-redux'
import find from 'lodash/find'
import without from 'lodash/without'
import { updateShotsParams } from '../actions/shots'

class MenuItem extends Component {
  constructor(props) {
    super(props)
    this.renderItem = this.renderItem.bind(this)
    this.updateVisiting = this.updateVisiting.bind(this)
    this.updateSelected = this.updateSelected.bind(this)
    this.state = this.getState()
  }

  getState() {
    return { visiting: false, selectedKey: 'all' }
  }

  renderItem(item) {
    return (
      <li
        onClick={this.updateSelected(item.key)}
        key={item.key}
      >
        <a href="javascript:;">{item.name}</a>
      </li>
    )
  }

  render() {
    const [
      selected,
      others
    ] = this.filterItem(this.props.items, this.state.selectedKey)

    return (
      <li>
        <a
          onClick={this.updateVisiting}
          className='selected-menu'
          href="javascript:;"
        >
          {selected.name}
        </a>
        <List
          className={this.state.visiting ? 'sub' : 'sub hide'}
          renderItem={this.renderItem}
          items={others}
        />
      </li>
    )
  }

  updateVisiting() {
    this.setState({ visiting: !this.state.visiting })
  }

  updateSelected(key) {
    const { categoryType, updateShotsParams } = this.props

    return () => {
      this.setState({
        visiting: false,
        selectedKey: key
      })
      updateShotsParams({[categoryType]: key})
    }
  }

  filterItem(items, key) {
    const selected = find(items, i => i.key == key)
    return [
      selected,
      without(items, selected)
    ]
  }
}

export default connect(
  null,
  { updateShotsParams }
)(MenuItem)
