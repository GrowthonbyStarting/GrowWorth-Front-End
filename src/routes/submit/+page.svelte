<script>
	import { Heading, P, Button, Card } from 'flowbite-svelte';
</script>

<div class="text-center">
	<Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
		>특허등록 가능성검토 신청완료</Heading
	>
</div>

<div class="relative p-4 mt-5">
	<div
		class="grid w-full grid-cols-2 border-gray-200 rounded-t-md dark:bg-gray-700 dark:border-gray-600"
	>
		<div class="w-full">
			<h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Standard plan</h5>
			<div class="flex items-baseline text-gray-900 dark:text-white">
				<span class="text-3xl font-semibold">$</span>
				<span class="text-5xl font-extrabold tracking-tight">49</span>
				<span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
			</div>
			<!-- List -->
			<ul class="my-7 space-y-4">
				<li class="flex space-x-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 text-primary-600 dark:text-primary-500"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
					<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
						>2 team members</span
					>
				</li>
				<li class="flex space-x-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 text-primary-600 dark:text-primary-500"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
					<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
						>20GB Cloud storage</span
					>
				</li>
				<li class="flex space-x-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 text-primary-600 dark:text-primary-500"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
					<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
						>Integration help</span
					>
				</li>
				<li class="flex space-x-2 line-through decoration-gray-500">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 text-primary-600 dark:text-primary-500"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
					<span class="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
				</li>
				<li class="flex space-x-2 line-through decoration-gray-500">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 text-primary-600 dark:text-primary-500"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
					<span class="text-base font-normal leading-tight text-gray-500">API Access</span>
				</li>
				<li class="flex space-x-2 line-through decoration-gray-500">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 text-primary-600 dark:text-primary-500"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
					<span class="text-base font-normal leading-tight text-gray-500"
						>Complete documentation</span
					>
				</li>
				<li class="flex space-x-2 line-through decoration-gray-500">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 text-primary-600 dark:text-primary-500"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
					<span class="text-base font-normal leading-tight text-gray-500"
						>24×7 phone & email support</span
					>
				</li>
			</ul>
			<Button class="w-full">Choose plan</Button>
		</div>
		<div padding="none" class="w-full">
			<a href="/">
				<img
					class="p-8 rounded-t-lg"
					src="https://cdn.imweb.me/thumbnail/20190225/5c7341227d68b.png"
					alt="product 1"
				/>
			</a>
			<div class="px-5 pb-5">
				<a href="/">
					<h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
						Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
					</h5>
				</a>
				<div class="flex justify-between items-center">
					<span class="text-3xl font-bold text-gray-900 dark:text-white">$543</span>
					<Button href="/">Buy now</Button>
				</div>
			</div>
		</div>
	</div>
</div>
