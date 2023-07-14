<script>
	import Button from '$components/button.svelte';
	import { onMount } from 'svelte';

	import choice_bio from '$lib/images/choice_bio.png';
	import choice_mec from '$lib/images/choice_mec.png';
	import choice_chemi from '$lib/images/choice_chemi.png';
	import choice_elec from '$lib/images/choice_elec.png';
	import choice_etc from '$lib/images/choice_etc.png';

	export let data;
	let questionnaireId = data.id;
	let answers = [];
	let choices = [];
	let step = 1;
	let count = -1;
	let inputValue = '';
	let question = data.question[count];
	let name = '';
	let email = '';
	let phone = '';
	let category = '';
	let file = null;
	$: question = data.question[count];
	onMount(async () => {
		addQuestion();
	});
	const addQuestion = async (content, answer, type) => {
		if (count > -1)
			answers.push({
				answer,
				order: count,
				question: content,
				type
			});
		if (data.question.length === count + 1) {
			step = 1;
			return;
		}
		count++;
		inputValue = '';
		if (data.question[count].type === 'SELECT') await getChoice(data.question[count].id);
	};
	const addQuestionType = async (content, answer, type) => {
		category = answer;
		step = 2;
	};
	const getChoice = async (question_id) =>
		(choices = await fetch(`/api/choice/${question_id}`).then(async (data) => await data.json()));
	const typeQuestion = {
		content: '아래 다섯 가지 분야 중 어떤 분야에 대한 상담을 원하시나요?',
		choices: [
			{
				value: '전자',
				img: choice_elec
			},
			{
				value: '기계',
				img: choice_mec
			},
			{
				value: '화학',
				img: choice_chemi
			},
			{
				value: '바이오',
				img: choice_bio
			},
			{
				value: '기타',
				img: choice_etc
			}
		]
	};
	const addFile = async () => {
		const fileRes = await fetch('/api/file', {
			method: 'POST',
			body: JSON.stringify({
				file: [file]
			})
		}).then(async (data) => await data.json());
		console.log(fileRes);
		step = 3;
	};
	const submit = async () => {
		const body = {
			category,
			email,
			files: [
				{
					createdFile: '',
					originalFile: ''
				}
			],
			name,
			phoneNumber: phone,
			questionnaireId,
			responses: answers
		};
		const res = await fetch('/api/answer', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}).then(async (data) => await data.json());
		console.log(res);
	};
</script>

