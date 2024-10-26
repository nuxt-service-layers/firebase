export function envError(firebaseConfig: any) {
	const requiredConfigKeys = [
		"apiKey",
		"authDomain",
		"projectId",
		"storageBucket",
		"messagingSenderId",
		"appId",
		"measurementId",
	]
	const missingKeys = requiredConfigKeys.filter((key) => !firebaseConfig[key])

	if (missingKeys.length) {
		let errorString = `[database-connection] You are missing the database connection details:\n\n`
		missingKeys.forEach((key) => (errorString += `${key}=\n`))
		errorString += "\n Please add these to connect to firestore."

		console.warn(errorString)
		return true
	}

	return false
}
