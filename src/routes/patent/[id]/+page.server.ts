import { PUBLIC_URL } from '$env/static/public';

// 로그인 페이지 불렀을 경우
export const load = (async ({ cookies, fetch, params }) => {

	const question = await fetch(`${PUBLIC_URL}/api/question/${params.id}`).then(
		async (data) => await data.json()
	);
	return {
		question,
		id: params.id

	};
}) satisfies PageServerLoad;
