<script>
  import { formatCountries, formatGender } from '$lib/utils/formatters.js';
  
  let { name, result } = $props();
</script>

<div class="results-section">
  {#if result.error}
    <div class="error-card">
      <div class="error-icon" aria-hidden="true">⚠️</div>
      <p class="error-message">{result.error}</p>
    </div>
  {:else}
    <article class="result-card">
      <header class="result-header">
        <h2 class="result-title">Informações sobre "{name}"</h2>
      </header>
      
      <div class="result-content">
        <div class="info-item">
          <div class="info-icon" aria-hidden="true">🌍</div>
          <div class="info-details">
            <h3 class="info-title">Origem Provável</h3>
            <p class="info-description">{formatCountries(result.nationality?.country)}</p>
          </div>
        </div>
        
        <div class="info-item">
          <div class="info-icon" aria-hidden="true">👤</div>
          <div class="info-details">
            <h3 class="info-title">Gênero Provável</h3>
            <p class="info-description">{formatGender(result.gender)}</p>
          </div>
        </div>
      </div>
    </article>
  {/if}
</div>

<style>
  .results-section {
    padding: 0 1.875rem 2.5rem;
  }
  
  .result-card {
    background: white;
    border-radius: 15px;
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    animation: slideUp 0.5s ease;
  }
  
  .result-header {
    background: linear-gradient(135deg, #004526 0%, #1DB954 100%);
    color: white;
    padding: 1.5625rem 1.875rem;
  }
  
  .result-title {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
  }
  
  .result-content {
    padding: 1.875rem;
  }
  
  .info-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1.5625rem;
    padding: 1.25rem;
    background: #f8f9ff;
    border-radius: 12px;
    border-left: 4px solid #667eea;
  }
  
  .info-item:last-child {
    margin-bottom: 0;
  }
  
  .info-icon {
    font-size: 2rem;
    margin-right: 1.25rem;
    flex-shrink: 0;
  }
  
  .info-title {
    margin: 0 0 0.5rem;
    font-size: 1.2rem;
    color: #333;
    font-weight: 600;
  }
  
  .info-description {
    margin: 0;
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
  }
  
  .error-card {
    background: #fff5f5;
    border: 2px solid #fed7d7;
    border-radius: 12px;
    padding: 1.5625rem;
    text-align: center;
    animation: slideUp 0.5s ease;
  }
  
  .error-icon {
    font-size: 3rem;
    margin-bottom: 0.9375rem;
    display: block;
  }
  
  .error-message {
    margin: 0;
    color: #c53030;
    font-size: 1.1rem;
    font-weight: 500;
  }
  
  @media (max-width: 768px) {
    .results-section {
      padding: 0 1.25rem 1.875rem;
    }
    
    .result-content {
      padding: 1.25rem;
    }
    
    .info-item {
      padding: 0.9375rem;
      margin-bottom: 1.25rem;
    }
    
    .info-icon {
      font-size: 1.5rem;
      margin-right: 0.9375rem;
    }
    
    .info-title {
      font-size: 1.1rem;
    }
    
    .info-description {
      font-size: 0.9rem;
    }
  }
</style>
