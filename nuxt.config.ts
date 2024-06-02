// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {enabled: true},
	modules: [
		'@nuxt/image',
		'@nuxtjs/google-fonts',
		'@nuxtjs/tailwindcss',
		'nuxt-icon',
		'shadcn-nuxt',
		'@vueuse/nuxt',
		'vue-yandex-maps/nuxt'
	],
	image: {
		format: ['webp'],
	},
	googleFonts: {
		families: {
			Montserrat: [400, 500, 700],
			Comfortaa: [400, 700],
		},
		display: 'swap',
		subsets: ['cyrillic', 'latin'],
	},
	tailwindcss: {
		cssPath: ['~/assets/css/main.css', {injectPosition: 'first'}],
		configPath: 'tailwind.config',
		exposeConfig: {
			level: 2,
		},
		config: {},
		viewer: true,
		editorSupport: true,
	},
	experimental: {
		typedPages: true,
	},
	imports: {
		autoImport: false,
	},
	shadcn: {
		/**
		 * Prefix for all the imported component
		 */
		prefix: '',
		/**
		 * Directory that the component lives in.
		 * @default "./components/ui"
		 */
		componentDir: './components/ui',
	},
	yandexMaps: {
		apikey: '3c059258-c2fe-4ad1-85b6-f124123aa8e1',
	},
	app: {
		head: {
			title: 'Товары для грудного вскармливания – Kitett',
			meta: [
				{
					name: 'description',
					content: 'Ручные и электрические молокоотсосы Kitett, а также советы в помощь кормящей маме',
				},
				{
					name: 'keywords',
					content: 'Ручные и электрические молокоотсосы Kitett, а также советы в помощь кормящей маме',
				},
				{
					name: 'robots',
					content: 'noindex',
				},
			],

		},
	},
	typescript: {
		tsConfig: {
			compilerOptions: {
				baseUrl: '.',
			},
		},
	},
})