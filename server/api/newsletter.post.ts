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
			return {
				statusCode: 400,
				message: 'Email already exists',
			}
		}
	} catch (error) {
		throw Error(error)
	} finally {
		await prisma.$disconnect()
	}
})
