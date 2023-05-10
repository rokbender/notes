import React, { useContext } from 'react'
import { ObjContext } from '../context/cont';

export default function WorkSpace() {
    const {ArrObj,changeArr,idSelect}=useContext(ObjContext);

    function editArrObj(e){
        changeArr(ArrObj.map(item=> {
            if (item.id===idSelect) {
                item.text=e.target.value;
                item.data=new Date().toLocaleString();
            } 
            return item;
        }));
    }
    return (
        <div className="workSpace">
            <div className="last_time_update">{ ArrObj.find(item=>item.id===idSelect)?.data}</div>
            <textarea
            className="work_text"
            value={
                (idSelect!==-1) ? ArrObj.find(item=>item.id===idSelect)?.text : ""
            }
             defaultValue={"Тут може бути ваша перша нотатка"}
            onChange={e=>editArrObj(e)}
            />
      </div>
      )
}
