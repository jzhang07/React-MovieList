import * as actiontypes from './actiontypes'
const defaultState ={
    inputValue:'',
    list:[],
    mylist:[],
    recommendations:[],
    
}

export default (state = defaultState, action)=>{
    if(action.type=== actiontypes.CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState
    }
    if(action.type=== actiontypes.TRIGGER){
        const newState = JSON.parse(JSON.stringify(state));
       newState.mylist[action.index].trigger=!newState.mylist[action.index].trigger;
       return newState
    }
    if(action.type=== actiontypes.RETRIGGER){
        const newState = JSON.parse(JSON.stringify(state));
        newState.recommendations[action.index].trigger=!newState.recommendations[action.index].trigger;
       return newState
    }
    if(action.type=== actiontypes.ADD_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
       
        newState.mylist = [...newState.mylist,newState.recommendations[action.index]]
        newState.recommendations.splice(action.index,1)
       
        return newState
    }
    if(action.type=== actiontypes.INIT_LIST_ACTION){
        const newState = JSON.parse(JSON.stringify(state));
        newState.mylist = action.data.data.mylist
        newState.recommendations= action.data.data.recommendations
      
        return newState
    }
    if(action.type=== actiontypes.DELETE_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.mylist.splice(action.index,1)
        return newState;
      
    }
return state
}