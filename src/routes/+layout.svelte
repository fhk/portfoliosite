<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  let currentRoute = '';
  $: currentRoute = $page.url.pathname;

  let productsDropdownOpen = false;

  function toggleProductsDropdown() {
    productsDropdownOpen = !productsDropdownOpen;
  }

  function closeDropdown() {
    productsDropdownOpen = false;
  }

  function navigateToProduct(path: string) {
    goto(path);
    closeDropdown();
  }
</script>

<div class="min-h-screen flex flex-col">
  <!-- Header -->
  <header class="bg-white shadow-sm border-b border-brand-200">
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <button 
        class="text-xl font-bold text-brand-900 hover:text-brand-700 transition-colors" 
        on:click={() => goto('/')}
      >
        Altman Solon
      </button>
      
      <div class="flex space-x-6">
        <button 
          class="px-4 py-2 rounded-md font-medium transition-colors {currentRoute === '/' ? 'bg-brand-100 text-brand-800' : 'text-brand-600 hover:text-brand-900'}" 
          on:click={() => goto('/')}
        >
          Home
        </button>
        <!-- Products Dropdown -->
        <div class="relative">
          <button
            class="px-4 py-2 rounded-md font-medium transition-colors inline-flex items-center gap-1 {currentRoute.startsWith('/products') ? 'bg-brand-100 text-brand-800' : 'text-brand-600 hover:text-brand-900'}"
            on:click={toggleProductsDropdown}
            on:mouseenter={() => productsDropdownOpen = true}
          >
            Products
            <svg class="w-4 h-4 transition-transform duration-200 {productsDropdownOpen ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>

          {#if productsDropdownOpen}
            <!-- Backdrop to close dropdown -->
            <button
              class="fixed inset-0 z-10 cursor-default"
              on:click={closeDropdown}
              aria-label="Close dropdown"
            ></button>

            <!-- Dropdown Menu -->
            <div
              class="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-lg border border-brand-100 py-3 z-20"
              on:mouseleave={closeDropdown}
            >
              <!-- All Products Link -->
              <button
                class="w-full text-left px-4 py-3 hover:bg-brand-50 transition-colors flex items-center gap-3 {currentRoute === '/products' ? 'bg-brand-50' : ''}"
                on:click={() => navigateToProduct('/products')}
              >
                <div class="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                </div>
                <div>
                  <div class="font-medium text-brand-900">All Products</div>
                  <div class="text-sm text-brand-500">View our full suite</div>
                </div>
              </button>

              <div class="border-t border-brand-100 my-2"></div>

              <!-- Arrow -->
              <button
                class="w-full text-left px-4 py-3 hover:bg-arrow-50 transition-colors flex items-center gap-3 {currentRoute === '/products/arrow' ? 'bg-arrow-50' : ''}"
                on:click={() => navigateToProduct('/products/arrow')}
              >
                <div class="w-10 h-10 bg-arrow-100 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 text-arrow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                </div>
                <div>
                  <div class="font-medium text-brand-900">Arrow</div>
                  <div class="text-sm text-brand-500">Network Infrastructure</div>
                </div>
              </button>

              <!-- HyperlocalAI -->
              <button
                class="w-full text-left px-4 py-3 hover:bg-hyperlocal-50 transition-colors flex items-center gap-3 {currentRoute === '/products/hyperlocal' ? 'bg-hyperlocal-50' : ''}"
                on:click={() => navigateToProduct('/products/hyperlocal')}
              >
                <div class="w-10 h-10 bg-hyperlocal-100 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 text-hyperlocal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <div class="font-medium text-brand-900">HyperlocalAI</div>
                  <div class="text-sm text-brand-500">Customer Intelligence</div>
                </div>
              </button>

              <!-- PrismAI -->
              <button
                class="w-full text-left px-4 py-3 hover:bg-prism-50 transition-colors flex items-center gap-3 {currentRoute === '/products/prism' ? 'bg-prism-50' : ''}"
                on:click={() => navigateToProduct('/products/prism')}
              >
                <div class="w-10 h-10 bg-prism-100 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 text-prism-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <div>
                  <div class="font-medium text-brand-900">PrismAI</div>
                  <div class="text-sm text-brand-500">Value Optimization</div>
                </div>
              </button>
            </div>
          {/if}
        </div>
        <button 
          class="px-4 py-2 rounded-md font-medium transition-colors {currentRoute === '/about' ? 'bg-brand-100 text-brand-800' : 'text-brand-600 hover:text-brand-900'}" 
          on:click={() => goto('/about')}
        >
          About
        </button>
      </div>
      
      <button class="bg-brand-800 hover:bg-brand-900 text-white px-6 py-2 rounded-md font-medium transition-colors">
        Contact
      </button>
    </nav>
  </header>
  
  <!-- Main Content -->
  <main class="flex-1">
    <slot />
  </main>
  
  <!-- Footer -->
  <footer class="bg-brand-900 text-white py-16 mt-2">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div>
          <h3 class="text-xl font-semibold mb-4">Altman Solon</h3>
          <p class="text-brand-300 mb-6">
            Leading B2B analytics platform for network optimization, 
            customer intelligence, and value maximization.
          </p>
          <!-- Social Links -->
          <div class="flex gap-4">
            <a href="https://linkedin.com/company/altman-solon" class="text-brand-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path>
              </svg>
            </a>
            <a href="https://twitter.com/altmansolon" class="text-brand-400 hover:text-white transition-colors" aria-label="Twitter">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="https://github.com/altman-solon" class="text-brand-400 hover:text-white transition-colors" aria-label="GitHub">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Products</h4>
          <ul class="space-y-2">
            <li><a href="/products/arrow" class="text-arrow-400 hover:text-arrow-300 transition-colors">Arrow - Network Optimization</a></li>
            <li><a href="/products/hyperlocal" class="text-hyperlocal-400 hover:text-hyperlocal-300 transition-colors">HyperlocalAI - Customer Intelligence</a></li>
            <li><a href="/products/prism" class="text-prism-400 hover:text-prism-300 transition-colors">PrismAI - Value Maximization</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Company</h4>
          <ul class="space-y-2 text-brand-300">
            <li><a href="/about" class="hover:text-white transition-colors">About Us</a></li>
            <li><a href="/careers" class="hover:text-white transition-colors">Careers</a></li>
            <li><a href="/news" class="hover:text-white transition-colors">News & Insights</a></li>
            <li><a href="/contact" class="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Security & Compliance</h4>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="bg-brand-800 text-brand-200 px-3 py-1 rounded-full text-sm">SOC 2</span>
            <span class="bg-brand-800 text-brand-200 px-3 py-1 rounded-full text-sm">ISO 27001</span>
            <span class="bg-brand-800 text-brand-200 px-3 py-1 rounded-full text-sm">GDPR Compliant</span>
          </div>
          <ul class="space-y-2 text-brand-300 text-sm">
            <li><a href="/privacy" class="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="/terms" class="hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      
      <!-- Bottom line with copyright -->
      <div class="border-t border-brand-700 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-brand-400 text-sm">
            © 2024 Altman Solon. All rights reserved.
          </p>
          <p class="text-brand-400 text-sm mt-4 md:mt-0">
            Transforming telecommunications through advanced analytics
          </p>
        </div>
      </div>
    </div>
  </footer>
</div>