import React, { Component } from 'react';
import {Image} from 'react-bootstrap';

//This is the header of the main page when logged in
export default class CustomHeader extends Component {
    
    render() {
        return (

            
            <div>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                </head>
                <div className="header">

                    <div>
                        <Image src="./assets/f4-logo.png" />  
                        <h2 className="name">OCR CONVERTER</h2>
                        <a href="/"><button class="btn"><i class="logoutbtn"></i> Logout</button></a>
                    </div>
                </div>
                <div className="mainImage">
                    <Image src = "./assets/1.png" />

                </div>
               
            </div>    
                    
            

        )
    }

}
    