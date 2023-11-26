import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ log: ["query"] })

async function main() {
    // const user = await prisma.user.create({
    //     data: {
    //         name: "Spencer",
    //         username: "siascone",
    //         email: "siascone@aa.io",
    //         age: 35,
    //         userPreference: {
    //             create: {
    //                 emailUpdates: true
    //             }
    //         }
    //     },
    //     select: {
    //         id: true,
    //         name: true,
    //         username: true,
    //         age: true,
    //         email: true,
    //         phone: true,
    //         userPreference: true
    //     }
    // })

    // const users = await prisma.user.createMany({
    //     data: [
    //         {
    //             name: "Kin",
    //             username: "Kinka",
    //             email: "kinka@im.io",
    //             age: 27
    //         },
    //         {
    //             name: "Kyle",
    //             username: "Kginz",
    //             email: "kginz@aa.io",
    //             age: 31
    //         },
    //         {
    //             name: "Ayce",
    //             username: "Alacap",
    //             email: "alacap@aa.io",
    //             age: 28
    //         }
    //     ]
    // })

    // const foundUser = await prisma.user.findFirst({
    //     where: { name: "Spencer" },
    //     select: { id: true, name: true, username: true, age: true, email: true, phone: true },
    //     // include: { userPreference: true }
    // })

    // const user = await prisma.user.findUnique({
    //     where: {
    //         username_email: {
    //             username: 'Kinka',
    //             email: 'kinka@im.io'
    //         }
    //     }
    // })

    // const users = await prisma.user.createMany({
    //     data: [
    //         {
    //             name: "Kyle",
    //             username: "kyleA",
    //             email: "kyleA@example.io",
    //             age: 15
    //         },
    //         {
    //             name: "Kyle",
    //             username: "kyleB",
    //             email: "kginz@example.io",
    //             age: 15
    //         },
    //         {
    //             name: "Kyle",
    //             username: "kginz",
    //             email: "kyleC@example.io",
    //             age: 15
    //         },
    //     ]
    // })

    // const user = await prisma.user.findMany({
    //     where: {
    //         name: "Kyle"
    //     },
    //     distinct: ["username", "email"]
    //     // take: 2,
    //     // skip: 1
    // })

    // const user = await prisma.user.findMany({
    //     where: {
    //         name: {
    //             // equals: "Kin"
    //             in: ["Spencer", "Kin"],
    //             // notIn: ["Spencer", "Kin"],
    //             not: "Kin"
    //         },
    //         age: { gte: 35 }
    //     }
    // })

    // const user = await prisma.user.findMany({
    //     where: {
    //         email: {
    //             // contains: "@example.io"
    //             endsWith: "@example.io"
    //         }
    //     }
    // })

    // const user = await prisma.user.findMany({
    //     where: {
    //         AND: [{
    //             email: { startsWith: "k" },
    //             name: { notIn: [ "Kyle" ] }
    //         }]
    //         // Can use OR and NOT here as well
    //         // OR with array and NOT without array
    //     }
    // })

    // const user = await prisma.user.findMany({
    //     where: {
    //         userPreference: {
    //             emailUpdates: true
    //         }
    //     }
    // })

    // const user = await prisma.user.findMany({
    //     where: {
    //         posts: {
    //             some: {
    //                 title: {
    //                     contains: "Title"
    //                 }
    //             }
    //         }
    //     }
    // })

    // const users = await prisma.user.findMany()

    // const postA = await prisma.post.create({
    //     data: {
    //         title: "Kin Test",
    //         body: "Hey this is a test post",
    //         authorId: user?.id
    //     }
    // })

    // const postB = await prisma.post.create({
    //     data: {
    //         title: "Kin Title",
    //         body: "Hey this is another test post",
    //         authorId: user?.id
    //     }
    // })

    const posts = await prisma.post.findMany({
        where: {
            author: {
                is: {
                    age: 27
                }
            }
        }
    })

    // const updatedUser = await prisma.user.update({
    //     where: { email: "kinka@im.io" },
    //     data: { age: { decrement: 2 } }
    // })

    // const updatedUser = await prisma.user.update({
    //     where: { email: "alacap@aa.io" },
    //     data: { userPreference: {
    //         create: {
    //             emailUpdates: true
    //         }
    //     } },
    //     select: {
    //         id: true,
    //         name: true,
    //         username: true,
    //         age: true,
    //         email: true,
    //         phone: true,
    //         userPreference: true
    //     }
    // })


    // This wont work because userPreference needs an author
    // We can adjust our schema so that its optional and then test
    // this but I dont see myself using this too often

    // const preference = await prisma.userPreference.create({
    //     data: {
    //         emailUpdates: true
    //     }
    // })

    // const updatedUser = await prisma.user.update({
    //     where: { email: "alacap@aa.io" },
    //     data: { userPreference: {
    //         connect: {
    //             id: preference?.id
    //         }
    //     } }
    // })

    // const updatedUser = await prisma.user.update({
    //     where: { email: "alacap@aa.io" },
    //     data: { userPreference: {
    //         disconnect: true
    //     } }
    // })

    // const posts = await prisma.post.findMany()

    // const deletedPreferences = await prisma.userPreference.deleteMany()
    // const deletedUsers = await prisma.user.deleteMany()

    // console.log(user)
    // console.log(foundUser)
    // console.log(users)
    // console.log(posts)
    // console.log(updatedUser)
    // console.log(deletedUsers)
    // console.log(deletedPreferences)
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })