export const useSettings = () => {
	const prismic = usePrismic()
	const settings = useAsyncData('$settings', () => prismic.client.getSingle('settings')).data
	return settings
}
