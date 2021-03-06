/**
 * Copyright 2017-present, Company Name, Inc
 * 
 * This source code is licensed under the GNU GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * 
 */

import { injectReducer } from '../../store'

// ────────────────────────────────────────────────────────────────────────────────
// module name and default path name
// ────────────────────────────────────────────────────────────────────────────────
export const MODULE_NAME = '__ComponentName__'

// ────────────────────────────────────────────────────────────────────────────────
// The action name starts with a __ComponentName__
// ────────────────────────────────────────────────────────────────────────────────
const __ComponentName__NAME = '__ComponentName__NAME'

// ────────────────────────────────────────────────────────────────────────────────
// Initial State
// ────────────────────────────────────────────────────────────────────────────────
const initialState = {}

// ────────────────────────────────────────────────────────────────────────────────
// Actions handles
// ────────────────────────────────────────────────────────────────────────────────
const ActionHandles = {
  [__ComponentName__NAME]: (state, action) => Object.assign({}, state)
}

// ────────────────────────────────────────────────────────────────────────────────
// Reducer
// ────────────────────────────────────────────────────────────────────────────────
injectReducer(MODULE_NAME, initialState, ActionHandles)

// ────────────────────────────────────────────────────────────────────────────────
// The actions will map to component
// ────────────────────────────────────────────────────────────────────────────────

export const mapStateToProps = (state) => {
  return {}
}

export const mapActionsToProps = {
  FuncName: (value) => ({
    type: __ComponentName__NAME,
    data: value
  }),
  AsyncFuncName: () => {
    return (dispatch) => {
      setTimeout(() => {
        dispatch({
          type: __ComponentName__NAME,
          data: ''
        })
      }, 50)
    }
  }
}