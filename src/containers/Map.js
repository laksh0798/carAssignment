import React, { Component } from 'react';
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      <div className="mapcontainer">
      <div style={{ width: '100%' }}>
                  <div class="s-12 grayscale center">  	  
                  <iframe  id="gmap_canvas" src="https://maps.google.com/maps?q=mumabi&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="location"></iframe>
          </div>
      </div>
      </div>
    );
  }
}
 
export default SimpleMap;
