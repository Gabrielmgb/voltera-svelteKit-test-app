<script>
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  
  import PageHeader from '$lib/components/PageHeader.svelte';
  import SearchInput from '$lib/components/SearchInput.svelte';
  import ResultCard from '$lib/components/ResultCard.svelte';
  import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
  
  let { data } = $props();
  
  let inputValue = $state(data.name || '');
  let isLoading = $state(false);
  
  function handleInputChange(name) {
    updateURL(name);
  }
  
  function updateURL(name) {
    const url = new URL($page.url);
    
    if (name.trim() === '') {
      url.searchParams.delete('name');
    } else {
      url.searchParams.set('name', name.trim());
    }
    
    isLoading = true;
    goto(url.toString(), { 
      replaceState: true, 
      invalidateAll: true 
    }).finally(() => {
      isLoading = false;
    });
  }
  
  // Sincroniza o input com os dados quando a página carrega
  $effect(() => {
    inputValue = data.name || '';
    isLoading = false;
  });
</script>

<svelte:head>
  <title>Consulta de Nomes - Descubra origem e características</title>
  <meta name="description" content="Descubra a origem e características de nomes usando APIs públicas" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<main class="main-container">
  <div class="app-container">
    <PageHeader />
    
    <SearchInput 
      bind:value={inputValue} 
      onInput={handleInputChange} 
    />
    
    {#if isLoading}
      <LoadingSpinner />
    {:else if data.result}
      <ResultCard 
        name={data.name} 
        result={data.result} 
      />
    {:else if inputValue.trim() !== ''}
      <LoadingSpinner />
    {/if}
  </div>
</main>

<style>
  .main-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.25rem;
  }
  
  .app-container {
    width: 100%;
    max-width: 600px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    box-shadow: 0 50px 50px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    overflow: hidden;
    animation: fadeIn 0.6s ease;
  }
  
  @media (max-width: 768px) {
    .main-container {
      padding: 0.625rem;
    }
    
    .app-container {
      border-radius: 15px;
    }
  }
</style>
