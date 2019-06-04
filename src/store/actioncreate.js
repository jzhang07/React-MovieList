import axios from 'axios';
import *as actiontypes from './actiontypes';
export const getInputChangeAction = (value) =>({
    type:actiontypes.CHANGE_INPUT_VALUE,
    value
})
export const getButtonClick = (index) =>({
    type:actiontypes.ADD_ITEM,
    index
})
export const mouseEnter = (index) =>({
    type:actiontypes.MOUSEENTER,
    index
})
export const mouseLeave = (index) =>({
    type:actiontypes.MOUSELEAVE,
    index
})
export const mouseRecEnter = (index) =>({
    type:actiontypes.RECENTER,
    index
})
export const mouseRecLeave = (index) =>({
    type:actiontypes.RECLEAVE,
    index
})
export const getDeletItem = (index) =>({
    type:actiontypes.DELETE_ITEM,
    index
})

export const initListAction = (data) => ({
    type: actiontypes.INIT_LIST_ACTION,
    data
})
export const getList = () =>{
  return (dispatch) =>{
    axios.get('/api/moviedata.json')
    .then((res)=>{
        const data = res.data;
       console.log(res)
        const action = initListAction(data);
        dispatch(action)
    })
    .catch(()=>{
        console.log('gg')
    })
  }
   
}

