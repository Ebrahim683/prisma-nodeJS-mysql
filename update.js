import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()


async function updateUsers() {
    try {
        const res = await prisma.user.updateMany({
            where: {
                id: {
                    lt: 4
                }
            },
            data: {
                name: 'changed'
            }
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

async function updateUser() {
    try {
        const res = await prisma.user.update({
            where: {
                id: 50
            },
            data: {
                name: 'changed single name'
            }
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

//function calling//


// updateUsers()
updateUser()