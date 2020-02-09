import React from 'react';
import {HeaderStyle , ContainerWhatWeDo} from '../style/secondHeader';

let list = [{
  icon: require('../../../assets/img/home/icons/notepad.svg'),
  title: "Financial Advise",
  descr: "Market Statics Growth & Advance Analysis"
},
  {
    icon: require('../../../assets/img/home/icons/bar-chart.svg'),
    title: "Financial Advise",
    descr: "Market Statics Growth & Advance Analysis"
  },
  {
    icon: require('../../../assets/img/home/icons/diamond.svg'),
    title: "Financial Advise",
    descr: "Market Statics Growth & Advance Analysis"
  },
]

export default ({}) => {
  return (<ContainerWhatWeDo className="container-what-we-do">
    <h3>The thing that motivates me is a very common form of motivation. And that is, with other folk counting on me,
      it's so easy to be motivated.</h3>
    <h6>we work with business & provide solution to client with their business problem
    </h6>
    <div className="row">
      {(list || []).map(header => (
        <HeaderItem content={header}/>
      ))}
    </div>
  </ContainerWhatWeDo>);
}

const HeaderItem = ({content}) => {
  return (
    <HeaderStyle color={content.color} className="col-md-4">
      <div className="single-block">
        <div className="block-icon">
          <img src={content.icon} alt=""/>
        </div>
        <h6>{content.title}</h6>
        <h5><a>{content.descr}</a></h5>
      </div>
    </HeaderStyle>
  )
}


