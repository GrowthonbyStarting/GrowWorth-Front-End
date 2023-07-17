<script>
	import { Button } from 'flowbite-svelte';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import { Label, Input, InputAddon, ButtonGroup } from 'flowbite-svelte';
	export let data;
	let answer = data.answer;
	let item;
	let user;
	const view = async (answer_id) => {
		item = await fetch(`/api/answer/${answer_id}`).then(async (data) => await data.json());
		user = await fetch(`/api/user/${item.userId}`).then(async (data) => await data.json());
		console.log(item, user);
	};
</script>

<div>
	{#each answer as item}
		<Button on:click={async () => await view(item.id)} class="mx-2">
			{item.id}
		</Button>
	{/each}
</div>
{#if item && user}
	<Table>
		<TableHead>
			<TableHeadCell>신청 종류</TableHeadCell>
			<TableHeadCell>이름</TableHeadCell>
			<TableHeadCell>이메일</TableHeadCell>
			<TableHeadCell>전화번호</TableHeadCell>
		</TableHead>
		<TableBody class="divide-y">
			<TableBodyRow>
				<TableBodyCell>{item.questionnaire.title}</TableBodyCell>
				<TableBodyCell>{user.name}</TableBodyCell>
				<TableBodyCell>{user.eamil ?? ''}</TableBodyCell>
				<TableBodyCell>{user.phoneNumber}</TableBodyCell>
			</TableBodyRow>
		</TableBody>
	</Table>
{/if}
