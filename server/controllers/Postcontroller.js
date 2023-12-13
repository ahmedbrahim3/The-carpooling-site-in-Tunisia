const { Post, User } = require("../database-mongo/model")

getAllPosts = async (req, res) => {
    try {
        const all = await Post.find({}).populate("user","post")
        res.json(all)
    } catch (error) {
        res.send(error)
    }
}

getOne = async (req, res) => {
    try {
        const one = await Post.findById(req.params.id)
        res.json(one)
    } catch (error) {
        res.send(error)
    }
}

const add = async (req, res) => {
  try {
    const { date, phonenumber, car, numberOfPlaces, price, information,image } = req.body;

    const newPost = await Post.create({
      date,
      phonenumber,
      car,
      numberOfPlaces,
      price,
      information,
      image,
      user: req.params.id
    });

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $push: { post: newPost._id } },
      { new: true }
    );

    res.json({ user, newPost });
  } catch (error) {
    res.status(500).json({ error: 'There was an error' });
  }
};


delete1 = async(req,res)=>{
  try {
    const del=await Post.findByIdAndDelete({_id:req.params.id})
    res.json(del)
  } catch (error) {
    res.status(500).send(error)
  }
}

update = async (req, res) => {
  try {
    const postUpdated = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!postUpdated) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(postUpdated);
  } catch (error) {
    res.status(500).send(error);
  }
};

  
module.exports={getAllPosts,getOne,add,delete1,update}