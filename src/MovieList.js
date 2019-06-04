import React, { Fragment,Component } from 'react'
import { connect } from 'react-redux';
import { mouseRecEnter,mouseEnter,getInputChangeAction,getButtonClick,getDeletItem,getList } from './store/actioncreate'
import store from './store/index.js';
import {MyListItem,MyList,Recommend} from './styled'
class MovieList extends Component{
    constructor(props){
          super(props)
       }



componentDidMount(){
    const action = getList();
    store.dispatch(action);
   
}
render() {
    const { handleRecMouseEnter,handleMouseEnter,handleClick,handleDel,mylist,recommendations } =this.props;
    
    return(
    <Fragment>

<div>
<MyList>
<div>Mylist</div>
{
    mylist.map((item,index) =>{
    if(item.trigger){
        return(
        <MyListItem 
        onMouseEnter = {() =>handleMouseEnter(index)}  
        onMouseLeave = {() =>handleMouseEnter(index)} 
        key ={item.id}
            >
        <div>
        <img src={item.img} alt="" />
        </div>
        {item.title}
        <button onClick={()=>{handleDel(index)} }>Remove</button>
        </MyListItem>
        )
    }else{
        return(
        <MyListItem key ={item.id}
        onMouseEnter = {() =>handleMouseEnter(index)}  
        onMouseLeave = {() =>handleMouseEnter(index)} 
        >
        <div><img src={item.img} alt=""/></div>
        {item.title}
        </MyListItem>
        )
    }
})}
</MyList>
</div>
<div>
<Recommend >
<div>recommendations</div>
{
    recommendations.map((item,index) =>{
        if(item.trigger){
            return(
            <MyListItem 
            key ={item.id}
            onMouseEnter = {() =>handleRecMouseEnter(index)}  
            onMouseLeave = {() =>handleRecMouseEnter(index)} 
            >
            <div><img src={item.img} alt=""/></div>
            {item.title}
            <button onClick={()=>{handleClick(index)} }>ADD</button>
            </MyListItem>
            )
        }else{
            return(
            <MyListItem 
            key ={item.id}
            onMouseEnter = {() =>handleRecMouseEnter(index)}  
            onMouseLeave = {() =>handleRecMouseEnter(index)} 
            >
            <div><img src={item.img} alt=""/></div>
            {item.title}
            </MyListItem>
            )
        }

})
}
</Recommend>
</div>
</Fragment>
    )
}
}





const mapDispatchToProps = (dispatch) =>{
 return {
    handleMovieList(){
        const action = getList();
        dispatch(action);
    },
    changeInputValue(e){
        const action = getInputChangeAction(e.target.value)
        dispatch(action);
    },
    handleClick(index){
        const action = getButtonClick(index);
        dispatch(action);
    },
    handleMouseEnter(index){
        const action = mouseEnter(index);
        dispatch(action);
       
    },
    handleRecMouseEnter(index){
        const action = mouseRecEnter(index);
       
        dispatch(action);
    },
    handleDel(index){
        const action = getDeletItem(index);
       dispatch(action);
    },
 }
}

const mapStateToProps = (state) =>{
  return {
     inputValue: state.inputValue,
     list:state.list,
     mylist:state.mylist,
     recommendations:state.recommendations,
     trigger:state.trigger,
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MovieList);