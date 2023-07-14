import { PUBLIC_URL } from '$env/static/public';

// 로그인 페이지 불렀을 경우
export const load = (async ({ cookies, fetch }) => {
	const answer = await fetch(`${PUBLIC_URL}/api/answer`).then(
		async (data) => await data.json()
	);
	return {
		answer
	};
}) satisfies PageServerLoad;
