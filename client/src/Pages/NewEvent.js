import React from 'react'
import {
    Box, Flex, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Spinner,
    Text,
    Center, Checkbox, NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper
} from '@chakra-ui/react'
import { useUser } from '../providers/UserProvider'
import LocationInput from '../components/LocationInput'
import axios from 'axios'

export default function NewEvent() {
    const [event, setEvent] = React.useState({
        name: '',
        description: '',
        hashtags: [],
        location: [],
        virtual: true,
        url: '',
        date: '',
        time: ''
    })

    async function handleSubmit() {
        setStatus('loading')
        await axios.post('/createEvent', { ...event, ownerID: user.twitterHandle, owner: user.name })
        setStatus('done')
    }

    const [location, setLocation] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [status, setStatus] = React.useState(null)
    const { user, signIn } = useUser()
    console.log(user)

    if(user===null) return(
    <Box p={30}>
    <Center h="100%">
    <Button onClick={signIn}>
        Sign In First
    </Button>
    </Center>
    </Box>)
    return (
        <form onSubmit={handleSubmit}>
            <Flex algin='center' justify='center' direction='column' mt='10vh' px='10em'>
                <FormControl id="first-name" isRequired>
                    <FormLabel>Event Name</FormLabel>
                    <Input value={event.name} name='name' onChange={e => setEvent({ ...event, name: e.target.value })} placeholder="Codechella" />
                </FormControl>
                <FormControl id="description">
                    <FormLabel>Event Description</FormLabel>
                    <Input value={event.description} name='description' onChange={e => setEvent({ ...event, description: e.target.value })} placeholder="Best Hackathon ever" />
                </FormControl>
                <FormControl id="date">
                    <FormLabel>Date?</FormLabel>
                    <Input value={event.date} name='date' onChange={e => setEvent({ ...event, date: e.target.value })} placeholder="November 19, 2020" />
                </FormControl>
                <FormControl id="time">
                    <FormLabel>Time?</FormLabel>
                    <Input value={event.time} name='time' onChange={e => setEvent({ ...event, time: e.target.value })} placeholder="6:00 PM" />
                </FormControl >
                <FormControl id="hashtags" isRequired>
                    <FormLabel>What hashtags are associated with this event?</FormLabel>
                    <Input value={event.hashtags.join(',')} name='hashtags' onChange={e => setEvent({ ...event, hashtags: e.target.value.replace(' ', '').replace('#', '').split(',') })} placeholder="Codechella, CodechellaMeme" />
                </FormControl>
                
                <FormControl>
                    <FormLabel isRequired>Is this event virtual?</FormLabel>
                    <Checkbox value={event.virtual} id="virtual" defaultIsChecked onChange={e => setEvent({ ...event, virtual: e.target.value })}></Checkbox>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel isRequired>What's the URL for this event?</FormLabel>
                    <Input value={event.url} name='url' onChange={e => setEvent({ ...event, url: e.target.value })} placeholder="twitter.com" />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel isRequired>New York, NY</FormLabel>
                    <LocationInput onComplete={(geocode) => setEvent({ ...event, location: geocode })} />
                </FormControl>
                <Button p={10} onClick={handleSubmit} disabled={event.name === '' || event.location === []}>Submit</Button>
                {status === 'loading' &&
                    <Spinner />}
                {status==='done' && <Text>Event Added</Text>}
            </Flex>
        </form>
    )
}