{#if step === 0}
	{#if count > -1}
		<div class="mt-8 text-center">
			<div class="w-full code-responsive-wrapper">
				<div
					class="w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-2 sm:p-6 space-y-4 text-[30px]"
				>
					{question.content}
				</div>
			</div>
			{#if question.type === 'TEXT'}
				<div class="relative p-4 code-syntax dark:border-gray-600">
					<div class="text-center rounded-t-md">
						<div>
							<label class="flex justify-center mb-5">
								<input
									bind:value={inputValue}
									type="text"
									class="w-[300px] h-[100px] text-sm leading-5.6 ease-soft block appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-gray-300 focus:outline-none"
								/>
							</label>
							<Button
								class="flex justify-center items-center"
								on:click={() => addQuestion(question.content, inputValue, question.type)}
								>입력</Button
							>
						</div>
					</div>
				</div>
			{:else if question.type === 'TEXTAREA'}
				<div class="relative p-4 code-syntax dark:border-gray-600">
					<div class="text-center rounded-t-md">
						<div>
							<label class="flex justify-center mb-5"
								><textarea
									bind:value={inputValue}
									class="w-[300px] h-[300px] leading-5.6 ease-soft block appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-gray-300 focus:outline-none"
								/>
							</label>
							<Button
								class="flex justify-center items-center"
								on:click={() => addQuestion(question.content, inputValue, question.type)}
								>입력</Button
							>
						</div>
					</div>
				</div>
			{:else if question.type === 'SELECT'}
				<div class="relative p-4 code-syntax dark:border-gray-600">
					<div class="grid w-full grid-cols-2 rounded-t-md">
						{#each choices as choice (choice.id)}
							<div class="mx-10 flex justify-center items-center mb-5">
								<Button
									class="flex justify-center items-center"
									on:click={() => addQuestion(question.content, choice.content, question.type)}
									>{choice.content}</Button
								>
							</div>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	{/if}
{:else if step === 1}
	<div class="mt-8 text-center">
		<div class="w-full code-responsive-wrapper">
			<div
				class="w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-2 sm:p-6 space-y-4 text-[30px]"
			>
				{typeQuestion.content}
			</div>
		</div>

		<div class="relative p-4 code-syntax dark:border-gray-600">
			<div class="grid w-full grid-cols-3 rounded-t-md">
				{#each typeQuestion.choices as choice}
					<div class="mx-10 flex justify-center items-center mb-5">
						<button
							on:click={async () =>
								await addQuestionType(typeQuestion.content, choice.value, 'SELECT')}
							><img src={choice.img} alt="" width="100" />{choice.value}</button
						>
					</div>
				{/each}
			</div>
		</div>
	</div>
{:else if step === 2}
	<div class="mt-8 text-center">
		<div class="w-full code-responsive-wrapper">
			<div
				class="w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-2 sm:p-6 space-y-4 text-[30px]"
			>
				마지막으로 파일을 첨부한 후, ‘완료’ 버튼을 눌러주세요. (PDF 파일만 가능합니다.)
				<small>파일이 없으신 분들은 바로 ‘완료’ 버튼을 누르시면 다음 화면으로 넘어갑니다.</small>
			</div>
		</div>

		<div class="relative p-4 code-syntax dark:border-gray-600">
			<div class="rounded-t-md">
				<div class="mb-5"><input type="file" bind:value={file} /></div>
				<Button on:click={async () => await addFile()}>추가</Button>
			</div>
		</div>
	</div>
{:else if step === 3}
	<div class="mt-8 text-center">
		<div class="w-full">
			<div
				class="w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-2 sm:p-6 space-y-4 text-[30px]"
			>
				회신 받으시고자 하는 분의 성함과 이메일 주소, 전화번호를 입력해주세요.
				<p>
					<small>이름과 자주 사용하시는 메일 주소를 입력하고, 전화번호를 정확하게 입력하세요.</small
					>
				</p>
			</div>
		</div>

		<div class="relative p-4 code-syntax dark:border-gray-600">
			<div class="relative p-4 code-syntax dark:border-gray-600">
				<form class="w-full rounded-t-md">
					<div class="flex justify-center items-center mb-3">
						<label for="name" class="text-start"
							>이름
							<div>
								<input
									bind:value={name}
									name="name"
									id="name"
									type="text"
									class="text-md leading-5.6 ease-soft block w-[400px] appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-gray-300 focus:outline-none"
								/>
							</div>
						</label>
					</div>

					<div class="flex justify-center items-center mb-3">
						<label for="email" class="text-start"
							>이메일
							<div>
								<input
									bind:value={email}
									name="email"
									id="email"
									type="text"
									class="text-md leading-5.6 ease-soft block w-[400px] appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-gray-300 focus:outline-none"
								/>
							</div>
						</label>
					</div>
					<div class="flex justify-center items-center mb-3">
						<label for="phone" class="text-start"
							>전화번호
							<div>
								<input
									bind:value={phone}
									name="phone"
									id="phone"
									placeholder="01012345678"
									type="text"
									class="text-md leading-5.6 ease-soft block w-[400px] appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-gray-300 focus:outline-none"
								/>
							</div>
						</label>
					</div>
					<div class="flex justify-center items-center mb-3">
						<Button class="flex justify-center items-center" on:click={async () => await submit()}
							>입력</Button
						>
					</div>
				</form>
			</div>
		</div>
	</div>
{/if}
