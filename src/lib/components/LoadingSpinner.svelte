<div class="loading-section" role="status" aria-live="polite">
  <div class="loading-spinner" aria-hidden="true"></div>
  <p class="loading-text">Consultando informações...</p>
  <span class="sr-only">Carregando resultados da pesquisa</span>
</div>

<style>
  .loading-section {
    padding: 2.5rem 1.875rem;
    text-align: center;
  }
  
  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #667eea;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 1.25rem;
  }
  
  .loading-text {
    margin: 0;
    color: #666;
    font-size: 1.1rem;
  }
  
  @media (max-width: 768px) {
    .loading-section {
      padding: 1.875rem 1.25rem;
    }
    
    .loading-spinner {
      width: 40px;
      height: 40px;
      border-width: 3px;
    }
    
    .loading-text {
      font-size: 1rem;
    }
  }
</style>
