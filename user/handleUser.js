import express from 'express';
import { PrismaClient } from '@prisma/client'

const route = express.Router()
const prisma = new PrismaClient()


route.post('/createUser', async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const userData = {
        name: name,
        email: email,
    }
    try {
        const data = await prisma.user.create({
            data: userData,
        })
        console.log(data);
        res.json({
            success: true,
            message: 'user created'
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error
        })
    } finally {
        async () => {
            await prisma.$disconnect()
        }
    }
})


route.get('/getUser', async (req, res) => {
    const email = req.body.email
    console.log(email);
    try {
        const data = await prisma.user.findUnique({
            where: {
                email: email.toString(),
            }
        })
        console.log(data);
        res.json({
            success: true,
            message: data
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error
        })
    } finally {
        async () => {
            await prisma.$disconnect()
        }
    }
})


route.put('/updateUser', async (req, res) => {
    const email = req.body.email
    const name = req.body.name
    try {
        const data = await prisma.user.update({
            where: {
                email: email
            },
            data: {
                name: name
            }
        })
        console.log(data); res.json({
            success: true,
            message: data
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error
        })
    } finally {
        async () => {
            await prisma.$disconnect()
        }
    }
})


route.delete('/deleteUser', async (req, res) => {
    const email = req.body.email
    try {
        const data = await prisma.user.delete({
            where: {
                email: email
            }
        })
        console.log(data);
        res.json({
            success: true,
            message: 'user deleted'
        })
    } catch (error) {
        console.log(error); res.json({
            success: false,
            message: error
        })
    } finally {
        async () => {
            await prisma.$disconnect()
        }
    }
})



export default route