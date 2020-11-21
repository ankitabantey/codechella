import { loadModules } from 'esri-loader';
import { WebMapView } from '../components/WebMapView';


import { extendTheme } from "@chakra-ui/react"

export default function Home() {
   

    return (
        <div>
            <WebMapView/>
        </div>
    )
}