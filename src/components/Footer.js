import React, { Component } from 'react'
import '../Styles/Footer.css';
import "../Styles/Footer-responsive.css"
 import { IconMail, IconPhoneCall } from "@tabler/icons-react";
export default class Footer extends Component {
  render() {
    return (
            <>
              <footer className='Footer' id='Contact'>
                <div className="container-none">
                  <div className="footer-content d-flex">
                    <ul className="footer-content__1 footer-content-box">
                      <li>
                        <span>CAR</span> Rental
                      </li>
                      <li>
                        We offers a big range of vehicles for all your driving needs. We
                        have the perfect car to meet your needs.
                      </li>
                      <li>
                        <a href="tel:123456789">
                          <IconPhoneCall /> &nbsp; 0900-78601
                        </a>
                      </li>
        
                      <li>
                        <a
                          href="mailto: 
                        carrental@gmail.com"
                        >
                          <IconMail />
                          &nbsp; RentACar@gmail.com
                        </a>
                      </li>
        
                      <li>
                        <a
                          style={{ fontSize: "14px" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://xpeedstudio.com/"
                        >
                          Design by MominStudios
                        </a>
                      </li>
                    </ul>
        
                    <ul className="footer-content__2 footer-content-box">
                      <li>Company</li>
                      <li>
                        <a href="#home">New York</a>
                      </li>
                      <li>
                        <a href="#home">Careers</a>
                      </li>
                      <li>
                        <a href="#home">Mobile</a>
                      </li>
                      <li>
                        <a href="#home">Blog</a>
                      </li>
                      <li>
                        <a href="#home">How we work</a>
                      </li>
                    </ul>
        
                    <ul className="footer-content__2 footer-content-box">
                      <li>Working Hours</li>
                      <li>Mon - Fri: 9:00AM - 9:00PM</li>
                      <li>Sat: 9:00AM - 19:00PM</li>
                      <li>Sun: Closed</li>
                    </ul>
        
                    <ul className="footer-content__2 footer-content__4 footer-content-box">
                      <li>Subscription</li>
                      <li>
                        <p>Subscribe your Email address for latest news & updates.</p>
                      </li>
                      <li>
                        <input type="email" placeholder="Enter Email Address"></input>
                      </li>
                      <li>
                        <button className="submit-email">Submit</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </footer>
            </>
          );
        }
    }
