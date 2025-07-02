<script>
  import { DEBOUNCE_DELAY } from '$lib/utils/constants.js';
  
  let { value = '', onInput } = $props();
  
  let debounceTimer = $state(null);
  
  function handleInput(event) {
    const newValue = event.target.value;
    
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    
    debounceTimer = setTimeout(() => {
      onInput(newValue);
    }, DEBOUNCE_DELAY);
  }
</script>

<div class="search-section">
  <div class="input-wrapper">
    <input
      type="text"
      placeholder="Digite um nome..."
      bind:value
      oninput={handleInput}
      class="name-input"
      autocomplete="off"
      aria-label="Campo para digitar nome"
    />
    <div class="input-underline"></div>
  </div>
</div>

<style>
  .search-section {
    padding: 2.5rem 1.875rem;
  }
  
  .input-wrapper {
    position: relative;
  }
  
  .name-input {
    width: 100%;
    padding: 1.25rem 0;
    font-size: 1.5rem;
    border: none;
    background: transparent;
    outline: none;
    color: #333;
    font-weight: 500;
    font-family: inherit;
  }
  
  .name-input::placeholder {
    color: #999;
    font-weight: 400;
  }
  
  .input-underline {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: left;
  }
  
  .name-input:focus + .input-underline {
    transform: scaleX(1);
  }
  
  @media (max-width: 768px) {
    .search-section {
      padding: 1.875rem 1.25rem;
    }
    
    .name-input {
      font-size: 1.3rem;
      padding: 0.9375rem 0;
    }
  }
</style>
