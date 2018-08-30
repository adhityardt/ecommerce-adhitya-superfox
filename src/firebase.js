import { initializeApp } from 'firebase'

const firebaseApp = initializeApp({
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
})

export const db = firebaseApp.database()
export const user = firebaseApp.auth()
export const storageRef = firebaseApp.storage()
// export const regPic = db.ref('Pictures')
// export const storageRef = firebaseApp.storage().ref(Number(new Date()).toString())
