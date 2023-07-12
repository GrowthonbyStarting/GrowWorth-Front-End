<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			특허의 신
		</span></NavBrand
	>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/">특허등록 가능성검토</NavLi>
		<NavLi href="/">국내 특허등록 신청</NavLi>
		<NavLi href="/">해외 특허등록 신청</NavLi>
		<NavLi href="/result">결과조회</NavLi>
	</NavUl>
</Navbar>
