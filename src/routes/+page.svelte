<script lang="ts">
  import Hero3D from '$lib/components/Hero3D.svelte';
  import { goto } from '$app/navigation';
  
  // Client logos for trust indicators
  const clients = [
    'Verizon', 'AT&T', 'T-Mobile', 'Vodafone', 'Orange', 'Deutsche Telekom'
  ];
  
  function navigateToProduct(productId: string) {
    goto(`/products/${productId}`);
  }
</script>

<svelte:head>
  <title>Altman Solon - B2B Analytics Platform Portfolio</title>
  <meta name="description" content="Leading B2B analytics platform featuring Arrow, HyperlocalAI, and PrismAI for network optimization, customer intelligence, and value maximization.">
</svelte:head>

<!-- Hero Section -->
<section class="min-h-screen bg-white flex items-center relative overflow-hidden">
  <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
    <div class="text-center lg:text-left">
      <!-- Tag -->
      <div class="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-sm font-medium mb-8">
        <span class="w-2 h-2 bg-brand-400 rounded-full"></span>
        Enterprise Analytics Platform
      </div>
      
      <h1 class="text-6xl md:text-8xl font-light text-brand-900 mb-8 leading-[0.9] tracking-tight">
        Transform with
        <span class="block font-medium italic">Intelligence</span>
      </h1>
      
      <p class="text-xl text-brand-600 mb-12 max-w-lg leading-relaxed">
        Advanced analytics delivering measurable transformation for telecommunications and enterprise leaders.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 mb-16">
        <button 
          class="group inline-flex items-center justify-center gap-2 border border-brand-900 hover:border-brand-800 text-brand-700 hover:text-brand-900 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300"
          on:click={() => goto('/products')}
        >
          Explore Solutions
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </button>
        <button 
          class="group inline-flex items-center justify-center gap-2 border border-brand-300 hover:border-brand-900 text-brand-700 hover:text-brand-900 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300"
        >
          Schedule Call
          <svg class="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12l4 4 4-4"></path>
          </svg>
        </button>
      </div>
      
      <!-- Metrics -->
      <div class="grid grid-cols-3 gap-8 max-w-md">
        <div class="text-left">
          <div class="text-3xl font-light text-arrow-600 mb-1">4×</div>
          <div class="text-sm text-brand-500 uppercase tracking-wide">Lead Quality</div>
        </div>
        <div class="text-left">
          <div class="text-3xl font-light text-hyperlocal-600 mb-1">50%</div>
          <div class="text-sm text-brand-500 uppercase tracking-wide">Cost Reduction</div>
        </div>
        <div class="text-left">
          <div class="text-3xl font-light text-prism-600 mb-1">35%</div>
          <div class="text-sm text-brand-500 uppercase tracking-wide">Value Increase</div>
        </div>
      </div>
    </div>
    
    <div class="flex justify-center lg:justify-end">
      <Hero3D width={600} height={450} />
    </div>
  </div>
</section>

