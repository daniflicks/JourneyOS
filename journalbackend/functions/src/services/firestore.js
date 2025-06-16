import admin from 'firebase-admin'

if (!admin.apps.length) {
  // Uses the GOOGLE_APPLICATION_CREDENTIALS env var or default credentials
  admin.initializeApp()
}

export const db = admin.firestore()
export const FieldValue = admin.firestore.FieldValue