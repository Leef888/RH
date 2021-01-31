import React from 'react';
import './Home.css';

function Home(props) {

  return (
    <div className="home">
      <header className="header">
        <h1 className="h">Вітаємо! Це інформаційна сторінка,
          яка допоможе Вам швидко ознайомитись з навігацією та вмістом сайту.</h1>
      </header>
      <div className="p_1">
        <h1 className="h">
          <p>
            Ми можемо запропонувати Вам оглянути вибір з пральних машин,
            які були в користуванні, відремонтованих нами на сторінці:
          </p>
          <button className="button" onClick={props.displayPageOne}>Page One</button>
        </h1>
      </div>
      <div className="p_2">
        <h1 className="h">
          <p>
            Якщо Вам потрібно придбати деталі до пральних машин,
            список наявних ви знайдете на сторінці:
          </p>
          <button className="button" onClick={props.displayPageTwo}>Page Two</button>
        </h1>
      </div>
      <div className="p_3">
        <h1 className="h">
          <p>
            Також у нас в майстерні можна привести в працездатний стан іншу побутову техніку.
            Яку саме і номер телефону, потрібного Вам майстра, Ви знайдете на сторінці:
          </p>
          <button className="button" onClick={props.displayContacts}>Contacts</button>
        </h1>
      </div>
      <div className="p_4">
        <h1 className="h">
          Для зручного переходу, на потрібну вам сторінку, використовуйте панель навігації,
          яка знаходиться в верхній частині сайту.</h1>
      </div>
    </div>
  )
}

export default Home;