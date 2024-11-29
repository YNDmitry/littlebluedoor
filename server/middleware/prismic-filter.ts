export default defineEventHandler((event) => {
	const url = event.node.req.url || ''

	// Исключаем маршруты, начинающиеся с /api/
	if (url.startsWith('/api/')) {
		return // Пропускаем обработку
	}
})
