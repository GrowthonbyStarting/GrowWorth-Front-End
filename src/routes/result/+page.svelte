<script>
	import { Label, Input, InputAddon, ButtonGroup } from 'flowbite-svelte';
	export let data;
	let answer = data.answer;
	let item;
	const view = async (answer_id) => {
		item = await fetch(`/api/answer/${answer_id}`).then(async (data) => await data.json());
		console.log(item);
	};
</script>

{#each answer as item}
	<button on:click={async () => await view(item.id)}>
		{item.userId}
	</button>
{/each}
