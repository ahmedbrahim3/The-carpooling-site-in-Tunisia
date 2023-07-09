const router=require ("express").Router()
const{getAllPosts,getOne,add,delete1,update}=require("../controllers/Postcontroller")

router.get("/",getAllPosts)
router.get("/:id",getOne)
router.post("/add/:id",add)
router.delete("/del/:id",delete1)
router.put("/up/:id",update)
module.exports=router