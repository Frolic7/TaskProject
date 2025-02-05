import express from 'express'
import { createCategories, getOnePersonalCategories, getPersonalCategories, removeCategories, updateCategories } from '../Controllers/categoryCn.js'
const categoryRouter=express.Router()
categoryRouter.route('/').get(getPersonalCategories).post(createCategories)
categoryRouter.route('/:id').get(getOnePersonalCategories).patch(updateCategories).delete(removeCategories)


export default categoryRouter