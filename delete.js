import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function deleteUsers() {
    try {
        const res = await prisma.user.deleteMany({
            where: {
                id: {
                    gt: 30
                }
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


async function deleteUser() {
    try {
        const res = await prisma.user.deleteMany({
            where: {
                id: 4
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

// deleteUsers()
deleteUser()