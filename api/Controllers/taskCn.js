import catchAsync from "../Utils/catchAsync.js"
import Task from "../Models/taskMd.js"
import ApiFeatures from "../Utils/apiFeatures.js"
import HandleERROR from "../Utils/handleError.js"
export const createTasks=catchAsync(async(req,res,next)=>{
    const task=await Task.create({...req.body,userId:req.userId})
    return res.status(201).json({
        success:true,
        message:"Create Task Successfully",
        data:task
    })
})
export const getAllMyTasks=catchAsync(async(req,res,next)=>{
    const queryString={...req.query,filters,userId:req.userId}
    const features=new ApiFeatures(Category,queryString).filter().sort().limitFields().paginate().populate()
    const tasks=await features.query
    return res.status(200).json({
        success:true,
        message:"Get Task Successfully",
        data:tasks
    })
})
export const getOneMyTask=catchAsync(async(req,res,next)=>{
    const {id}=req.params
    const task=await Task.findOne({_id:id,userId:req.userId})
    return res.status(200).json({
        success:true,
        message:"Get Task Successfully",
        data:task
    })
})
export const updateTasks=catchAsync(async(req,res,next)=>{
    const {id}=req.params
    const task=await Task.findOneAndUpdate({_id:id,userId:req.userId},req.body,{new:true,runValidators:true})
    if(!category){
        return next(new HandleERROR('category not found',404))
    }
    return res.status(200).json({
        success:true,
        message:"Update Category Successfully",
        data:task
    })
})
export const removeTasks=catchAsync(async(req,res,next)=>{
    const {id}=req.params
    const task=await Task.findOneAndDelete({_id:id,userId:req.userId})
    if(!category){
        return next(new HandleERROR('category not found',404))
    }
    return res.status(200).json({
        success:true,
        message:"Delete Category Successfully",
        data:task
    })
})