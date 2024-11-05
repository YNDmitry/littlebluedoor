import { PrismaClient } from '@prisma/client'

// Создаём один экземпляр Prisma для повторного использования
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
	const body = await readBody(event)

	try {
		// Проверяем существование email
		const isUniq = await prisma.newsletter.findUnique({
			where: { email: body.email },
		})

		// Если email не найден, создаём новую запись
		if (!isUniq) {
			const d = await prisma.newsletter.create({
				data: { email: body.email },
			})
			return { statusCode: 200, email: d.email }
		} else {
			throw createError({
				statusCode: 400,
				message: 'Email already exists',
			})
		}
	} catch (error) {
		throw createError({ statusCode: error.statusCode || 500, message: error.message })
	} finally {
		await prisma.$disconnect()
	}
})
