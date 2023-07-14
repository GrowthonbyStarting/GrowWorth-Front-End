import { PUBLIC_URL } from '$env/static/public';
import { json, type RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export async function POST({ request, cookies, params }) {
	const body = await request.formData();
	const formData = new FormData();
	formData.append('file', body.get('file'));
	console.log(body)
	const res = await fetch(`${PUBLIC_URL}/api/file`, {
		method: 'POST',
		headers: {},
		body
	}).then(async (data) => await data.json())
		.catch(console.log);
	console.log('fileRes', res);

	return json(res);
}