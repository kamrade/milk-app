<script lang="ts">
  import { TextInputBlock } from 'milk-lib';
  import { CheckboxCircleFillSystem, ArrowRightSLineArrows, ArrowDownSLineArrows } from 'svelte-remix';
  import { Divider, PageTitle, Title, Box } from '$lib';
</script>

<PageTitle>Text Input Block</PageTitle>
<Divider/>


<Box>
  <TextInputBlock size='lg' placeholder="Text Input with snippets" variant="underlined">
    {#snippet prefix()}
      <CheckboxCircleFillSystem size="1em"/>
    {/snippet}
    {#snippet suffix()}
      <ArrowRightSLineArrows size="1em" />
    {/snippet}
  </TextInputBlock>
</Box>

<Box>
  <TextInputBlock size='lg' variant="contained" placeholder="Text Input Contained with snippets">
    {#snippet suffix()}
      <ArrowDownSLineArrows size="1em" />
    {/snippet}
  </TextInputBlock>
</Box>
