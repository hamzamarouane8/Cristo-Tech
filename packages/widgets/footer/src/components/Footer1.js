import React from 'react'
import {styled} from '@ctkit/theme'

export default ({brand, contact, address, copyright}) => {

  return (
    <Footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="footer-logo">
                <a href="index.html"><img src={null} alt="Logo" /></a>
                <h5><a href="#" className="tran3s">gulluinc@gmail.com</a></h5>
                <h6 className="p-color">202. 277. 3894</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 footer-list">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#" className="tran3s">How it Works</a></li>
                <li><a href="#" className="tran3s">Guarantee</a></li>
                <li><a href="#" className="tran3s">Security</a></li>
                <li><a href="#" className="tran3s">Report Bug</a></li>
                <li><a href="#" className="tran3s">Pricing</a></li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 footer-list">
              <h4>About Us</h4>
              <ul>
                <li><a href="#" className="tran3s">About Singleton</a></li>
                <li><a href="#" className="tran3s">Jobs</a></li>
                <li><a href="#" className="tran3s">Team</a></li>
                <li><a href="#" className="tran3s">Testimonials</a></li>
                <li><a href="#" className="tran3s">Blog</a></li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 footer-subscribe">
              <h4>Subscribe Us</h4>
              <form action="#">
                <input type="text" placeholder="Enter your mail" />
              </form>
              <ul>
                <li><a href="" className="tran3s"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="" className="tran3s"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="" className="tran3s"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
                <li><a href="" className="tran3s"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>

          <div className="bottom-footer clearfix">
            <ul className="float-right">
              <li><h3><span className="timer p-color" data-from="0" data-to="8997" data-speed="5000"
                            data-refresh-interval="50">0</span> Products</h3></li>
              <li><h3><span className="timer p-color" data-from="0" data-to="53701" data-speed="5000"
                            data-refresh-interval="50">0</span> Members</h3></li>
              <li><h3><span className="timer p-color" data-from="0" data-to="1110" data-speed="5000"
                            data-refresh-interval="50">0</span> Shops</h3></li>
            </ul>
            <p className="float-left">&copy; 2017 <a href="#" className="tran3s p-color">CreativeGigs</a>. All rights
              reserved</p>
          </div>
        </div>
    </Footer>
  )
}

const Footer = styled.footer`
  padding: 5em 0;
  margin-top: 4em;
  border-top: 1px solid #E8E9EF;
  background: #FFF;
  font-size: 0.85rem;
  color: #7677778;
`
