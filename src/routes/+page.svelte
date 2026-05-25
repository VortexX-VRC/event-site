<script lang="ts">
  import logo from '$lib/assets/logo.webp';
  import './glitch.css';
  import * as Card from '$lib/components/ui/card/index.js';
  import * as Carousel from "$lib/components/ui/carousel/index.js";

  let { data } = $props();
</script>

<div class="w-full h-dvh bg-linear-to-b from-purple-500 to-black fixed top-0 left-0 -z-50"></div>
<div class="w-full h-screen place-content-center">
  <enhanced:img src={logo} alt="Hero logo" class="mx-auto" />
</div>
<div id="story" class="flex place-content-center h-dvh text-2xl">
  <div class="self-center align-middle items-center text-lg lg:text-2xl px-12">
    <h1 class="glitch layers font-bold my-4 text-4xl lg:text-6xl italic" data-text="STORY"><span>STORY</span></h1>
    <p class="mb-4 text-shadow-[0_10px_10px_rgb(0_0_0/0.5)]">
      次元の挟間に浮かぶ奇妙な店ーーその名もVortexX。<br/>
      其処は、時空の歪みに迷い込んだ者にしか辿り着けない幻の場所。
    </p>
    <p class="mb-4 text-shadow-[0_10px_10px_rgb(0_0_0/0.5)]">
      ありとあらゆる次元の狭間を漂いながら、訪ねる者を静かに迎え入れる。<br/>
      VortexXに住まうのは、各々の目的や信念のため、<br/>
      自らの意思でここに在住することを選んだ様々な者たち。
    </p>
    <p class="mb-4 text-shadow-[0_10px_10px_rgb(0_0_0/0.5)]">
      帰還船が到着するまでの間、貴方は彼らとともにひと時の奇妙な時間を共にする。<br/>
      この店では、あなた自身も彼らと物語を紡ぐ登場人物の一人となる。<br/>
      あなたはこの店で、どんな<span class="text-red-500 font-bold">出会い</span>と<span class="text-blue-500 font-bold">体験</span>をするのか？
    </p>
    <p>ーー今宵、次元の渦がまたひとつ開く。</p>
  </div>
</div>
<div id="info" class="flex place-content-center h-dvh">
  <div class="self-center align-middle items-center px-12">
    <h1 class="glitch layers font-bold my-4 text-4xl lg:text-6xl italic" data-text="INFO"><span>INFO</span></h1>
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
      <Card.Root class="backdrop-blur-lg bg-slate-600/30 drop-shadow-lg rounded-md">
        <Card.Header class="text-xl text-slate-400">
          開催日時
        </Card.Header>
        <Card.Content class="text-lg">
          <p>第○・第○火曜日 22:30 ~ 24:00</p>
          <p>リクイン開始 ○○:○○</p>
          <p>リクイン先は&nbsp;<a href="https://x.com/VortexX_VRC" class="anchor">@VortexX_VRC</a>&nbsp;をご確認ください</p>
        </Card.Content>
      </Card.Root>
      <Card.Root class="backdrop-blur-lg bg-slate-600/30 drop-shadow-lg rounded-md">
        <Card.Header class="text-xl text-slate-400">
          注意事項
        </Card.Header>
        <Card.Content class="text-lg">
          <p>・メンバーに触れる行為やNSFWに該当する行為はご遠慮ください。</p>
          <p>・営業の防げになる行為はご遠慮ください</p>
          <p>※不適切な行為を確認した際には、再び時空の挟間へと放流させて頂きます。ご了承ください。</p>
        </Card.Content>
      </Card.Root>
    </div>
  </div>
</div>
<div id="members" class="flex flex-col gap-2 py-4 px-12 place-content-center min-h-dvh">
  <div class="text-lg lg:text-2xl px-12">
    <h1 class="glitch layers font-bold my-4 text-4xl lg:text-6xl italic" data-text="MEMBERS"><span>MEMBERS</span></h1>
  </div>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 px-12">
    {#each data.cast as cast (cast.name)}
    <Card.Root class="backdrop-blur-lg bg-slate-600/50 drop-shadow-lg rounded-md max-w-72">
      <Card.Content>
        <enhanced:img src={cast.image} alt={cast.name} />
      </Card.Content>
    </Card.Root>
    {/each}
  </div>
</div>
<div id="videos" class="flex place-content-center h-dvh">
  <div class="text-lg lg:text-2xl px-12">
    <h1 class="glitch layers font-bold my-4 text-4xl lg:text-6xl italic" data-text="VIDEOS"><span>VIDEOS</span></h1>
  </div>
</div>
<div id="gallery" class="flex flex-col place-content-center h-dvh px-12">
  <div class="text-lg lg:text-2xl">
    <h1 class="glitch layers font-bold my-4 text-4xl lg:text-6xl italic" data-text="GALLERY"><span>GALLERY</span></h1>
  </div>
  <Carousel.Root>
    <Carousel.Content>
      {#each data.gallery as item (item.image)}
        <Carousel.Item>
          <div class="p-2 max-w-fit">
            <enhanced:img src={item.image} alt={item.caption} class="w-1/2" />
          </div>
        </Carousel.Item>
      {/each}
    </Carousel.Content>
    <Carousel.Previous />
    <Carousel.Next />
  </Carousel.Root>
</div>