<!-- Industry Challenges Section -->
<section class="py-24 bg-brand-50">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <div class="inline-flex items-center gap-2 bg-white text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
        <span class="w-2 h-2 bg-brand-400 rounded-full"></span>
        Industry Transformation
      </div>
      <h2 class="text-4xl md:text-5xl font-light text-brand-900 mb-6">
        A Transformative Shift
        <span class="block font-medium italic">Is Reshaping TMT</span>
      </h2>
      <p class="text-xl text-brand-600 max-w-3xl mx-auto leading-relaxed">
        Clients face intense pressure across multiple fronts, demanding new approaches to compete and grow.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Allocate Capital -->
      <div class="bg-white rounded-2xl p-8 border border-brand-100 hover:shadow-lg transition-all duration-300 group">
        <div class="w-14 h-14 bg-arrow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <svg class="w-7 h-7 text-arrow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3v18h18"></path>
          </svg>
        </div>
        <h3 class="text-xl font-medium text-brand-900 mb-3">Allocate Capital with Precision & Speed</h3>
        <p class="text-brand-600 leading-relaxed">Strategic investment decisions require real-time insights and rapid deployment capabilities to capture market opportunities.</p>
      </div>

      <!-- Compete in Markets -->
      <div class="bg-white rounded-2xl p-8 border border-brand-100 hover:shadow-lg transition-all duration-300 group">
        <div class="w-14 h-14 bg-hyperlocal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <svg class="w-7 h-7 text-hyperlocal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h3 class="text-xl font-medium text-brand-900 mb-3">Compete in Saturated & Stalled Markets</h3>
        <p class="text-brand-600 leading-relaxed">Finding growth in mature markets demands differentiation and precision targeting to outmaneuver established competitors.</p>
      </div>

      <!-- Retain Customers -->
      <div class="bg-white rounded-2xl p-8 border border-brand-100 hover:shadow-lg transition-all duration-300 group">
        <div class="w-14 h-14 bg-prism-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <svg class="w-7 h-7 text-prism-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        </div>
        <h3 class="text-xl font-medium text-brand-900 mb-3">Retain & Grow Customer Base</h3>
        <p class="text-brand-600 leading-relaxed">Customer loyalty requires personalized engagement and proactive retention strategies powered by deep behavioral insights.</p>
      </div>

      <!-- Fragmented Data -->
      <div class="bg-white rounded-2xl p-8 border border-brand-100 hover:shadow-lg transition-all duration-300 group">
        <div class="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <svg class="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
          </svg>
        </div>
        <h3 class="text-xl font-medium text-brand-900 mb-3">Navigate Fragmented & Incomplete Data</h3>
        <p class="text-brand-600 leading-relaxed">Complex decisions suffer from data silos, quality gaps, and information overload that obscure critical insights.</p>
      </div>

      <!-- Deploy AI -->
      <div class="bg-white rounded-2xl p-8 border border-brand-100 hover:shadow-lg transition-all duration-300 group">
        <div class="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <svg class="w-7 h-7 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v1m0 0v1m0-1h1m-1 0H11"></path>
          </svg>
        </div>
        <h3 class="text-xl font-medium text-brand-900 mb-3">Deploy AI at Scale</h3>
        <p class="text-brand-600 leading-relaxed">AI transformation is hindered by insufficient infrastructure, governance frameworks, and specialized talent to drive adoption.</p>
      </div>

      <!-- Solutions CTA -->
      <div class="bg-gradient-to-br from-brand-100 to-brand-50 rounded-2xl p-8 border border-brand-200 flex flex-col items-center justify-center text-center">
        <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
          <svg class="w-7 h-7 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <h3 class="text-xl font-medium text-brand-900 mb-3">We Have the Solutions</h3>
        <p class="text-brand-600 leading-relaxed">Our analytics platform addresses each challenge with proven, enterprise-grade capabilities.</p>
      </div>
    </div>
  </div>
</section>

