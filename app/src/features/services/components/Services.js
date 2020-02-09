import React from 'react';
import {ServiceStyle} from '../style/services';

const listServices = [
    {title:"Service Offering", descr:"Professional IT services by our expert",img:require('../../../assets/img/services/icon/diamond.svg')},
    {title:"Business Services", descr:"Complete Business solution global organisations",img:require('../../../assets/img/services/icon/pie-chart.svg')},
    {title:"Technical Service", descr:"Managed company services and solutions",img:require('../../../assets/img/services/icon/notepad.svg')},
    {title:"Contan Creation", descr:"We have expert to create online cantant",img:require('../../../assets/img/services/icon/draw.svg')},
    {title:"Design & Devlopment", descr:"Provide all kind of design & development Services",img:require('../../../assets/img/services/icon/graphic.svg')},
    {title:"SEO & SMM", descr:"Boost your website traffice by using our tools",img:require('../../../assets/img/services/icon/data.svg')},



]
export default()=>{
    return(
        <ServiceStyle> 
            <div className="container">
<div className="row">
<h2>We provide wide range of business services.</h2>

</div>
                <div className="row">
                {(listServices || []).map(service=>(
                    <div className="col-md-4 service-item">
                        <img src={service.img} alt="" />
                        <p>{service.title}</p>
                        <h6>{service.descr}</h6>
                    </div>
                ) 
                )}
                </div>
            </div>
            
        </ServiceStyle>
    )
}