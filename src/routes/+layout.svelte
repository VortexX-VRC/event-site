<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher, setMode } from 'mode-watcher';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import logo from '$lib/assets/logo.webp';

	let { children } = $props();
	setMode('dark');
	const navHover = `w-auto md:w-32 justify-center transition bg-linear-to-b hover:from-fuchsia-500 hover:to-purple-800 hover:bg-fuchsia-800]`;
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<ModeWatcher />
<NavigationMenu.Root class="py-1 w-full max-w-full fixed bg-[url(/images/navbar.svg)] backdrop-blur-lg z-10">
  <div class="nav-logo me-2"><enhanced:img src={logo} alt="logo" /></div>
  <NavigationMenu.List>
    <NavigationMenu.Item>
      <NavigationMenu.Link class={navHover}>
        <a href="#story">ストーリ</a>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Link class={navHover}>
        <a href="#info">イベント情報</a>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Link class={navHover}>
        <a href="#members">メンバー</a>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Link class={navHover}>
        <a href="#videos">動画</a>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Link class={navHover}>
        <a href="#gallery">ギャラリー</a>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  </NavigationMenu.List>
</NavigationMenu.Root>
<div>
  {@render children()}
</div>

<style>
.nav-logo img {
  width: 4rem;
  height: auto;
}
</style>