<!-- Client Trust Indicators -->
<section class="py-24 bg-white">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <div class="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
        <span class="w-2 h-2 bg-brand-400 rounded-full"></span>
        Trusted Partners
      </div>
      <h2 class="text-4xl font-light text-brand-900 mb-4">
        Global Leaders
        <span class="block font-medium italic">Choose Us</span>
      </h2>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {#each clients as client}
        <div class="group text-center">
          <div class="bg-brand-50 hover:bg-white rounded-2xl p-6 h-20 flex items-center justify-center transition-all duration-300 border border-brand-100 group-hover:shadow-sm">
            <span class="text-base font-medium text-brand-600 group-hover:text-brand-900 transition-colors">{client}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Featured Products -->
<section class="py-32 bg-brand-50">
  <div class="container mx-auto px-6">
    <div class="text-center mb-20">
      <div class="inline-flex items-center gap-2 bg-white text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-sm">
        <span class="w-2 h-2 bg-brand-400 rounded-full"></span>
        Three Core Solutions
      </div>
      
      <h2 class="text-5xl md:text-6xl font-light text-brand-900 mb-8 leading-tight">
        Enterprise Analytics
        <span class="block font-medium italic">Suite</span>
      </h2>
      
      <p class="text-xl text-brand-600 max-w-2xl mx-auto leading-relaxed">
        Specialized solutions designed to drive transformation across telecommunications and enterprise operations.
      </p>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Arrow - Network Optimization -->
      <div class="bg-white rounded-3xl p-8 group hover:shadow-lg transition-all duration-300 border border-brand-100 flex flex-col">
        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mb-6">
          <span class="inline-flex items-center gap-1.5 bg-arrow-100 text-arrow-700 px-3 py-1 rounded-full text-xs font-medium">
            <span class="w-1.5 h-1.5 bg-arrow-500 rounded-full"></span>
            Infrastructure
          </span>
          <span class="inline-flex items-center gap-1.5 bg-arrow-100 text-arrow-700 px-3 py-1 rounded-full text-xs font-medium">
            <span class="w-1.5 h-1.5 bg-arrow-500 rounded-full"></span>
            Planning & Design
          </span>
          <span class="inline-flex items-center gap-1.5 bg-arrow-100 text-arrow-700 px-3 py-1 rounded-full text-xs font-medium">
            <span class="w-1.5 h-1.5 bg-arrow-500 rounded-full"></span>
            Outside Plant
          </span>
        </div>
        
        <h3 class="text-3xl font-light text-brand-900 mb-3">Arrow</h3>
        <p class="text-lg text-brand-600 mb-8 font-light leading-relaxed flex-grow">
          Network infrastructure platform that transforms fiber planning, design, and investment decisions through advanced optimization and spatial intelligence.
        </p>

        <div class="space-y-4 mb-10 mt-auto">
          <div class="flex items-start gap-3">
            <div class="w-1.5 h-1.5 bg-arrow-500 rounded-full mt-2.5 flex-shrink-0"></div>
            <div>
              <div class="font-medium text-brand-900">30% Cost Reduction</div>
              <div class="text-sm text-brand-500">Network Routes, components, CAPEX</div>f
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-1.5 h-1.5 bg-arrow-500 rounded-full mt-2.5 flex-shrink-0"></div>
            <div>
              <div class="font-medium text-brand-900">No Stranded Capital</div>
              <div class="text-sm text-brand-500">Build where the market oppotunity is</div>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-1.5 h-1.5 bg-arrow-500 rounded-full mt-2.5 flex-shrink-0"></div>
            <div>
              <div class="font-medium text-brand-900">Market Dynamics</div>
              <div class="text-sm text-brand-500">The latest competition, demographic and construction data</div>
            </div>
          </div>
        </div>
        
        <button 
          class="group w-full inline-flex items-center justify-center gap-2 bg-arrow-600 hover:bg-arrow-700 text-white py-4 rounded-full font-medium transition-all duration-300"
          on:click={() => navigateToProduct('arrow')}
        >
          Explore Arrow
          <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </button>
      </div>
      
      <!-- HyperlocalAI - Customer Intelligence -->
      <div class="bg-white rounded-3xl p-8 group hover:shadow-lg transition-all duration-300 border border-brand-100 flex flex-col">
        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mb-6">
          <span class="inline-flex items-center gap-1.5 bg-hyperlocal-100 text-hyperlocal-700 px-3 py-1 rounded-full text-xs font-medium">
            <span class="w-1.5 h-1.5 bg-hyperlocal-500 rounded-full"></span>
            Customer Intelligence
          </span>
          <span class="inline-flex items-center gap-1.5 bg-hyperlocal-100 text-hyperlocal-700 px-3 py-1 rounded-full text-xs font-medium">
            <span class="w-1.5 h-1.5 bg-hyperlocal-500 rounded-full"></span>
            AI/ML
          </span>
        </div>
        
        <h3 class="text-3xl font-light text-brand-900 mb-3">HyperlocalAI</h3>
        <p class="text-lg text-brand-600 mb-8 font-light leading-relaxed flex-grow">
          The end-to-end marketing analytics solution combining geolocation with operational performance levers for targeting to drive penetration.
        </p>

        <div class="space-y-4 mb-10 mt-auto">
          <div class="flex items-start gap-3">
            <div class="w-1.5 h-1.5 bg-hyperlocal-500 rounded-full mt-2.5 flex-shrink-0"></div>
            <div>
              <div class="font-medium text-brand-900">4× Lead Quality</div>
              <div class="text-sm text-brand-500">Qualified prospect improvement</div>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-1.5 h-1.5 bg-hyperlocal-500 rounded-full mt-2.5 flex-shrink-0"></div>
            <div>
              <div class="font-medium text-brand-900">65% Targeting Precision</div>
              <div class="text-sm text-brand-500">Geographic segmentation accuracy</div>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-1.5 h-1.5 bg-hyperlocal-500 rounded-full mt-2.5 flex-shrink-0"></div>
            <div>
              <div class="font-medium text-brand-900">Behavioral Modeling</div>
              <div class="text-sm text-brand-500">Predictive customer insights</div>
            </div>
          </div>
        </div>
        
        <button 
          class="group w-full inline-flex items-center justify-center gap-2 bg-hyperlocal-600 hover:bg-hyperlocal-700 text-white py-4 rounded-full font-medium transition-all duration-300"
          on:click={() => navigateToProduct('hyperlocal')}
        >
          Explore HyperlocalAI
          <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </button>
      </div>
      
      <!-- PrismAI - Value Maximization -->
      <div class="bg-white rounded-3xl p-8 group hover:shadow-lg transition-all duration-300 border border-brand-100 flex flex-col">
        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mb-6">
          <span class="inline-flex items-center gap-1.5 bg-prism-100 text-prism-700 px-3 py-1 rounded-full text-xs font-medium">
            <span class="w-1.5 h-1.5 bg-prism-500 rounded-full"></span>
            Value Optimization
          </span>
          <span class="inline-flex items-center gap-1.5 bg-prism-100 text-prism-700 px-3 py-1 rounded-full text-xs font-medium">
            <span class="w-1.5 h-1.5 bg-prism-500 rounded-full"></span>
            Enterprise
          </span>
        </div>
        
        <h3 class="text-3xl font-light text-brand-900 mb-3">PrismAI</h3>
        <p class="text-lg text-brand-600 mb-8 font-light leading-relaxed flex-grow">
          Generative AI driven solution that deaverages a customer base to find pockets of retention opportunity and build targeted GTM playbooks for each.
        </p>

        <div class="space-y-4 mb-10 mt-auto">
          <div class="flex items-start gap-3">
            <div class="w-1.5 h-1.5 bg-prism-500 rounded-full mt-2.5 flex-shrink-0"></div>
            <div>
              <div class="font-medium text-brand-900">35% Value Increase</div>
              <div class="text-sm text-brand-500">Customer lifetime value growth</div>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-1.5 h-1.5 bg-prism-500 rounded-full mt-2.5 flex-shrink-0"></div>
            <div>
              <div class="font-medium text-brand-900">50% Churn Reduction</div>
              <div class="text-sm text-brand-500">Customer retention improvement</div>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-1.5 h-1.5 bg-prism-500 rounded-full mt-2.5 flex-shrink-0"></div>
            <div>
              <div class="font-medium text-brand-900">AI Personalization</div>
              <div class="text-sm text-brand-500">Dynamic engagement optimization</div>
            </div>
          </div>
        </div>
        
        <button 
          class="group w-full inline-flex items-center justify-center gap-2 bg-prism-600 hover:bg-prism-700 text-white py-4 rounded-full font-medium transition-all duration-300"
          on:click={() => navigateToProduct('prism')}
        >
          Explore PrismAI
          <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="py-8 bg-white">
  <div class="container mx-auto px-6 text-center">
    <!-- Tag -->
    <div class="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
      <span class="w-2 h-2 bg-brand-400 rounded-full"></span>
      Ready to Transform
    </div>
    
    <h2 class="text-5xl md:text-6xl font-light text-brand-900 mb-8 leading-tight">
      Partner with
      <span class="block font-medium italic">Industry Leaders</span>
    </h2>
    
    <p class="text-xl text-brand-600 mb-12 max-w-2xl mx-auto leading-relaxed">
      Join telecommunications and enterprise leaders who choose our analytics platform for strategic transformation.
    </p>
    
    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <button class="group inline-flex items-center justify-center gap-2 bg-white hover:bg-brand-50 text-brand-900 hover:text-brand-800 border border-brand-900 hover:border-brand-800 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300">
        Schedule Consultation
        <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </button>
      <button class="group inline-flex items-center justify-center gap-2 border border-brand-300 hover:border-brand-900 text-brand-700 hover:text-brand-900 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300">
        Download Overview
        <svg class="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      </button>
    </div>
  </div>
</section>