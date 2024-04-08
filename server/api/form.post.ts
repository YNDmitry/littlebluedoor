// import { PrismaClient } from '@prisma/client'

// export default defineEventHandler(async (event) => {
// 	const body = await readBody(event).then((res) => res)

// 	const prisma = new PrismaClient()

// 	try {
// 		const d = await prisma.newsletter.create({
// 			data: {
// 				email: body.email,
// 			},
// 		})

// 		prisma.$disconnect()
// 		return { email: d.email }
// 	} catch (error) {
// 		prisma.$disconnect()
// 		throw createError({ statusCode: 500, message: error })
// 	}
// })
