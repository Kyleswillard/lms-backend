const db = require('../db/db')

// Get all lessons
const getAll = async () => {
    return await db('lessons')
}

// Get lesson by ID
const getById = async (id) => {
    return db('lessons').first('*').where({ id })
}
// Create a new lesson
const addLesson = async (title, body, videoUrl) => {
    const lessonId = await db('lessons').insert(
        {
            title: title,
            body: body,
            video_url: videoUrl
        },
        ['id', 'title']
    )
    return getAll()
}

// Update Lesson
const updateLesson = async (id, changes) => {
    await db('lessons').where({ id }).update(changes)
    return await getById(id)
}

// Delete Lesson
const deleteLesson = async (id) => {
    return await db('lessons').del().where({ id })
}

module.exports = { addLesson, getById, getAll }
