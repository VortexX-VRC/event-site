<script lang="ts">
  let { data } = $props();
</script>

<div class="w-full h-screen bg-linear-65 from-purple-500 to-pink-500">
</div>
<div class="container mx-auto">
  {#each data.cast as cast (cast.name)}
    <ul>
      <li>
        {cast.name}
      </li>
    </ul>
  {/each}
</div>