

// 로그인 페이지 불렀을 경우
export const load = (async ({ cookies, fetch }) => {
    return {
        question: [
            {
                id: 1,
                type: 'select',
                content: '혹시 이전에 특허를 내거나, 발명 아이디어를 기관에 제출해보신 경험이 있으신가요?',
                ord: 1,
                qn_id: 1
            },
            {
                id: 2,
                type: 'select',
                content: '특허 등록을 고민할 때 어떤 부분이 가장 어려우셨나요?',
                ord: 2,
                qn_id: 1
            },

        ],

    };
}) satisfies PageServerLoad;