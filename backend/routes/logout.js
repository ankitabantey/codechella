
export default (req, res) => {
    console.log('logout')
    res.cookie('jwt',{}, {maxAge:-1})
    res.sendStatus(200)
}