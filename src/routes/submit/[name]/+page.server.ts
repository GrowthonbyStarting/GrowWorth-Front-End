import { PUBLIC_URL } from '$env/static/public';

// 로그인 페이지 불렀을 경우
export const load = (async ({ cookies, fetch, params }) => {

	return {
		name: params.name
	};
}) satisfies PageServerLoad;
