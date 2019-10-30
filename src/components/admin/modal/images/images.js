import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './images.css'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <CloudinaryContext cloudName="gtmori">
        <div className="image-card">
          <img src="/images/close-icon.png" className="image-delete" onClick={() => this.props.removeImage(this.props.image.public_id)}/>
          <Image publicId={this.props.image.public_id} width="100%" />
        </div>
      </CloudinaryContext>
    )
  }
  }

export default ImageUpload;