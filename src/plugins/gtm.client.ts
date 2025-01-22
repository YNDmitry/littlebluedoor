declare global {
	interface Window {
		dataLayer: any[]
	}
}
export {}

export default defineNuxtPlugin((nuxtApp) => {
	window.dataLayer = window.dataLayer || []
	function gtag(...args: any[]) {
		window.dataLayer.push(arguments)
	}
	gtag('js', new Date())
	gtag('config', 'GTM-KD8FH474')
})
