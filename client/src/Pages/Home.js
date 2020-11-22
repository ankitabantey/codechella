import { loadModules } from 'esri-loader';
import { WebMapView } from '../components/WebMapView';
import { Grid, GridItem, Box, Flex, Spacer } from "@chakra-ui/react"

import { extendTheme } from "@chakra-ui/react"
import { HashtagDisplay } from '../components/HashtagDisplay';

export default function Home() {
   

    return (

    
        
        <Box p={10}>
            <Grid
            h="100vh"
            templateRows="repeat(10, 1fr)"
            templateColumns="repeat(6, 1fr)"
            gap={4}
             >
                <GridItem rowSpan={5} colSpan={3} bg="GhostWhite">
                    <HashtagDisplay />
                </GridItem>
                <GridItem rowSpan={1} colSpan={3} bg="GhostWhite">
                    Search
                </GridItem>
                <GridItem rowSpan={4} colSpan={3} bg="white">
                    <WebMapView /> 
                </GridItem>
                <GridItem rowSpan={5} colSpan={4} bg="GhostWhite">
                    Recent Tweets
                </GridItem>
                <GridItem rowSpan={5} colSpan={2} bg="GhostWhite">
                    Trending
                </GridItem>
             </Grid>
        </Box>
        
             
    )
}