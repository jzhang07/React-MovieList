import * as actiontypes from './actiontypes'
const defaultState ={
    mylist:[],
    recommendations:[],
    
}

export default (state = defaultState, action)=>{
    switch(action.type){
        case actiontypes.MOUSEENTER:
                var newState = JSON.parse(JSON.stringify(state));
                newState.mylist[action.index].trigger=true;
                return newState;
        case actiontypes.MOUSELEAVE:
                newState = JSON.parse(JSON.stringify(state));
                newState.mylist[action.index].trigger=false;
                return newState;
        case actiontypes.RECENTER:
                newState = JSON.parse(JSON.stringify(state));
                newState.recommendations[action.index].trigger=true;
               return newState;
        case actiontypes.RECLEAVE:
                newState = JSON.parse(JSON.stringify(state));
                newState.recommendations[action.index].trigger=false;
               return newState;
        case actiontypes.ADD_ITEM:
             newState = JSON.parse(JSON.stringify(state));
                // if(!newState.recommendations[action.index].like){
                // newState.recommendations[action.index].trigger= false;
                // newState.mylist = [...newState.mylist,newState.recommendations[action.index]]
                // newState.recommendations[action.index].like = true;
                // }
                newState.recommendations[action.index].trigger = false;
                newState.mylist = [...newState.mylist,newState.recommendations[action.index]]
                newState.recommendations.splice(action.index,1);
                return newState;
        case actiontypes.INIT_LIST_ACTION:
             newState = JSON.parse(JSON.stringify(state));
                var mylistdata = action.data.mylist.map((obj) =>{
                 obj.trigger = false;
                 obj.like = false;
                 return obj
                });
                var recommendationsdata = action.data.recommendations.map((obj) =>{
                obj.trigger = false;
                obj.like = false;
                return obj
                       }); 
                newState.mylist = mylistdata
                newState.recommendations= recommendationsdata
                return newState;
        case actiontypes.DELETE_ITEM:
             newState = JSON.parse(JSON.stringify(state));
                var rmdata =  newState.recommendations.find((x) =>{
                        return x.id === newState.mylist[action.index].id
                })
                if(rmdata){
                rmdata.like= false;
                newState.mylist.splice(action.index,1);
                }
                else{
                var mylistdatas =  newState.mylist.find((x) =>{
                        return x.id === newState.mylist[action.index].id
                })
                mylistdatas.trigger = false;
                newState.mylist.splice(action.index,1);
                newState.recommendations.push(mylistdatas);
                       
                }
                return newState;
        default:
   return state;
    }
    
}