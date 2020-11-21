
export default (req, res) => {
    res.cookie('jwt',{}, {maxAge:-1})
    res.sendStatus(200)
}