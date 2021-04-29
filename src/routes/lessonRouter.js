const express = require('express')
const {
    addLesson,
    getAll,
    getById,
    updateLesson,
    deleteLesson
} = require('../model/lessonModel')
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('../../swagger.json')
const router = express.Router()

// Adding SWAGGERUI Documentation
router.use('/api-docs', swaggerUI.serve)
router.get('/api-docs', swaggerUI.setup(swaggerDocument))

// GET - Get All Lessons
router.get('/', async (req, res) => {
    try {
        const lessons = await getAll()
        res.json({ lessons })
    } catch (err) {
        res.status(500).json({ message: 'ERROR GETTING ALL LESSONS!' })
    }
})
// GET - Get Lesson by ID
router.get('/:id', async (req, res) => {
    const id = req.params.id
    if (!id) {
        res.status(400).json({ message: 'ID IS REQUIRED' })
    }
    try {
        const lesson = await getById(id)
        res.json({ lesson })
    } catch (err) {
        res.status(500).json({ message: 'ERROR GETTING LESSON' })
    }
})

// POST - Create Lesson
router.post('/', async (req, res) => {
    const { title, body, videoUrl } = req.body
    try {
        const lesson = await addLesson(title, body, videoUrl)
        console.log(req.body, lesson)
        res.status(201).json({ lesson })
    } catch (err) {
        res.status(500).json({ message: 'ERROR CREATING LESSON' })
    }
})

//PUT - Update Lesson
router.put('/:id', async (req, res) => {
    const { id } = req.params.id
    try {
        const changedLesson = await updateLesson(id, req.body)
        res.json(changedLesson)
    } catch (err) {
        res.status(500).json({ message: 'ERROR UPDATING LESSON' })
    }
})
// DELETE - Delete Lesson
router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const lesson = await deleteLesson(id)
        res.json({ message: 'Lesson Deleted' })
    } catch (err) {
        res.status(500).json({ message: 'ERROR DELETING LESSON' })
    }
})
module.exports = router
