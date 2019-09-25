// import { CHANGE_TAB } from '../actions/actionTypes'
import { TABKEY } from '../config'

const initState = {
  tabs: [
    {
      name: '点菜',
      key: TABKEY.menu,
    },
    {
      name: '评价',
      key: TABKEY.comment,
    },
    {
      name: '商家',
      key: TABKEY.restanurant,
    }
  ],
  // activeKey: TABKEY.menu,
}

const tabReducer = (state = initState, action) => {
  switch(action.type) {
    // case CHANGE_TAB:
    //   return changeTab(state, action)
    default:
      return state
  }
}

export default tabReducer