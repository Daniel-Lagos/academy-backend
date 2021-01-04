const createUser = (req, res) => {
    console.log('Holis personis')
    return res.json({
        hello: "Hello word",
        age: 20
    })
}

module.exports = {
    createUser
}