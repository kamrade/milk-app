<script lang="ts">
	import '../app.css';
	import { type Snippet } from "svelte";
	import favicon from '$lib/assets/favicon.svg';
	import { type INavigationItem } from './nav-data';

	import { SidebarGroupTitle, SidebarLink, ThemeProvider, themeDefault } from "milk-lib";
  import { Header } from '$lib';

	let { children, data } : { children: Snippet; data: { navigationData: INavigationItem[] } } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ThemeProvider theme={themeDefault}>
  
  <Header></Header>
  
  <div style="height: 300vh;">
    <div class="container mx-auto">
      <div class="flex flex-1">
          <!-- Sidebar -->
          <aside class="py-4 hidden md:block" style="width: 320px; min-width: 320px;">
            <nav class="navigation">
              <ul class="space-y-2">

                {#each data.navigationData as navItem (navItem.label + crypto.randomUUID())}
                  {#if navItem.type === 'heading'}
                    <SidebarGroupTitle>{navItem.label}</SidebarGroupTitle>
                  {:else}
                    <SidebarLink link={ navItem?.link || '' }>{navItem.label}</SidebarLink>
                  {/if}
                {/each}


              </ul>
            </nav>
          </aside>

          <!-- Main content -->
          <main class="flex-1 p-6">
            {@render children()}
          </main>
        </div>
    </div>
  </div>
</ThemeProvider>