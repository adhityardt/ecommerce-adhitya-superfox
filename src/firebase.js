import { initializeApp } from 'firebase'

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyCtx97sWO4uaGWxkjBbTdt6y1TmOE0XoZ0',
  authDomain: 'mobil-murah-dotcom.firebaseapp.com',
  databaseURL: 'https://mobil-murah-dotcom.firebaseio.com',
  projectId: 'mobil-murah-dotcom',
  storageBucket: 'mobil-murah-dotcom.appspot.com',
  messagingSenderId: '287758272054'
})

export const db = firebaseApp.database()
export const user = firebaseApp.auth()
export const storageRef = firebaseApp.storage()
// export const regPic = db.ref('Pictures')
// export const storageRef = firebaseApp.storage().ref(Number(new Date()).toString())
