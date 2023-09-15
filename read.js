import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function getUser() {
    try {
        const res = await prisma.user.findMany({
            where: {
                id: {
                    gt: 5
                },
                name: {
                    equals: 'rayhan'
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

//function calling//
getUser()