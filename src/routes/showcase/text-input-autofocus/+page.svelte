<script lang="ts">
  import { TextInput, TextInputMessage } from "milk-lib";
  import { Divider, PageTitle, Title, Box } from '$lib';

	let textInputValue = $state('');

</script>

<PageTitle>Text Input Primitive</PageTitle>
<Divider/>

<Box>
  <Title>TextInput with autofocus</Title>
  <TextInput bind:value={textInputValue} placeholder="Your text" autoFocus />
  <TextInputMessage>Current value: {textInputValue}</TextInputMessage>
</Box>
