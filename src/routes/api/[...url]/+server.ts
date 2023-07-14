import { PUBLIC_URL } from '$env/static/public';
import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export const POST: RequestHandler = async (event) => {
	const { url } = event.params;
	const body = await event.request.json();
	const info: RequestInit = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body)
	};
	console.log(`${PUBLIC_URL}/api/${url}`, info);
	const res = await fetch(`${PUBLIC_URL}/api/${url}`, info)
		.then((response) => {
			return response;
		})
		.catch((err) => {
			console.log(err);
			return Promise.reject(err);
		});
	return res;
};
export const GET: RequestHandler = async (event) => {
	const { url } = event.params;
	const info: RequestInit = {
		method: 'get',
		headers: {
			'Content-Type': 'application/json',
			Authorization: event.cookies.get('access_token')
			// 'Content-Type': 'application/x-www-form-urlencoded',
		}
	};
	const res = await fetch(`${PUBLIC_URL}/api/${url}`, info)
		.then((response) => {
			return response;
		})
		.catch((err) => {
			return Promise.reject(err);
		});
	return res;
};
