<script>
	import { Button } from 'flowbite-svelte';
</script>

<div class="mt-8 code-example">
	<div
		class="w-full p-4 border border-gray-200 bg-gray-50 rounded-t-xl dark:border-gray-600 dark:bg-gray-700"
	>
		<div class="grid grid-cols-2">
			<div>
				<Button>이전</Button>
			</div>
		</div>
	</div>
	<div class="code-preview-wrapper">
		<div
			class="flex p-0 bg-white border-gray-200 bg-gradient-to-r code-preview dark:bg-gray-900 border-x dark:border-gray-600"
		>
			<div class="w-full code-responsive-wrapper">
				<div class="w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-2 sm:p-6 space-y-4">
					혹시 이전에 특허를 내거나, 발명 아이디어를 기관에 제출해보신 경험이 있으신가요?
				</div>
			</div>
		</div>
	</div>
	<div class="code-syntax-wrapper">
		<div class="relative p-4 border-gray-200 border-y border-x code-syntax dark:border-gray-600">
			<div
				class="grid w-full grid-cols-2 border-gray-200 rounded-t-md dark:bg-gray-700 dark:border-gray-600"
			>
				<a href="/submit" class="mx-10">
					<Button class="w-full flex justify-center items-center">예</Button>
				</a>
				<a href="/submit" class="mx-10">
					<Button class="w-full flex justify-center items-center">아니오</Button>
				</a>
			</div>
		</div>
	</div>
</div>
