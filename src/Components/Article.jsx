// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../Styles/Article.scss";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
export default function Article() {
  const position = [38.266, 67.9];
  const customIcon = new Icon({
    iconUrl: "Images/location.png",
    iconSize: [40, 40],
    popupAnchor: [-0, -76],
  });
  const [check, setCheck] = useState(false);
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
                {!check ? (
                  <img
                    onClick={() => setCheck(!check)}
                    src="Images/menu.png"
                    alt=""
                  />
                ) : (
                  <img
                    onClick={() => setCheck(!check)}
                    src="Images/Icon (1).png"
                    alt=""
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        {check ? (
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
                <div className="img">
                  {" "}
                  <img src="Images/location.png" alt="" />
                </div>
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
        ) : (
          ""
        )}
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
      <section className="hide">
        <div className="text">
          <p>Улучшим любые условия</p>
          <h1>TANK 500</h1>
          <p>Осталось всего 5 автомобилей!</p>
          <button>Получить предложение</button>
        </div>
      </section>
      <section className="frame">
        <div className="frame-wrapper">
          <div className="time-content">
            <h2>Срок действия спецпредложения:</h2>
            <div className="time">
              <div className="day box">3</div>
              <div className="hours box">13</div>
              <div className="minut box">34</div>
              <div className="second box">12</div>
            </div>
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
                <img src="Images/image 286.png" alt="" />
                <h4>TANK 300</h4>
              </div>
              <div className="card">
                <img src="Images/mage.png" alt="" />
                <h4>TANK 500</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="complect">
        <div className="wrapper">
          <h2>ПОДБЕРИТЕ КОМПЛЕКТАЦИЮ</h2>
          <div className="select-group">
            <div className="card">
              <p>Марка</p>
              <select name="" id="">
                <option value=""></option>
                <option value="">Tanka</option>
                <option value="">Tanka</option>
                <option value="">Tanka</option>
                <option value="">Tanka</option>
              </select>
            </div>
            <div className="card">
              <p>Марка</p>
              <select name="" id="">
                <option value=""></option>
                <option value="">Tanka</option>
                <option value="">Tanka</option>
                <option value="">Tanka</option>
                <option value="">Tanka</option>
              </select>
            </div>

            <div className="card">
              <p>Комплектация</p>
              <select name="" id="">
                <option value=""></option>
                <option value="">Tanka</option>
                <option value="">Tanka</option>
                <option value="">Tanka</option>
                <option value="">Tanka</option>
              </select>
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <div className="img">
                <img src="Images/image1.png" alt="" />
              </div>
              <div className="text">
                <div className="top-text">
                  <h2>TANK 300</h2>
                  <p>2.0 л. Бензин, Полный, Автоматическая</p>
                </div>
                <div className="center-text">
                  <h2>3 649 000 ₽</h2>
                </div>
                <div className="bottom-text">
                  <div className="line-text">
                    <img src="Images/Icon (2).png" alt="" />
                    <p>Выгода по Trade-in до 450 000 ₽</p>
                  </div>
                  <div className="line-text">
                    <img src="Images/Icon (3).png" alt="" />
                    <p>Керамическое покрытие в подарок!</p>
                  </div>
                </div>
              </div>
              <div className="button-group">
                <button>
                  <span>Получить предложение</span>
                  <img src="Images/chevron-right.png" alt="" />
                </button>
                <button>
                  <span>Тест-драйв</span>
                  <img src="Images/chevron-right (1).png" alt="" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src="Images/image1.png" alt="" />
              </div>
              <div className="text">
                <div className="top-text">
                  <h2>TANK 300</h2>
                  <p>2.0 л. Бензин, Полный, Автоматическая</p>
                </div>
                <div className="center-text">
                  <h2>3 649 000 ₽</h2>
                </div>
                <div className="bottom-text">
                  <div className="line-text">
                    <img src="Images/Icon (2).png" alt="" />
                    <p>Выгода по Trade-in до 450 000 ₽</p>
                  </div>
                  <div className="line-text">
                    <img src="Images/Icon (3).png" alt="" />
                    <p>Керамическое покрытие в подарок!</p>
                  </div>
                </div>
              </div>
              <div className="button-group">
                <button>
                  <span>Получить предложение</span>
                  <img src="Images/chevron-right.png" alt="" />
                </button>
                <button>
                  <span>Тест-драйв</span>
                  <img src="Images/chevron-right (1).png" alt="" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src="Images/image1.png" alt="" />
              </div>
              <div className="text">
                <div className="top-text">
                  <h2>TANK 300</h2>
                  <p>2.0 л. Бензин, Полный, Автоматическая</p>
                </div>
                <div className="center-text">
                  <h2>3 649 000 ₽</h2>
                </div>
                <div className="bottom-text">
                  <div className="line-text">
                    <img src="Images/Icon (2).png" alt="" />
                    <p>Выгода по Trade-in до 450 000 ₽</p>
                  </div>
                  <div className="line-text">
                    <img src="Images/Icon (3).png" alt="" />
                    <p>Керамическое покрытие в подарок!</p>
                  </div>
                </div>
              </div>
              <div className="button-group">
                <button>
                  <span>Получить предложение</span>
                  <img src="Images/chevron-right.png" alt="" />
                </button>
                <button>
                  <span>Тест-драйв</span>
                  <img src="Images/chevron-right (1).png" alt="" />
                </button>
              </div>
            </div>
          </div>
          <button className="button">Загрузить еще</button>
          <div className="boxes">
            <div className="img">
              <img src="Images/image 290.png" alt="error" />
            </div>
            <div className="text">
              <h2>ОБМЕН ПО TRADE-IN НА ВЫГОДНЫХ УСЛОВИЯХ</h2>
              <button>
                <span>Отправить заявку</span>
                <img src="Images/chevron-right.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="credit">
        <div className="wrapper">
          <div className="text">
            <h2>Оставьте заявку на кредит</h2>
            <p>и получите одобрение за 1 день!</p>
            <form action="">
              <div className="btn-group">
                <label htmlFor=""></label>
                <input type="number" placeholder="+7(.....)" />
                <button>
                  <span>Отправить заявку</span>
                  <img src="Images/chevron-right.png" alt="" />
                </button>
              </div>
              <input type="checkbox" />
              <label htmlFor="">
                Согласен на обработку персональных данных.
              </label>
            </form>
            <p></p>
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="wrapper">
          <div className="profile">
            <div className="profile-left">
              <h2>Индивидуальное предложение для корпоративных клиентов</h2>
              <button>
                <span>Отправить заявку</span>
                <img src="Images/chevron-right.png" alt="" />
              </button>
            </div>
            <div className="profile-right">
              <div className="img">
                <img src="Images/image 295.png" alt="" />
              </div>
              <div className="text">
                <h2>Татьяна Санникова</h2>
                <p>Отдел корпоративных продаж АВТОРУСЬ</p>
              </div>
            </div>
          </div>
          <div className="maps">
            <div className="map">
              <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Denov A.Navoiy</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={customIcon}>
                  <Popup position={position}>
                    Marhamat joylashuvimiz bilan tanishing!!
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
            <div className="map-detail">
              <div className="cards">
                <div className="card">
                  <p>Адрес</p>
                  <h3>
                    Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)
                  </h3>
                </div>
                <div className="card">
                  <p>Телефон</p>
                  <h3>+7 (999) 999-99-99</h3>
                  <p>Мы на связи</p>
                </div>
                <div className="card">
                  <p>Режим работы</p>
                  <h3>Ежедневно с 09:00 до 21:00</h3>
                </div>
                <div className="card">
                  <button>
                    <span>Заказать звонок</span>
                    <img src="Images/chevron-right.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text">
            <h3>
              Дисклеймеp <span></span>
            </h3>
            <p>
              TANK 300 за 3 799 000руб с учетом поддержек. Цена на модель TANK
              (ТЭНК) 300 в комплектации Adventure (Эдвенчер) с двигателем 2,0T
              4WD, 2023 года производства, цвет автомобиля: белый, с учетом
              выгоды по трейд-ин 300 000 рублей. В трейд-ин принимаются
              автомобили с пробегом со сроком владения и регистрации (постановки
              на учет) в органах ГИБДД не менее 6 месяцев (в отношении
              автомобилей бренда TANK, Haval, Great Wall – 3 месяца) до сдачи
              автомобиля в трейд-ин. В качестве документов, подтверждающих срок
              владения сдаваемого в трейд-ин автомобиля, собственнику необходимо
              предоставить копию ПТС или СТС или карточку учета ТС из ГИБДД с
              печатью и подписью. Подробности уточняйте у менеджеров отдела
              продаж TANK АВТОРУСЬ. Предложение ограничено, не является офертой
              и действует с 01.04.2024г. T
            </p>
            <p>
              TANK 500 за 5 349 000 руб с учетом поддержек. Цена на модель TANK
              (ТЭНК) 500 в комплектации Adventure (Эдвенчер) с двигателем 3,0T
              4WD, 2023 года производства, цвет автомобиля: белый, с учетом
              прямой выгоды в 950 000 рублей. Подробности уточняйте у менеджеров
              отдела продаж TANK АВТОРУСЬ. Предложение ограничено, не является
              офертой и действует с 01.04.2024г.
            </p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="wrapper">
          <div className="top-content">
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
          </div>
          <div className="bottom-content">
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
          <div className="content">
            <p>Официальный дилер</p>
            <h3>ООО А АВТОРУСЬ МЫТИЩИ | ОГРН - 1147746695161, ИНН - 7728881903</h3>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <p>© 2024, АВТОРУСЬ ТАНК</p>
          </div>
          <div className="right">
            <p>Правовая информация</p>
            <p>Условия акции</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
