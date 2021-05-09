import { connectToDatabase } from '$lib/db';
// import { ObjectId } from 'mongodb';

export async function get(request) {
	try {
		const completed = request.query.get('completed') === 'true';

		const dbConnection = await connectToDatabase();
		const db = dbConnection.db;
		const collection = db.collection('sveltekit-todos');
		const todos = await collection.find({ completed }).toArray();

		return {
			status: 200,
			body: {
				todos
			}
		};
	} catch (err) {
		return {
			status: 500,
			body: {
				error: 'A server error occured'
			}
		};
	}
}

// export async function post(request) {}
// export async function put(request) {}
// export async function del(request) {}
