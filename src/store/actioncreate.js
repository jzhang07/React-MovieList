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
    type:actiontypes.TRIGGER,
    index
})
export const mouseRecEnter = (index) =>({
    type:actiontypes.RETRIGGER,
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
    axios.get('/api/homeList.json')
    .then((res)=>{
        const data = res.data;
        const action = initListAction(data);
        dispatch(action)
    })
    .catch(()=>{
        console.log('gg')
    })
  }
   
}

