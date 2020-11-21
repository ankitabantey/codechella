import React from 'react'
import { loadModules } from 'esri-loader';
import ReactDOM from 'react-dom';
import { WebMapView } from '../components/WebMapView';
import { ChakraProvider } from '@chakra-ui/react'


import { extendTheme } from "@chakra-ui/react"

export default function Home() {
   
    /*Map code starts*/
    ReactDOM.render(
        <WebMapView />,
       document.getElementById('root'),
   );
    /*Map code ends*/
    return (
        <div>
            {/*Map code below}
            <div id="map">
                <h1> Map </h1>
            </div>
            {/*Put other stuff here*/}
        </div>
    )
}