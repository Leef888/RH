import React from 'react';
import './Home.css';

function Home(props) {

    return (
        <div className="Home">
            <div>HOME</div>
            <header>
                <h1 className="h">Вітаємо Вас на сайті ремонту стіральних машин!</h1>
            </header>
            <div>
                <p className="p">Ми можемо запропонувати Вам оглянути вибір з стіральних машин, які були в користуванні, відремонтованих нами на сторінці: <button onClick={props.displayStLots}>StLots</button>.</p>                
            </div>
            <div>
                <p className="p">Якщо Вам потрібно придбати деталі до стіральних машин, список наявних ви знайдете на сторінці: <button onClick={props.displayDetLots}>DetLots</button>.</p>
            </div>
            <div>
                <p className="p">Також у нас в майстерні можна привести в працездатний стан іншу побутову техніку. Яку саме і номер телефону, потрібного Вам майстра, Ви знайдете на сторінці: <button onClick={props.displayContacts}>Contacts</button>.</p>
            </div>
            <div>
                <p className="p">Для зручного переходу, на потрібну вам сторінку, використовуйте панель навігації, яка знаходиться в верхній частині сайту.</p>
            </div>
        </div>
    )
}

export default Home;