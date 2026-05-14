<script lang="ts">
  let { data } = $props();
</script>

<div class="w-full">
  {#each data.cast as cast (cast.name)}
    <ul>
      <li>
        {cast.name}
      </li>
    </ul>
  {/each}
</div>