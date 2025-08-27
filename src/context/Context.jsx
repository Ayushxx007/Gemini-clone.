import { createContext,useState } from "react";
import main from "../config/gemini.js";;

export const Context = createContext(null);

export default function ContextProvider({ children }) {

    const [input,setInput]=useState("");
    const [recentPrompt,setRecentPrompt]=useState("");
    const [prevPrompt,setPrevPrompt]=useState([]);
    const [showResult,setShowResult]=useState(false);
    const [loading,setLoading]=useState(false);
    const[resultData,setResultData]=useState("");


    const onSent=async(prompt)=>{

        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input);
        const response=await main(input);
        setResultData(response);
        setLoading(false);
        setInput("");
    }
 


  const contextValue = {
    onSent,input,setInput,recentPrompt,
    setRecentPrompt,prevPrompt,setPrevPrompt,
    showResult,setShowResult,loading,setLoading,
    resultData,setResultData
    

  } 

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}
