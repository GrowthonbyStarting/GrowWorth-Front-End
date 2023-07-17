<script>
	import { Card } from 'flowbite-svelte';
	import box_in from '$lib/images/box_in.png';
	import box_out from '$lib/images/box_out.png';
	export let data;
</script>

<div class="grid lg:grid-cols-3">
	{#each data.questionnaire as questionnaire}
		<div style="background-image: url({box_in});" class="h-[384px] w-[357px] mx-auto">
			<a href={`/patent/${questionnaire.id}`} class="h-full w-full">
				<h5
					class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-full flex justify-center items-center"
				>
					{questionnaire.title}
				</h5>
			</a>
		</div>
	{/each}
</div>
