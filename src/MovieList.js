import React, { Component } from 'react'
import { connect } from 'react-redux';
import { mouseRecEnter,mouseRecLeave,mouseEnter,mouseLeave,getInputChangeAction,getButtonClick,getDeletItem,getList } from './store/actioncreate'
import store from './store/index.js';
import {MyListItem,MyList,Recommend,Page} from './styled'
class MovieList extends Component{
    constructor(props){
          super(props)
       }



componentDidMount(){
    const action = getList();
    store.dispatch(action);
   
}
render() {
    const { handleRecMouseEnter,handleMouseEnter,handleMouseLeave,handleRecMouseLeave,handleClick,handleDel,mylist,recommendations } =this.props;
    
    return(
    <Page>
        <div>
        <MyList>
        <div>Mylist</div>
        {
        mylist.map((item,index) =>{

            return(
            <MyListItem 
            onMouseEnter = {() =>handleMouseEnter(index)}  
            onMouseLeave = {() =>handleMouseLeave(index)} 
            key ={item.id}
                >
            <div>
            <img src={item.img} alt="" />
            </div>
            {item.title}
            {item.trigger ? <button onClick={()=>{handleDel(index)} }>Remove</button>:null}
            </MyListItem>
            )

        })}
        </MyList>
        </div>
        <div>
        <Recommend >
        <div>recommendations</div>
        {
            recommendations.map((item,index) =>{
            
                    return(
                    <MyListItem 
                    key ={item.id}
                    onMouseEnter = {() =>handleRecMouseEnter(index)}  
                    onMouseLeave = {() =>handleRecMouseLeave(index)} 
                    >
                    <div><img src={item.img} alt=""/></div>
                    {item.title}
                    {item.trigger ?<button onClick={()=>{handleClick(index)} }>ADD</button>:null}
                    </MyListItem>
                    )
        })
        }
        </Recommend>
        </div>
</Page>
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
    handleMouseLeave(index){
        const action = mouseLeave(index);
        dispatch(action);
    },
    handleRecMouseEnter(index){
        const action = mouseRecEnter(index);
        dispatch(action);
    },
    handleRecMouseLeave(index){
        const action = mouseRecLeave(index);
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