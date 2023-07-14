import { PUBLIC_URL } from '$env/static/public';
import { json, type RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export async function POST({ request, cookies, params }) {
	const body = await request.json();

	const res = await fetch(`${PUBLIC_URL}/api/file`, {
		method: 'POST',
		headers: {
			'Content-Type': 'multipart/form-data',
			Authorization: cookies.get('access_token')
		},
		body: JSON.stringify(body)
	}).then(async (data) => await data.json());

	return json(res);
}