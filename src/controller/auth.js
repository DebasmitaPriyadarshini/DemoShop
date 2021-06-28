const User = require('../models/auth')
const jwt = require('jsonwebtoken')

exports.signup = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec(async (error, user) => {

            if (user) return res.status(400).json({
                message: "User already registered"
            });

            const {
                firstName,
                lastName,
                email,
                password,
                username
            } = req.body;
            const _user = new User({
                firstName,
                lastName,
                email,
                password,
                username: firstName+lastName,
                role: 'user'
            });

            _user.save((error, data) => {
                if (error) {
                    return res.status(400).json({
                        error
                    })
                }
                if (data) {
                    return res.status(201).json({
                        message: "User created Successfully...!"
                    })
                }
            })
        });
}

exports.signin = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec(async(error, user) => {
            if (error) return res.status(400).json({ error })
            if (user) {

                const isPassword = await user.authenticate(req.body.password);

                if ( isPassword && user.role === 'user') {
                    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET);
                    const { _id, firstName, lastName, email, role, fullName, username,following } = user;
                    res.status(200).json({
                        token,
                        user: {
                            _id, firstName, lastName, email, role, fullName, username
                        },
                        following
                    })
                } else {
                    return res.status(400).json({
                        message: "Invalid Password"
                    })
                }
            }
            else {
                return res.status(400).json({ message: "Something went worng" })
            }
        })
}

exports.edituserProfile = async(req,res)=>{
    const {
        firstName, lastName, email
     } = req.body;  
     
     const updatedUserProdile = await User.findOneAndUpdate({_id:req.user._id},{$set:{firstName,lastName,email}},
        {new:true,useFindAndModify: false},
        (err,updatedUserInfo)=>{
            if(err) {
                 return res.status(400).json({err});
            }
            if(updatedUserInfo){
                const user = User.findOne({_id:req.user._id})
                .select("-password")
                .exec((err,userInfo)=>{
                    if(err)    return res.status(400).json({err});
                    if(userInfo){
                        return res.status(201).json({userInfo});
                    }
                });
            }
        })
}