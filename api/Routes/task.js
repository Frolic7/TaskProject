import express from 'express'
import { createTasks, getAllMyTasks, getOneMyTask, removeTasks, updateTasks } from '../Controllers/taskCn.js'
const taskRouter=express.Router()
taskRouter.route('/').get(getAllMyTasks).post(createTasks)
taskRouter.route('/:id').get(getOneMyTask).patch(updateTasks).delete(removeTasks)



export default taskRouter