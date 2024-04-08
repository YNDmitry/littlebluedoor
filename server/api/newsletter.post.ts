import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async (event) => {
	const body = await readBody(event).then((res) => res)

	const prisma = new PrismaClient()

	try {
		const isUniq = await prisma.newsletter.findUnique({
			where: {
				email: body.email,
			},
		})

		if (!isUniq) {
			const d = await prisma.newsletter.create({
				data: {
					email: body.email,
				},
			})
			return { email: d.email }
		} else {
			throw createError({
				statusCode: 400,
				message: 'Email already exists',
			})
		}
	} catch (error) {
		prisma.$disconnect()
		throw createError({ statusCode: 500, message: error.message })
	}
})
