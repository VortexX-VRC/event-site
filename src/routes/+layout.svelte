<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import logo from '$lib/assets/logo.webp';

	let { children } = $props();
	const navHover = `w-auto md:w-32 justify-center transition bg-linear-to-b hover:from-fuchsia-500 hover:to-purple-800 hover:bg-fuchsia-800]`;
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<NavigationMenu.Root class="py-1 w-full max-w-full overflow-x-hidden fixed bg-linear-to-b/oklch from-(--navbar-colour) to-black/0 backdrop-blur-md z-10">
  <div class="nav-logo me-2"><img src={logo} alt="logo" /></div>
  <NavigationMenu.List class="text-xl place-content-center">
    <NavigationMenu.Item>
      <NavigationMenu.Link href="#story" class={navHover}>
        ストーリ
      </NavigationMenu.Link>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Link href="#info" class={navHover}>
        イベント情報
      </NavigationMenu.Link>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Link href="#members" class={navHover}>
        メンバー
      </NavigationMenu.Link>
    </NavigationMenu.Item>
    <!-- <NavigationMenu.Item>
      <NavigationMenu.Link href="#videos" class={navHover}>
        動画
      </NavigationMenu.Link>
    </NavigationMenu.Item> -->
    <NavigationMenu.Item>
      <NavigationMenu.Link href="#gallery" class={navHover}>
        ギャラリー
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  </NavigationMenu.List>
</NavigationMenu.Root>
<div class="flex flex-col gap-4 font-[Kaisotai]">
  {@render children()}
</div>

<style>
.nav-logo img {
  width: 4rem;
  height: auto;
}
</style>
