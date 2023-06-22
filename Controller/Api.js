const register = (req, res)=>{
        res.send({
            message:"You have successfully register"
        })
}

const login = (req, res)=>{
    res.send({
        message:"You have successfully Login"
    })
}

const aboutus = (req, res)=>{
    res.send({
        message:"This is aboutus"
    })
}

const contactus = (req, res)=>{
    res.send({
        message:"This is contact us"
    })
}

module.exports = {aboutus,contactus,login,register}