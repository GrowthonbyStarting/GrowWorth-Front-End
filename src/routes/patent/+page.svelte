<script>
	import { Button } from 'flowbite-svelte';
	import { goto } from '$app/navigation';
	export let data;
	let choices = {
		1: [
			{
				id: 1,
				content: '예',
				question_id: 1
			},
			{
				id: 2,
				content: '아니오',
				question_id: 1
			}
		],
		2: [
			{
				id: 3,
				content: '문서 작성에 대한 두려움 혹은 피로감',
				question_id: 2
			},
			{
				id: 4,
				content: '유사 아이디어 정보 미비',
				question_id: 2
			},
			{
				id: 5,
				content: '발명에 대한 불확실성',
				question_id: 2
			},
			{
				id: 6,
				content: '특허 등록에 대한 막막함',
				question_id: 2
			}
		]
	};
	let count = 0;
	let question = data.question[count];
	$: question = data.question[count];

	const addCount = () => {
		if (data.question.length === count + 1) goto('/submit');
		else count++;
	};
</script>

<div class="mt-8 text-center">
	<div class="w-full code-responsive-wrapper">
		<div
			class="w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-2 sm:p-6 space-y-4 text-[30px]"
		>
			{question.content}
		</div>
	</div>
	{#if question.type === 'text'}
		<input />
	{:else if question.type === 'select'}
		<div class="relative p-4 code-syntax dark:border-gray-600">
			<div class="grid w-full grid-cols-3 rounded-t-md">
				{#each choices[question.id] as choice (choice.id)}
					<div class="mx-10 flex justify-center items-center mb-5">
						<Button class="flex justify-center items-center" on:click={() => addCount()}
							>{choice.content}</Button
						>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</div>
