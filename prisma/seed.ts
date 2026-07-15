import { PrismaClient } from "@/src/lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({connectionString: process.env.DATABASE_URL})
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({adapter})

async function main(){
    await prisma.ad.deleteMany()
    await prisma.user.deleteMany()

    const user1 = await prisma.user.create({
        data: {
            email: 'test1@test.ru',
            username: 'test1',
            password: "123123"
        }
    })

    const user2 = await prisma.user.create({
        data: {
            email: 'test2@test.ru',
            username: 'test2',
            password: "123123"
        }
    })

    await prisma.ad.createMany({
        data:[
            {
                title: 'First ad title',
                description: "First ad description",
                userId: user1.id  
            },
            {
                title: 'Second ad title',
                description: "Second ad description with more details",
                userId: user1.id  
            },
            {
                title: 'Third ad title',
                description: "Third ad description",
                userId: user2.id  
            },
            {
                title: 'Fourth ad title',
                description: "Fourth ad description with even more details",
                userId: user2.id  
            },
        ]
    })

    console.log('Database seeded successfully!')
}

main()
    .catch((e) => {
        console.error('Error seeding database:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })