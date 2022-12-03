import express from "express";
import User from "../Models/User.mjs";
import House from '../Models/House.mjs';

const router = express.Router();

router.post('/new', async (req,res) => {
    try {
        const user = await User.findById(req.user._id);
        const house = await House.findByIdAndUpdate(user.house, {$push: {expenses : {
            name: req.body.Name,
            category: req.body.Category,
            date: req.body.Date,
            assignee: req.body.Assignees,
            value: req.body.Value,
            status: false,
            approved: false,
            owner: req.user._id
        }}})
        res.sendStatus(200);
    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
})
router.get('/', async (req,res) => {
    try {
    const user = await User.findById(req.user._id);
    const house = await House.findById(user.house)
    res.status(200).send(house.expenses);
    } catch {
        res.status(500);
    }
})
router.get('/:id', async(req,res) => {
    try {
        const expense = await House.findOne({"expenses._id": req.params.id});
        res.status(200).send(expense);
    } catch {
        res.sendStatus(500);
    }
})
export default router;