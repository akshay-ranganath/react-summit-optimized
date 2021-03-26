import React, { Component } from "react";


class ProductGalleryClass extends Component {
  myGallery= window.cloudinary.galleryWidget({
    container: "#my-gallery",
    cloudName: "dbmataac4",    
    imageBreakpoint: 200 ,
    dpr: 1 ,
    mediaAssets: [
      // by default mediaType: "image"
      {tag: "sku001", mediaType: "video"},  
      {tag: "sku001"},      
    ]        
  });
  
  
  
  componentDidMount() {
    this.myGallery.render();
  }
  render() {
    return (
      <>
        <div id="my-gallery"></div>
      </>
    );
  }
}
export default ProductGalleryClass;