const Message = require('../models/Message')

const messageControllers = {
    createNew: async (req, res) => {
        console.log('hola')
        try {
            const { name, email, content } = req.body
            const newMessage = new Message({
                name,
                email,
                content
            })

            await newMessage.save()
            res.json({success: true, response: newMessage})
            
        } catch (error) {
            res.json({success: false, error: error.message})
        }
        
    },
    getAllMessages: async (req, res) => {
        try {
            const messages = await Message.find()
            res.json({success: true, response: messages})
        } catch (error) {
            res.json({success: false, error: error.message})
        }
    },
    deleteOne: async (req, res) => {
        try {
            const { id } = req.params
            const removed = await Message.findOneAndDelete({ _id: id })
            if(!removed) throw new Error('Message does not exists')
            res.json({success: true, response: 'Message deleted'})
        } catch (error) {
            res.json({success: false, error: error.message})
        }
    }
}

module.exports = messageControllers