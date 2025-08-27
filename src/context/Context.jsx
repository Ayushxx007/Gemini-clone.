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

    const deplayPara=(index,nextWord)=>{

      setTimeout(function(){
        setResultData(prev=>prev+nextWord);
      },75*index);

    }


    const onSent=async(prompt)=>{

        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input);
        setPrevPrompt(prev=>[...prev,input]);
        const response=await main(input);
        let responseArray=response.split("**");
        let newResponse="";
        for(let i=0;i<responseArray.length;i++){
          if(i==0 || i%2!==1){

            newResponse+=responseArray[i];

          }else{

              newResponse+="<b>"+responseArray[i]+"</b>";

          }


        }
        let newResponse2=newResponse.replace(/\n/g, "<br/>");
        const newResponseArray=newResponse2.split(" ");
        for(let i=0;i<newResponseArray.length;i++){
          const nextWord=newResponseArray[i];
          deplayPara(i,nextWord+" ");

        }




        //setResultData(newResponse2);
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
