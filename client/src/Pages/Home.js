import { loadModules } from 'esri-loader';
import { WebMapView } from '../components/WebMapView';
import { Box, Flex, Spacer } from "@chakra-ui/react"

import { extendTheme } from "@chakra-ui/react"

export default function Home() {
   

    return (
        
        <Box pt={10} paddingLeft={10} paddingRight={10}>
            <Flex>
                <Box w="700px" h="300px" bg="red.500">Mutual Aid</Box>
                <Spacer />
                <WebMapView />
            </Flex>
        </Box>
        
             
    )
}