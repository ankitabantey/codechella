import { loadModules } from 'esri-loader';
import { WebMapView } from '../components/WebMapView';
import { Grid, GridItem, Box, Flex, Spacer } from "@chakra-ui/react"
import { Spinner } from '@chakra-ui/react'
import axios from 'axios'
import React, {useContext} from 'react'
import TweetList from '../components/TweetList'
import EventInfo from '../components/EventInfo'
import EventProvider, {EventContext} from '../providers/EventProvider.js';


export default function Home() {

    const eventContext = useContext(EventContext);

    const [events, setEvents] = React.useState(null);
    const [selectedEvent, setSelectedEvent] = React.useState(null);

    async function getEvents() {
        const res = await axios.get('/getEvents')
        setEvents(res.data.events)
    }

    React.useEffect(() => {

        getEvents()

    }, [])

    if (!events) return <Spinner />



    return (

        <Box p={10}>
            <Flex>
                <Box w='20vw' h='100vh' bg='ghostWhite' mr='10px'>
                    stuff
                </Box>
                <Grid
                    h="100vh"
                    w='80vw'
                    templateRows="repeat(10, 1fr)"
                    templateColumns="repeat(8, 1fr)"
                    gap={4}
                >
                    <GridItem rowSpan={5} colSpan={6} bg="GhostWhite">
                        <WebMapView geocodes={events.map(event => event.location)} />
                    </GridItem>
                    <GridItem rowSpan={10} colSpan={2} bg="ghostWhite">
                        <EventInfo />
                    </GridItem>
                    <GridItem rowSpan={5} colSpan={6}>
                        <TweetList events={events} onEventSelect={(event) => eventContext.selectEvent(event)}/>
                    </GridItem>
                </Grid>
            </Flex>
        </Box>


    )
}