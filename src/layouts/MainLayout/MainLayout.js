/**
 * Copyright 2017-present, wecash, Inc
 * 
 * This source code is licensed under the GNU GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * 
 */

import './MainLayout.css'
import React, { Component } from 'react'

class MainLayout extends Component {
  static propTypes = {

  }
  render() {
    return (
      <div className="MainLayout">
        MainLayout
        {this.props.children}
      </div>
    )
  }
}

export default MainLayout