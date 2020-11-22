import React from 'react';
import { loadModules } from 'esri-loader';
import './components.css'; 
import { Box, Flex, Spacer, AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
 useDisclosure, AlertDialogCloseButton, FormControl,
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
NumberDecrementStepper } from "@chakra-ui/react";
import { useUser } from '../providers/UserProvider'
import LocationInput from '../components/LocationInput'
import axios from 'axios'

export function CreateEvent() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

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
    Sign In to Create Event
</Button>
</Center>
</Box>)
return (
    

    <>
      <Button class="twitterButton" onClick={onOpen}>Create Event</Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Create an Event</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
          <form onSubmit={onClose}>
          <FormControl id="first-name" isRequired>
                    <FormLabel>Event Name</FormLabel>
                    <Input value={event.name} name='name' onChange={e => setEvent({ ...event, name: e.target.value })} placeholder="Codechella" />
                </FormControl>
                <FormControl id="description">
                    <FormLabel>Event Description</FormLabel>
                    <Input value={event.description} name='description' onChange={e => setEvent({ ...event, description: e.target.value })} placeholder="Best Hackathon ever" />
                </FormControl>
                <FormControl id="date" isRequired>
                    <FormLabel>Date and Time</FormLabel>
                    <Input value={event.date} name='date' onChange={e => setEvent({ ...event, date: e.target.value })} placeholder="November 19, 2020 at 7:00 PM" />
                </FormControl>
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
                    <FormLabel isRequired>Where are you hosting this event?</FormLabel>
                    <LocationInput onComplete={(geocode) => setEvent({ ...event, location: geocode })} />
                </FormControl>
                <Button onClick={handleSubmit} disabled={event.name === '' || event.location === []}>Submit</Button>
                </form>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default CreateEvent;