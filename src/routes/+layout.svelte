<script>
	import '../app.css';
	import Navbar from '$components/layout/navbar.svelte';
</script>

<Navbar />
<div
	class="flex-auto min-w-0 lg:static lg:max-h-full lg:overflow-visible divide-y dark:divide-gray-700"
>
	<div
		class="overflow-hidden mx-auto max-w-8xl flex flex-col pt-6 sm:pt-8 lg:pt-16 pb-6 sm:pb-8 lg:pb-24 px-4 lg:px-20"
	>
		<slot />
	</div>
</div>
