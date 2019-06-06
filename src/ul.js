import React, { Component } from 'react'
import {MyListItem,UlTemp} from './styled'
class Ul extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <UlTemp>
            <div>{this.props.name}</div>
            {
            this.props.data.map((item,index) =>{
    
                return(
                <MyListItem 
                onMouseEnter = {() =>this.props.handleMouseEn(index)}  
                onMouseLeave = {() =>this.props.handleMouseLe(index)} 
                key ={item.id}
                    >
                <div>
                <img src={item.img} alt="" />
                </div>
                {item.title}
                <br />
                {item.trigger ? <button  onClick={()=>{this.props.handeleBt(index)} }>{this.props.btn}</button>:null}
                </MyListItem>
                )
    
            })}
            </UlTemp>
        )
    }
}


export default Ul