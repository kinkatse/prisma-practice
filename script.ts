import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    // const user = await prisma.user.create({
    //     data: {
    //         name: "Kin"
    //     }
    // })

    // const user = await prisma.user.findFirst({ where: { name: "Kin" }})

    // const user = await prisma.user.deleteMany()

    // console.log(user)
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })