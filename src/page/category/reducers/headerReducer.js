import { CHANGE_TAB } from '../actions/actionTypes'
import { TABKEY } from '../config'

let tabs = {}
tabs[TABKEY.cate] = {
  key: TABKEY.cate,
  text: '全部分类',
  obj: {}
}

tabs[TABKEY.type] = {
  key: TABKEY.type,
  text: '综合排序',
  obj: {}
}

tabs[TABKEY.filter] = {
  key: TABKEY.filter,
  text: '筛选',
  obj: {}
}

const initState = {
  tabs: tabs,
  activeKey: TABKEY.cate,
}

const changeTab = (state, action) => {
  return {...state, activeKey: action.obj.activeKey}
}

const headerReducer = (state = initState, action) => {
  switch(action.type) {
    case CHANGE_TAB:
      return changeTab(state, action)
    default:
      return state
  }
}

export default headerReducer