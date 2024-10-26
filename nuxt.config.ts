// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	runtimeConfig: {
		public: {
			firebaseConfig: {
				apiKey: process.env.apiKey,
				authDomain: process.env.authDomain,
				projectId: process.env.projectId,
				storageBucket: process.env.storageBucket,
				messagingSenderId: process.env.messagingSenderId,
				appId: process.env.appId,
				measurementId: process.env.measurementId,
			},
		},
	},
	extends: ["../base"],
})
