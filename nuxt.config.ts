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
			htmlAttrs: {
				lang: 'ru',
			},
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
					content: 'noindex, nofollow'
				},
				{
					name: "msapplication-TileColor",
					content: "#da532c"
				},
				{
					name: "theme-color",
					content: "#ffffff"
				}
			],
			link: [
				{
					rel: 'apple-touch-icon',
					sizes: '180x180',
					href: '/apple-touch-icon.png',
				},
				{
					rel: 'icon',
					sizes: '32x32',
					type: 'image/png',
					href: '/favicon-32x32.png',
				},
				{
					rel: 'icon',
					sizes: '16x16',
					type: 'image/png',
					href: '/favicon-16x16.png',
				},
				{
					rel: 'manifest',
					href: '/site.webmanifest',
				},
				{
					rel: 'mask-icon',
					href: '/safari-pinned-tab.svg',
					color: '#5bbad5',
				},
			]
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