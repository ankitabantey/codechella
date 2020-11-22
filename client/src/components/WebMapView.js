import React from 'react';
import { loadModules } from 'esri-loader';
import './components.css'; 
import { Box, Flex, Spacer } from "@chakra-ui/react"

export class WebMapView extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    // lazy load the required ArcGIS API for JavaScript modules and CSS
    loadModules(['esri/Map', 'esri/views/MapView', 'esri/Graphic', 'esri/layers/GraphicsLayer', "esri/geometry/Point"], { css: true })
    .then(([ArcGISMap, MapView, Graphic, GraphicsLayer, Point]) => {
      const map = new ArcGISMap({
        basemap: 'gray-vector'
      });

      this.view = new MapView({
        container: this.mapRef.current,
        map: map,
        center: [-118, 34],
        zoom: 8
      });

      var graphicsLayer = new GraphicsLayer();
       map.add(graphicsLayer);

       var point = {
        type: "point",
        longitude: -118.80657463861,
        latitude: 34.0005930608889
      };

      var simpleMarkerSymbol = {
        type: "simple-marker",
        color: [226, 119, 40],  // orange
        outline: {
          color: [255, 255, 255], // white
          width: 1
        }
      };

      var pointGraphic = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol
      });

      graphicsLayer.add(pointGraphic);
      
      var coord = [[32.7767, 96.7970]]
      if (this.props.geocodes != null){
      coord = this.props.geocodes;
      }
      if (coord != null){
      coord.forEach(myFunction);
        function myFunction(item) {
        //console.log(item[coord.indexOf(item)][0]);
        //console.log(item[coord.indexOf(item)][1]);
        console.log(coord);
        var p = new Point(item[0][0], item[1][1]);
        var g = new Graphic(p);
        graphicsLayer.add(g);
        }
      }
      console.log(coord);

    });
  }

  componentWillUnmount() {
    if (this.view) {
      // destroy the map view
      this.view.destroy();
    }
  }

  render() {
    return (
        // if you want to revert to old css styling, change webmapChakra to webmap
        <Box className="fullsize" ref={this.mapRef}></Box>

    );
  }
}