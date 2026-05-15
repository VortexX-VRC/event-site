<script lang="ts">
  import logo from '$lib/assets/logo.webp';

  let { data } = $props();
</script>

<div class="w-full h-screen bg-linear-to-b from-purple-500 to-black">
  <enhanced:img src={logo} />
</div>
<div id="story" class="flex place-content-center bg-fuchsia-900 h-dvh mask-radial-at-center mask-radial-from-10%">
  <div class="self-center align-middle items-center text-2xl text-shadow-[0_10px_10px_rgb(0_0_0/0.5)]">
    <h1 class="font-bold my-4 text-6xl italic">STORY</h1>
    <p class="mb-4">
      次元の挟間に浮かぶ奇妙な店ーーその名もVortexX。<br/>
      其処は、時空の歪みに迷い込んだ者にしか辿り着けない幻の場所。
    </p>
    <p class="mb-4">
      ありとあらゆる次元の狭間を漂いながら、訪ねる者を静かに迎え入れる。<br/>
      VortexXに住まうのは、各々の目的や信念のため、<br/>
      自らの意思でここに在住することを選んだ様々な者たち。
    </p>
    <p class="mb-4">
      帰還船が到着するまでの間、貴方は彼らとともにひと時の奇妙な時間を共にする。<br/>
      この店では、あなた自身も彼らと物語を紡ぐ登場人物の一人となる。<br/>
      あなたはこの店で、どんな<span class="text-red-500 font-bold">出会い</span>と<span class="text-blue-500 font-bold">体験</span>をするのか？
    </p>
    <p>ーー今宵、次元の渦がまたひとつ開く。</p>
  </div>
</div>
<div id="info" class="flex place-content-center h-dvh">
  Info
</div>
<div id="members" class="flex place-content-center h-dvh">
  {#each data.cast as cast (cast.name)}
  <ul>
    <li>
      {cast.name}
    </li>
  </ul>
  {/each}
</div>
<div id="videos" class="flex place-content-center h-dvh">
  Videos
</div>
<div id="gallery" class="flex place-content-center h-dvh">
  Gallery
</div>
