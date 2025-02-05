import catchAsync from "../Utils/catchAsync.js"
import User from "../Models/userMd.js";
export const getOneUser = catchAsync(async (req, res, next) => { 
    const user = await User.findById(req.userId)
    return res.status(200).json({
        success: true,
        message: "I Got You :D",
        data: user
    })})
export const updateUser = catchAsync(async (req, res, next) => {
    const user = await User.findByIdAndUpdate(req.userId, req.body, { new: true, runValidators: true })
    return res.status(200).json({
        success: true,
        message: "I Changed You :D",
        data: user
    }) 
})
