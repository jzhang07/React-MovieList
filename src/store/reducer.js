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
                var newState = JSON.parse(JSON.stringify(state));
                newState.mylist[action.index].trigger=false;
                return newState;
        case actiontypes.RECENTER:
                var newState = JSON.parse(JSON.stringify(state));
                newState.recommendations[action.index].trigger=true;
               return newState;
        case actiontypes.RECLEAVE:
                var newState = JSON.parse(JSON.stringify(state));
                newState.recommendations[action.index].trigger=false;
               return newState;
        case actiontypes.ADD_ITEM:
                var newState = JSON.parse(JSON.stringify(state));
                
                if(!newState.recommendations[action.index].like){
                        newState.recommendations[action.index].trigger= false;
                        newState.mylist = [...newState.mylist,newState.recommendations[action.index]]
                        newState.recommendations[action.index].like = true;
                }
                
                //newState.recommendations.splice(action.index,1)
                return newState;
        case actiontypes.INIT_LIST_ACTION:
                var newState = JSON.parse(JSON.stringify(state));
                var mylistdata = action.data.data.mylist.map((obj) =>{
                 obj.trigger = false;
                 obj.like = false;
                 return obj
                });
                var recommendationsdata = action.data.data.recommendations.map((obj) =>{
                        obj.trigger = false;
                        obj.like = false;
                        return obj
                       }); 
                newState.mylist = mylistdata
                newState.recommendations= recommendationsdata
                return newState;
        case actiontypes.DELETE_ITEM:
                var newState = JSON.parse(JSON.stringify(state));
                var rmdata =  newState.recommendations.find((x) =>{
                        return x.id === newState.mylist[action.index].id
                })
                if(rmdata){
                        rmdata.like= false;
                        newState.mylist.splice(action.index,1);
                }
                else{
                        newState.mylist.splice(action.index,1);
                }
                return newState;
        default:
   return state;
    }
    
}