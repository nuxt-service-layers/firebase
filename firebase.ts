// // plugins/firebase.js
// import { initializeApp } from "firebase/app"
// import { getFirestore } from "firebase/firestore"

// import type { FirebaseApp } from "firebase/app"
// import type { Firestore } from "firebase/firestore"

// export default defineNuxtPlugin(() => {
// 	if (!import.meta.client) return
// 	const config = useRuntimeConfig()
// 	const firebaseConfig = config.public.firebaseConfig as any

// 	if (!firebaseConfig.apiKey) {
// 		console.error("Firebase connection details are missing. Please add them to the .env file.")
// 	}

// 	console.log(firebaseConfig)

// 	let app: FirebaseApp | undefined
// 	let db: Firestore | undefined

// 	app = initializeApp(firebaseConfig)

// 	if (!app) {
// 		console.log("[Firebase Base Layer] Error creating Firebase clientside app instance")
// 	}

// 	db = getFirestore(app)

// 	console.log("[Firebase Base Layer] Firebase client side initialized.")

// 	if (!db) {
// 		console.error("[Firebase Base Layer] Error creating Firebase clientside db instance")
// 	}

// 	// Provide the Firebase services to the Nuxt app context
// 	useNuxtApp().provide("db", db)
// })
