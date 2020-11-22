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
    Center
} from '@chakra-ui/react'
import { useUser } from '../providers/UserProvider'
import LocationInput from '../components/LocationInput'
import axios from 'axios'

export default function NewEvent() {
    const [event, setEvent] = React.useState({
        name: '',
        description: '',
        hashtags: [],
        location: []
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
    <Center>
    <Button onClick={signIn}>
        Sign In First
    </Button>
    </Center>)
    return (
        <form onSubmit={handleSubmit}>
            <Flex algin='center' justify='center' direction='column' mt='10vh' px='10em'>
                <FormControl id="first-name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input value={event.name} name='name' onChange={e => setEvent({ ...event, name: e.target.value })} placeholder="Codechella" />
                </FormControl>
                <FormControl id="description">
                    <FormLabel>Description</FormLabel>
                    <Input value={event.description} name='description' onChange={e => setEvent({ ...event, description: e.target.value })} placeholder="Best Hackathon ever" />
                </FormControl>
                <FormControl id="hashtags">
                    <FormLabel>Hashtags</FormLabel>
                    <Input value={event.hashtags.join(',')} name='hashtags' onChange={e => setEvent({ ...event, hashtags: e.target.value.replace(' ', '').replace('#', '').split(',') })} placeholder="Codechella,CodechellaMeme" />
                </FormControl>
                <FormControl>
                    <FormLabel isRequired>Location</FormLabel>
                    <LocationInput onComplete={(geocode) => setEvent({ ...event, location: geocode })} />
                </FormControl>
                <Button onClick={handleSubmit} disabled={event.name === '' || event.location === []}>Submit</Button>
                {status === 'loading' &&
                    <Spinner />}
                {status==='done' && <Text>Event Added</Text>}
            </Flex>
        </form>
    )
}
