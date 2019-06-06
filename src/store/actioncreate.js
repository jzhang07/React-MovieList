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
    axios.get(//'http://localhost:4000/data'
    "api/moviedata.json"
    )
    .then((res)=>{
        alert('I did the http request by using Thunk Middleware, the http call is in actioncreate \n however if you need the mock server, you can using the API folder to create a json-server in port:4000, than using the code line38 and line44 to replace line39 and line43');
        const data = res.data.data;
       // const data = res.data
        const action = initListAction(data);
        dispatch(action)
    })
    .catch(()=>{
        console.log('gg')
    })
  }
   
}

