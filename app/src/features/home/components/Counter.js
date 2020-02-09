import React ,{useState} from 'react';
import {CounterStyle} from '../style/counter';
import CountTo from 'react-count-to';

let listCounter = [
  {countTo: 2730 , title:"Completed Projects"},
  {countTo: 39 , title:"Availble Country"},
  {countTo: 125 , title:"User Worldwide"},
  {countTo: 12 , title:"Award Winner"},

]
export default ({}) => {
  const [timer , setTimer] = useState(0);
  const Counter  = ({from , to}) => {
    setTimer(timer+1);
  }
  return (
    <CounterStyle>
      <div className="container">
        <div className="row">
        {(listCounter || []).map(item=>(
          <div className="col-lg-3">
            <div className="single-box">
              <h2>
                <CountTo  to={item.countTo} speed={1000} />+
              </h2>
              <p>{item.title}</p>
            </div>
          </div>
        ))}

      </div>
      </div>
    </CounterStyle>
  )
}
