const {User}=require("../database-mongo/model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
  getAll= async (req,res)=>{
    try {
        const all=await User.find({})
        res.json(all)
        
    } catch (error) {
        res.send(error)
    }
  }
  getOne = async (req, res) => {
    try {
        const one = await User.findById(req.params)
        res.json(one)
    } catch (error) {
        res.send(error)
    }
}
getByemail=async(req,res)=>{
  try {
    const one =await User.findOne({email:req.params.email})
    res.json(one)
    } catch (error) {
    res.send(error)
  }
}
const register = async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        gender: req.body.gender,
      });
      const result = await user.save()
      res.status(201).json({
        message: "Done",
        result,
      });
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  };

  login = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email })
      if (!user) {
        return res.status(404).json({ message: "Wrong email" })
      }
  
      const passwordCheck = await bcrypt.compare(
        req.body.password,
        user.password
      );
  
      if (!passwordCheck) {
        return res.status(400).json({ message: "Wrong password" })
      }
  
      const token = jwt.sign(
        {
          userId: user._id,
          userEmail: user.email,
        },
        "RANDOM-TOKEN",
        { expiresIn: "48h" }
      );
  
      res.status(200).json({
        message: "Login successful",
        email: user.email,
        token,
      });
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  };

  
module.exports={getAll,getOne,register,login,getByemail}

