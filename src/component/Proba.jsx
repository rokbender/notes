import React, { useContext } from 'react'
import { ObjContext } from '../context/cont'

export default function Proba() {
    const fig =useContext(ObjContext);
    function handleClick(){
        console.log(fig);
    }

  return (
       <>
  <header className="header">
    <div className="button_list">
      <button className="button btn_active" onClick={handleClick}>
        <img src='./img/add.png' alt="" />
      </button>
      <button className="button">
        <img src="./img/basket.png" alt="" />
      </button>
      <button className="button">
        <img src="./img/edit.png" alt="" />
      </button>
    </div>
    <div className="searchBox">
      <input type="text" placeholder="Пошук" />
    </div>
  </header>
  <div className="main">
    <div className="sideBar none">
      <div className="listitem active">
        <h5>Заголовок бла...</h5>
        <div className="footer_item">
          <div className="time_item">12:17 PM</div>
          <div className="text_item">This is amazing</div>
        </div>
      </div>
      <div className="listitem">
        <h5>Заголовок бла...</h5>
        <div className="footer_item">
          <div className="time_item">12:17 PM</div>
          <div className="text_item">This is amazing</div>
        </div>
      </div>
      <div className="listitem ">
        <h5>Заголовок бла...</h5>
        <div className="footer_item">
          <div className="time_item">12:17 PM</div>
          <div className="text_item">This is amazing</div>
        </div>
      </div>
      <div className="listitem">
        <h5>Заголовок бла...</h5>
        <div className="footer_item">
          <div className="time_item">12:17 PM</div>
          <div className="text_item">This is amazing</div>
        </div>
      </div>
      <div className="listitem ">
        <h5>Заголовок бла...</h5>
        <div className="footer_item">
          <div className="time_item">12:17 PM</div>
          <div className="text_item">This is amazing</div>
        </div>
      </div>
      <div className="listitem">
        <h5>Заголовок бла...</h5>
        <div className="footer_item">
          <div className="time_item">12:17 PM</div>
          <div className="text_item">This is amazing</div>
        </div>
      </div>
      <div className="listitem ">
        <h5>Заголовок бла...</h5>
        <div className="footer_item">
          <div className="time_item">12:17 PM</div>
          <div className="text_item">This is amazing</div>
        </div>
      </div>
      <div className="listitem">
        <h5>Заголовок бла...</h5>
        <div className="footer_item">
          <div className="time_item">12:17 PM</div>
          <div className="text_item">This is amazing</div>
        </div>
      </div>
      <div className="listitem">
        <h5>Заголовок бла...</h5>
        <div className="footer_item">
          <div className="time_item">12:17 PM</div>
          <div className="text_item">This is amazing</div>
        </div>
      </div>
      <div className="listitem ">
        <h5>Заголовок бла...</h5>
        <div className="footer_item">
          <div className="time_item">12:17 PM</div>
          <div className="text_item">This is amazing</div>
        </div>
      </div>
      <div className="listitem">
        <h5>Заголовок бла...</h5>
        <div className="footer_item">
          <div className="time_item">12:17 PM</div>
          <div className="text_item">This is amazing</div>
        </div>
      </div>
      <div className="listitem">
        <h5>Заголовок бла...</h5>
        <div className="footer_item">
          <div className="time_item">12:17 PM</div>
          <div className="text_item">This is amazing</div>
        </div>
      </div>
    </div>
    <div className="workSpace">
      <div className="last_time_update">May 10, 2022 at 23:41</div>
      <textarea
        className="work_text"
        defaultValue={
          "Hello Andrii\nIts program amazing.How this program work?why you create this program.\nGoodbye"
        }
      />
    </div>
  </div>
</>
  )
}
