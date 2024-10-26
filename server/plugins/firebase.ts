// plugins/firebase.js
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { envError } from "../errors"

import type { FirebaseApp } from "firebase/app"
import type { Firestore } from "firebase/firestore"

export default defineNitroPlugin((nitroApp) => {
	const config = useRuntimeConfig()

	const firebaseConfig = config.public.firebaseConfig as any

	const missingEnvDetails = envError(firebaseConfig)

	let app: FirebaseApp | undefined
	let db: Firestore | undefined

	try {
		if (!missingEnvDetails) {
			app = initializeApp(firebaseConfig)
			db = getFirestore(app)
			console.log("\x1b[32m", "[database-connection] Firebase Connected.", "\x1b[0m")
		}
	} catch (error) {
		console.error("[database-connection] Error connecting to Firebase.", error)
	}

	// Provide the Firebase services to the Nuxt app context
	nitroApp.hooks.hook("request", (event) => {
		event.context.db = db
	})
})
