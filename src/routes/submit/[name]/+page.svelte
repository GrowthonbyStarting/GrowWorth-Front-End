<script>
	import { Heading, P, Button, Card } from 'flowbite-svelte';
	import { page } from '$app/stores';
	export let data;
	let name = data.name;
	const exp = [
		'특허법인 ECM 대표변리사 (2016~)',
		'ECM특허법률사무소 대표변리사(2016~2020)',
		'인비전 특허법인 변리사 (2011~2016)',
		'특허법인 이상 변리사 (2009~2011)',
		'KISTA 표준특허센터 표준 전문가 (2017~)',
		'롯데엑셀레이터 멘토 (2017~)',
		'연세대학교 창업 선도 대학 창업 지원 육성 사업 외부 전문가(2016~)',
		'단국대학교 엔지니어링 디자인센터 전문가 (2016~)',
		'경기 북부 지식재산센터 G-IP 닥터 (2016~)',
		'청년창업사관학교 멘토 (2016~)',
		'특허법원소송구조 변리사 (2016~)',
		'조달청우수제품 심사위원 (2016~)',
		'지식재산경영인증 평가위원 (2016~)',
		'NIPA((national IT industry promotion agency) 평가위원 (2016~)',
		'CLO(chief logistics officer) 자문 변리사 (2016~)'
	];
</script>

<div class="text-center">
	<Heading tag="h4" class="mb-4" customSize="text-xl font-extrabold  md:text-2xl lg:text-3xl"
		>{name}님에게 김시우 변리사님이 매칭되었습니다</Heading
	>
</div>

<div class="relative p-4 mt-5">
	<div
		class="grid w-full grid-cols-2 border-gray-200 rounded-t-md dark:bg-gray-700 dark:border-gray-600"
	>
		<div class="w-full flex justify-end">
			<img
				class=" rounded-t-lg"
				src="https://cdn.imweb.me/upload/S201902155c665673286e8/5c7389ad88942.png"
				alt="product 1"
			/>
		</div>
		<div class="w-full mx-4">
			<ul class="my-7 space-y-4">
				{#each exp as ex}
					<li class="flex space-x-2">
						<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
							>{ex}</span
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
