import React from 'react';
import s from './News.module.css';

let i = 0;





const Test2 = () => {
    return (<div>GOGOGO</div>)
}

  
        function Test(simple){
            document.getElementById("simple")
            simple.color='red';
        }





const News = (props) => {
    return (<div>
        <div className={s.news} >
            <h1>News {i} </h1>
            <div onClick={i++}>sfs</div> 
        </div>
       
    </div>
    )
}


export default News;