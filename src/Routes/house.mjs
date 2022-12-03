import express from "express";
import User from "../Models/User.mjs";
import House from '../Models/House.mjs';

const router = express.Router();

router.post('/create', async (req, res) => {
        if(req.body.houseName) {
            try {
                const house = await House.create({name: req.body.houseName, users: [req.user._id]}); 
                const user = await User.findByIdAndUpdate(req.user._id, {house: house._id});
                res.status(200).send({
                    message: "Success",
                    id: house._id
                }); 
            }
            catch {
                res.sendStatus(500);
            }
        }
    }
);
router.post('/join', async (req,res) => {
    if (req.body.houseCode) {
        try {
            const house = await House.findByIdAndUpdate(req.body.houseCode, {$push: {users: req.user._id}});
            const user = await User.findByIdAndUpdate(req.user._id, {house: house._id});
            res.status(200).send({
                message: "Joined the house successfully!"
            })
        } catch {
            res.status(500).send({
                err : "Wrong code"
            })
        }
    } 
})
router.get('/roommates', async(req, res) => {
    try {
        const user = await User.findById(req.user._id);
        const house = await House.findById(user.house).populate("users");
        const usersInfo = house.users.map((e) => {
            return {
                firstName: e.givenName,
                lastName: e.lastName
            }
        })
        res.status(200).send({
            message: "Success",
            info: usersInfo
        })
    } catch {
        res.sendStatus(500);
    }
})
export default router;