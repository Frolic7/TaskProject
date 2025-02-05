import catchAsync from "../Utils/catchAsync.js"
import Category from "../Models/categoryMd.js"
import ApiFeatures from "../Utils/apiFeatures.js"
import HandleERROR from "../Utils/handleError.js"

export const createCategories=catchAsync(async(req,res,next)=>{
    const categoty=await Category.create({...req.body,userId:req.userId})
    return res.status(201).json({
        success:true,
        message:"Create Category Successfully",
        data:categoty
    })
})
export const getPersonalCategories=catchAsync(async(req,res,next)=>{
    const queryString={...req.query,filters:{...req.query.filters,userId:req.userId}}
    const features=new ApiFeatures(Category,queryString).filter().sort().limitFields().paginate().populate()
    const categories=await features.query
    return res.status(200).json({
        success:true,
        message:"Get Categoy Successfully",
        data:categories
    })
})
export const getOnePersonalCategories=catchAsync(async(req,res,next)=>{
    const {id}=req.params
    const category=await Category.findOne({_id:id,userId:req.userId})
    return res.status(200).json({
        success:true,
        message:"Get Category Successfully",
        data:category
    })
})
export const updateCategories=catchAsync(async(req,res,next)=>{
    const {id}=req.params
    const category=await Category.findOneAndUpdate({_id:id,userId:req.userId},req.body,{new:true,runValidators:true})
    if(!category){
        return next(new HandleERROR('category not found',404))
    }
    return res.status(200).json({
        success:true,
        message:"Update Category Successfully",
        data:category
    })
})
export const removeCategories=catchAsync(async(req,res,next)=>{
    const {id}=req.params
    const category=await Category.findOneAndDelete({_id:id,userId:req.userId})
    if(!category){
        return next(new HandleERROR('category not found',404))
    }
    return res.status(200).json({
        success:true,
        message:"Delete Category Successfully",
        data:category
    })
})


