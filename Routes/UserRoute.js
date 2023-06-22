const { login, register, aboutus, contactus } = require("../Controller/Api")
const { Specificauth } = require("../Middleware/auth")

const route = require("express").Router()

route.get("/login",Specificauth,login)
route.get("/register",Specificauth,register)
route.get("/aboutus",aboutus)
route.get("/contactus",contactus)