// plugins/firebase.js
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

import type { FirebaseApp } from "firebase/app"
import type { Firestore } from "firebase/firestore"

export default defineNitroPlugin((nitroApp) => {
	const config = useRuntimeConfig()

	const firebaseConfig = config.public.firebaseConfig as any

	if (!firebaseConfig.apiKey) {
		console.error("Firebase connection details are missing. Please add them to the .env file.")
	}

	let app: FirebaseApp | undefined
	let db: Firestore | undefined

	try {
		app = initializeApp(firebaseConfig)
		db = getFirestore(app)

		console.log("[Firebase Base Layer] Firebase server side initialized.")
	} catch (error) {
		console.error("[Firebase Base Layer] Error creating Firebase server side instance", error)
	}

	// Provide the Firebase services to the Nuxt app context
	nitroApp.hooks.hook("request", (event) => {
		event.context.db = db
	})
})
