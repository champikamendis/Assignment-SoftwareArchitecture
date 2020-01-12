import React, { Component } from 'react';
import axios from 'axios';
import Download from './Download';
import CustomHeader from './CustomHeader';


export default class FileUploader extends Component {
        state={
        selectedFile:null,
        imageUrl:null,
        textConverted:null
      }
  
      fileSelectedHandler = event => {
        this.setState({
          imageUrl:URL.createObjectURL(event.target.files[0]),
          selectedFile: event.target.files[0]
    
        })
      } 
      fileUploadHandler = () => {
        
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        axios.post('http://localhost:8000/upload', fd, {
          onUploadProgress : ProgressEvent => {
            console.log('Upload Progress: ' + Math.round(ProgressEvent.loaded / ProgressEvent.total*100) + '%')
          }
        })
          .then(res => {
            console.log(res);
            this.setState({
              ...this.state,
              textConverted:res.data.result
            })
            
            
        }).catch(err=>console.error(err.message))
      }
    render() { 
        return ( 
            <div>
              <head>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
              </head>
            
                  <CustomHeader />          
                  <Download />
                  <container className="imageHolder">
                      <input type='file' className="input" onChange={this.fileSelectedHandler} />
                      
                      <br/>
                      <br/>
                      <img className="uploadedImage" src={this.state.imageUrl ?this.state.imageUrl : 'https://via.placeholder.com/400x400'}  />
                  </container>
                  <button className="uploader" onClick={this.fileUploadHandler}>START OCR</button>
                  <container className="textHolder">
                      <textarea rows="16" cols="50" className="txtfield" value={this.state.textConverted} />
                      <br/>
                  </container>
            </div>
        )
    }
};
