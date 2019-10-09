import { 
  GET_LIST_DATA, LEFT_CLICK, 
  ADD_SELECT_ITEM, MENUS_SELECT_ITEM, 
  SHOW_CHOOSE_CONTENT, CLEAR_CAR } from '../actions/actionTypes'

const initState = {
  listData: {},
  currentLeftIndex: 0,
  showChooseContent: false,
}

const itemClick = (state, action) => {
  return {...state, currentLeftIndex: action.obj.currentLeftIndex}
}

const getListData = (state, action) => {
  if(Object.keys(state.listData).length > 0) {
    return {...state}
  }
  return {...state, listData: action.obj.data}
}

const addSelectItem = (state, action) => {
  return {...state, listData: dealWithSelectItem(state, action, ADD_SELECT_ITEM)}
}

const minusSelectItem = (state, action) => {
  return {...state, listData: dealWithSelectItem(state, action, MENUS_SELECT_ITEM)}
}

const chooseContent = (state, action) => {
  return {...state, showChooseContent: action.obj.flag}
}

const dealWithSelectItem = (state, action, type) => {
  const listData = state.listData
  const list = listData.food_spu_tags || []
  const currentItem = list[action.outIndex || state.currentLeftIndex]

  if(type === ADD_SELECT_ITEM) {
    currentItem.spus[action.obj.index].chooseCount ++ 
  } else {
    currentItem.spus[action.obj.index].chooseCount --
  }
  

  let _listData = JSON.parse(JSON.stringify(listData))
  return _listData
}

const clearCar = (state) => {
  const listData = state.listData
  const list = listData.food_spu_tags || []

  for( let i = 0; i < list.length; i++) {
    let spus = list[i].spus || []
    for( let j = 0; j < spus.length; j++) {
      spus[j].chooseCount = 0
    }
  }

  return {...state, listData: JSON.parse(JSON.stringify(listData))}
}

const menuReducer = (state = initState, action) => {
  switch(action.type) {
    case GET_LIST_DATA:
      return getListData(state, action)
    case LEFT_CLICK:
      return itemClick(state, action)
    case ADD_SELECT_ITEM:
      return addSelectItem(state, action)
    case MENUS_SELECT_ITEM:
      return minusSelectItem(state, action)
    case SHOW_CHOOSE_CONTENT:
      return chooseContent(state, action)
    case CLEAR_CAR:
      return clearCar(state, action)
    default: 
      return state
  }
}

export default menuReducer