
const signup_get = async (req, res) => {
    res.send('signup')
}

const signup_post = async (req, res) => {
    res.send(' new signup')
}

const login_get = async (req, res) => {
    res.send('login')
}

const login_post = async (req, res) => {
    res.send(' new login')
}








module.exports = {
    signup_get,
    signup_post,
    login_get,
    login_post
}