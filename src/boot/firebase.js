import Vue from 'vue'
import firebase from 'firebase/app'

import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'

export default async (/* { app, router, Vue ... } */) => {
  const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: `${process.env.FIREBASE_PROJECT_ID}.appspot.com`,
    messagingSenderId: process.env.FIREBASE_MSG_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASURE_ID
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(config)
    if (process.env.NODE_ENV === 'production') {
      Vue.prototype.$analytics = firebase.analytics()
    }
  }
}
