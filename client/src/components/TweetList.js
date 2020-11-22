import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, IconButton  } from "@chakra-ui/react"
import TweetEmbed from 'react-tweet-embed'
import { ArrowLeftIcon, ArrowRightIcon,} from '@chakra-ui/icons'



export default function TweetList({ events, onEventSelect={onEventSelect} }) {
    if (events.name == "Silence Sam") {
        console.log("no tweets");
        return (

            <Flex direction="column">
                <Tabs variant="enclosed">
                    <TabList>
                        {events.map(event => <Tab onClick={() => onEventSelect(event)} key={event.id}>{event.name}</Tab>)}
                    </TabList>
    
                    <TabPanels>
                        {events.map(event =>
                            <TabPanel key={event.id}>
                                
                            </TabPanel>)}
                    </TabPanels>
                </Tabs>
            </Flex>
        );

    } else {
    return (

        <Flex direction="column">
            <Tabs variant="enclosed">
                <TabList>
                    {events.map(event => <Tab onClick={() => onEventSelect(event)} key={event.id}>{event.name}</Tab>)}
                </TabList>

                <TabPanels>
                    {events.map(event =>
                        <TabPanel key={event.id}>
                            <Tweets tweets={event.tweets} />
                        </TabPanel>)}
                </TabPanels>
            </Tabs>
        </Flex>

    )
}}


function Tweets({ tweets }) {
    const [index, setIndex] = React.useState(0)
    return (
        <Flex direction='column'>
            <Flex direction='row' w='30vw' justify='space-between'>
                <IconButton colorScheme='blue' onClick={() => setIndex(Math.max(0, index - 1))} icon={<ArrowLeftIcon/>}  variant='outline'/>
                <IconButton onClick={() => setIndex(Math.min(tweets.length, index + 1))} icon={<ArrowRightIcon/>} colorScheme='blue' variant='outline'/>
            </Flex>
            <TweetEmbed style={{ width: '100vw' }} id={tweets[index].id_str} key={tweets[index].id} />
        </Flex>
    )
}