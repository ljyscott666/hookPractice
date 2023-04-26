import React,{ createContext,  forwardRef,  useRef} from "react";
import Home from "./Home";
import Main from "./Main";


   const ForwardHome =  forwardRef(Home)

function App() {

  const oHome = useRef()

  function BClick() {
   
    oHome.current.setValue()
  }

  
    return(
        <div>
      <UserContext.Provider value={{'name':'syy','age':18}}>
         <ForwardHome ref={oHome}></ForwardHome>
          <button onClick={()=>{BClick()}}>8888</button>
         </UserContext.Provider>
          <Main></Main>
        </div>
    )
}


export const UserContext = createContext({'name':'syy','age':18});
export default App