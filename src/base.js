import Rebase from 're-base';
import firebase from 'firebase/app';
import database from 'firebase/database';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: "AIzaSyC5G2ZDO-_SFKRRZUIdZIihl1B_cRdO6GU",
  authDomain: "thing-list-fadf6.firebaseapp.com",
  databaseURL: "https://thing-list-fadf6.firebaseio.com",
  projectId: "thing-list-fadf6",
  storageBucket: "thing-list-fadf6.appspot.com",
  messagingSenderId: "95403164759",
});

const db = database(app);

export const auth = app.auth();
export const githubProvider = new firebase.auth.GithubAuthProvider();

export default Rebase.createClass(db);