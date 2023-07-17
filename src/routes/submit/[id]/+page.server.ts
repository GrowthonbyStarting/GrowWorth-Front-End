import { PUBLIC_URL } from '$env/static/public';

// 로그인 페이지 불렀을 경우
export const load = (async ({ cookies, fetch, params }) => {
	const item = await fetch(`${PUBLIC_URL}/api/answer/${params.id}`).then(
		async (data) => await data.json()
	);
	const user = await fetch(`${PUBLIC_URL}/api/user/${item.userId}`).then(
		async (data) => await data.json()
	);
	return {
		item,
		user
	};
}) satisfies PageServerLoad;
