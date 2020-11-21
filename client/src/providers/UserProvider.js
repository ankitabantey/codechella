import React, { useState, useContext } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'

const initialValue = null // you may change this

const UserContext = React.createContext(initialValue)

const UserContextProvider = ({ children }) => {
    // State to hold the selected theme name
    axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL
    const [user, setUser] = useState(null)
    const [jwt, setJwt] = React.useState(Cookies.get('jwt'))

    const isSignedIn = React.useMemo(() => Boolean(user), [user])

    async function signOut() {
        Cookies.remove('jwt')
        await axios.post(`/logout`)
        window.location.reload()
    }

    async function signIn() {
        window.location.href = `${process.env.REACT_APP_SERVER_URL}auth/twitter`
    }


    React.useEffect(() => {
        axios.defaults.headers.common['Authorization'] = `bearer ${jwt}`;
         if (jwt) {
                axios.get('/getCurrentUser', {headers: {'Authorization': `Bearer ${jwt}`}}).then(res => {
                    if(res) setUser(res.data)
                })
            }
    }, [jwt])

    const value = React.useMemo(() => ({
        signIn,
        signOut,
        user,
        isSignedIn
    }), [user])

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
const useUser = () => useContext(UserContext)

export { useUser, UserContext }
export default UserContextProvider
