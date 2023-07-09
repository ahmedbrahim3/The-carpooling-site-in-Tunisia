const router=require ("express").Router()
const{getAll,getOne,register,login,getByemail}=require("../controllers/Usercontorller")

router.get("/",getAll)
router.get("/:id",getOne)
router.get("/getem/:email",getByemail)
router.post("/add",register)
router.post("/login",login)
module.exports=router
