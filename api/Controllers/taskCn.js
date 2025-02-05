import catchAsync from "../Utils/catchAsync.js"
import Task from "../Models/taskMd.js"
export const createTasks=catchAsync(async(req,res,next)=>{
    const task=await Task.create({...req.body,userId:req.Userid})
    return res.status(201).json({
        success:true,
        message:"Create Task Successfully",
        data:task
    })
})
export const getAllMyTasks=catchAsync(async(req,res,next)=>{})
export const getOneMyTask=catchAsync(async(req,res,next)=>{})
export const updateTasks=catchAsync(async(req,res,next)=>{})
export const removeTasks=catchAsync(async(req,res,next)=>{})