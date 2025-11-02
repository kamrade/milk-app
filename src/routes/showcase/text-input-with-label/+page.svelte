<script lang="ts">
  import { TextInput, Label, TextInputMessage } from 'milk-lib';
  import { Divider, PageTitle, Box } from "$lib";
</script>

<PageTitle>Text Input with Label</PageTitle>
<Divider/>

<Box underline>
  <Label forValue="test-input">Test label</Label>
  <TextInput id="test-input" />
  <TextInputMessage>Message under the text input</TextInputMessage>
</Box>

<Box>
  <Label forValue="input-inside-of-the-label">
    <p style="margin-bottom: 2rem;">Test label with large margin</p>
    <TextInput id="input-inside-of-the-label" />
  </Label>
</Box>
