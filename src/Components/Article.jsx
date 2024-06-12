// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../Styles/Article.scss";

export default function Article() {
  const [check, setCheck]= useState(false);
  return (
    <div>
      <header className="header">
        <div className="header-wrapper">
          <div className="left-content">
            <img src="Images/logo.png" alt="Error" />
          </div>
          <div className="right-content">
            <div className="top-content">
              <div className="box-left">
                <img src="Images/location.png" alt="" />
                <p>Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)</p>
              </div>
              <div className="box-right">
                <div className="box-content">
                  <img src="Images/settings.png" alt="" />
                  <h3>Записаться на сервис</h3>
                </div>
                <div className="box-content">
                  <img src="Images/settings.png" alt="" />
                  <h3>Тест-драйв</h3>
                </div>
              </div>
            </div>
            <div className="bottom-content">
              <div className="left-content">
                <h2>АВТОРУСЬ TANK</h2>
                <p>Официальный дилер</p>
              </div>
              <div className="right-content">
                <div className="number">
                  <h3>+7 (999) 999-99-99</h3>
                  <p> Мы на связи</p>
                </div>
                <div className="button">
                  <button>
                    <img src="Images/Icon.png" alt="" />
                    <span>Заказать звонок</span>
                  </button>
                </div>
              </div>
              <div className="hide">
                <img src="Images/phone.png" alt="" />
                {check?(<img onClick={setCheck(!check)} src="Images/Icon (1).png" alt="" />):( <img onClick={setCheck(!check)} src="Images/menu.png" alt="" />)}
               
                

              </div>
            </div>
          </div>
        </div>
        <div className="mobile-menu">
          <div className="menu">
          <div className="tank">
            <h2>АВТОРУСЬ TANK</h2>
            <p>Официальный дилер</p>
          </div>
          <div className="number">
            <h3>+7 (999) 999-99-99</h3>
            <p> Мы на связи</p>
          </div>
          <div className="location">
           <div className="img"> <img src="Images/location.png" alt="" /></div>
            <p>Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)</p>
          </div>
          <div className="bottom">
          <div className="button">
            <button>
              <img src="Images/Icon.png" alt="" />
              <span>Заказать звонок</span>
            </button>
          </div>
            <div className="service">
              <img src="Images/settings.png" alt="" />
              <h3>Записаться на сервис</h3>
            </div>
            <div className="test">
                  <img src="Images/settings.png" alt="" />
                  <h3>Тест-драйв</h3>
                </div>
          </div>
          </div>
         
        </div>
      </header>
      <section className="main">
        <div className="main-wrapper">
          <div className="text">
            <p>Улучшим любые условия</p>
            <h1>TANK 500</h1>
            <p>Осталось всего 5 автомобилей!</p>
            <button>Получить предложение</button>
          </div>
        </div>
      </section>
      <section className="frame">
        <div className="frame-wrapper">
          <div className="time-content">
            <h2>Срок действия спецпредложения:</h2>
            <div className="time"></div>
            <button>Узнать цену с выгодами</button>
          </div>
          <div className="cards">
            <div className="card">
              <div className="img">
                <img src="Images/award-03.png" alt="Error" />
              </div>
              <div className="text">
                <h3>Официальный дилер</h3>
                <p>Гарантируем высокое качество обслуживания.</p>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src="Images/award-03.png" alt="Error" />
              </div>
              <div className="text">
                <h3>ПОКУПКА АВТО ЗА 1 ДЕНЬ</h3>
                <p>
                  Удобный процесс покупки, включая оформление всех документов.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src="Images/award-03.png" alt="Error" />
              </div>
              <div className="text">
                <h3>ВСЕ КОМПЛЕКТАЦИИ В НАЛИЧИИ</h3>
                <p>Широкий выбор комплектаций, с полным пакетом документов.</p>
              </div>
            </div>
          </div>
          <div className="car-details">
            <h2>
              ЗАБРОНИРУЙТЕ Автомобиль СЕГОДНЯ И ПОЛУЧИТЕ ДОПОЛНИТЕЛЬНУЮ ВЫГОДУ
              100 000 ₽
            </h2>
            <div className="cars-cards">
              <div className="card">
                <img src="" alt="" />
                <h4>TANK 300</h4>
              </div>
              <div className="card">
                <img src="" alt="" />
                <h4>TANK 500</h4>
              </div>
              <div>
                <img src="Images/settings.png" alt="" />
                <h3>Тест-драйв</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
