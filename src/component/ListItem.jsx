import React from 'react'

export default function ListItem({text,data,isActive,onShow}) {
    
    function firstWord(text1){
      text1=text1.split("");
      let newText=[];
      for(let i=0;i<text1.length;i++){
        if(text1[i]==="\n"){
          break;
        }
        newText.push(text1[i]);
      }
      text1=newText.join("");
      if(text1.length>28){
        return text1.slice(0, 28)+ "...";
      }
      else return text1;
    }

    function lastWord(text1){
      console.log(text1.length);
      if(text1.length>20){
        return text1.trim().slice(text1.length-20);
      }
      else return text1;
    }
    
    function changeDate(data1){
      data=data1.split(",");
     if (data1.split(",")[0]===new Date().toLocaleString().split(",")[0])  return data1.split(",")[1] ;
     else return data1.split(",")[0];

    }

  return (
    <div className={ isActive ? "listitem active" : "listitem"} onClick={onShow}>
        <h5>{firstWord(text)}</h5>
        <div className="footer_item">
          <div className="time_item">{changeDate(data)}</div>
          <div className="text_item">{lastWord(text)}</div>
        </div>
    </div>
  )
}
