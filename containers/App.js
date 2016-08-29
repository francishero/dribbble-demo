import React, { Component } from 'react'
import Header from '../components/Header'
import Toolbar from './Toolbar'
import ShotList from './ShotList'
import LoadMoreBtn from './LoadMoreBtn'
import Loading from './Loading'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Toolbar />
        <div id={"wrap-inner"}>
          <ShotList />
          <Loading content={'Loading shots...'}/>
          <LoadMoreBtn />
        </div>
      </div>
    )

  }
}
