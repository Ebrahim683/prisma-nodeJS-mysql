import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function createMany() {
    const data = [
        { name: 'Asraf', email: 'asraf@gmail.com' },
        { name: 'Ebrahim', email: 'ebrahim@gmail.com' },
        { name: 'Santo', email: 'santo@gmail.com' },
        { name: 'Sabbir', email: 'sabbir@gmail.com' },
    ]
    try {
        const res = await prisma.user.createMany({
            data: data,
            skipDuplicates: true,
        })
        console.log(res);
    } catch (error) {
        console.log(error);
    } finally {
        async () => {
            await prisma.$disconnect()
        }
    }
}

async function createSingle(name, email) {
    try {
        const data = { name: name, email: email }
        const res = await prisma.user.create({
            data: data,
        })
        console.log(res);
    } catch (error) {
        console.log(error);
    } finally {
        async () => {
            await prisma.$disconnect()
        }
    }
}

//calling the functions//


// createMany()
// createSingle('Muhammad', 'muhammad@gmail.com')