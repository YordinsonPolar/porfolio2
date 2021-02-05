import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase
firebase.initializeApp(JSON.parse(__process.env.firebaseConfig));

export const fetchProjects = async () => {
	const db = firebase.firestore();
	try {
		const ref = await db.collection('projects').get();
		const data = ref.docs.map(doc => doc.data());
		return data;
	}
	catch(err){
		error = true;
		loadingProjects = false;
		console.error(err)
	}
}

export const fetchFreelanceProjects = async () => {
	const db = firebase.firestore();
	try {
		const ref = await db.collection('freelance').get();
		const data = ref.docs.map(doc => doc.data());
		return data;
	}
	catch(err){
		error = true;
		loadingProjects = false;
		console.error(err)
	}
}