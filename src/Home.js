
import React,{useState,useEffect,useContext,useReducer,useMemo, useRef, useImperativeHandle} from "react";
import { UserContext } from "./App";
import reducer from "./reducer";
import './App'



function Home(props,oHome) {

 const [numState,setNumState] = useState(20)
  const obj= useRef(numState)   
 useEffect(()=>{ console.log('更新') ; return()=>{console.log('卸载')} },[numState])


 const userInfo = useContext(UserContext)


const oInput = useRef()

 useImperativeHandle(oHome,()=>{
   return {
      setValue:()=>{oInput.current.value = 'BBBBBBBBBBBB' }
   }
 })

 



 const [state, dispatch] =useReducer(reducer,{num:0});


  const decreament=  useMemo(()=>{   return()=> {setNumState(numState-1)}},[numState])



    return(
   
    <UserContext.Provider value={{'name':'syy','age':18}}>
        <div>
          <p >{state.num}</p>
           <p >{numState}</p> 
           <button onClick={()=>{console.log(obj.current)}}>1111</button>
           <button onClick={()=>{dispatch({type:'add'})}}>+1</button>
           <button onClick={()=>{dispatch({type:'sub'})}}>-1</button>
           
           
          
           <button onClick={()=>{decreament()}}>按</button>
           <p>{userInfo.name}----{console.log(userInfo)}</p>




  
           <input ref={oInput}></input>
           
        </div></UserContext.Provider>
    )
}

export default Home