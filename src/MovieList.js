import React, { Component } from 'react'
import { connect } from 'react-redux';
import {  mouseRecEnter,mouseRecLeave,mouseEnter,mouseLeave,getInputChangeAction,getButtonClick,getDeletItem,getList } from './store/actioncreate'
import store from './store/index.js';
import Ul from './ul'
import {Page,Logo} from './styled'
class MovieList extends Component{
    constructor(props){
          super(props)

          this.state = {

            }
            
       }



componentDidMount(){
    const action = getList();
    store.dispatch(action);
   
}
render() {
    const { handleRecMouseEnter,handleMouseEnter,handleMouseLeave,handleRecMouseLeave,handleClick,handleDel,mylist,recommendations } =this.props;
    
    return(
    <Page>
        <Logo />
        <Ul name= {'MyList'} data = {mylist} handleMouseEn = {handleMouseEnter} handleMouseLe = {handleMouseLeave} handeleBt={handleDel} btn ={'Remove'}/>
        <Ul name= {'Recommendations'} data = {recommendations} handleMouseEn = {handleRecMouseEnter} handleMouseLe = {handleRecMouseLeave} handeleBt={handleClick} btn ={'Add'}/>
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
     mylist:state.mylist,
     recommendations:state.recommendations,
     trigger:state.trigger,
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MovieList);