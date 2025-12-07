<script lang="ts">
  import { goto } from '$app/navigation';
  import Hero3D from '$lib/components/Hero3D.svelte';

  const features = [
    {
      title: '30% Cost Reduction',
      description: 'Optimize network routes, components, and CAPEX through intelligent planning',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      title: 'No Stranded Capital',
      description: 'Build where the market opportunity exists with data-driven investment decisions',
      icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7'
    },
    {
      title: 'Market Dynamics',
      description: 'Latest competition, demographic, and construction data for informed decisions',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
    },
    {
      title: 'Spatial Intelligence',
      description: 'Advanced geo-spatial analysis for optimal network topology design',
      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      title: 'Fiber Planning',
      description: 'End-to-end fiber network planning from central office to customer premise',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      title: 'Investment Optimization',
      description: 'Maximize ROI with intelligent capital allocation across network builds',
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
    }
  ];

  const capabilities = [
    'Real-time network performance monitoring',
    'Predictive maintenance and failure detection',
    'Automated route optimization algorithms',
    'Multi-scenario planning and simulation',
    'Integration with existing OSS/BSS systems',
    'Custom reporting and analytics dashboards'
  ];
</script>

<svelte:head>
  <title>Arrow - Network Infrastructure Optimization | Altman Solon</title>
  <meta name="description" content="Transform fiber planning, design, and investment decisions with Arrow's advanced optimization and spatial intelligence platform.">
</svelte:head>

<!-- Hero Section -->
<section class="min-h-screen bg-white flex items-center relative overflow-hidden">
  <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
    <div class="text-center lg:text-left">
      <!-- Tag -->
      <div class="inline-flex items-center gap-2 bg-arrow-100 text-arrow-700 px-3 py-1 rounded-full text-sm font-medium mb-8">
        <span class="w-2 h-2 bg-arrow-500 rounded-full"></span>
        Network Infrastructure
      </div>

      <h1 class="text-6xl md:text-8xl font-light text-brand-900 mb-8 leading-[0.9] tracking-tight">
        Arrow
        <span class="block font-medium italic text-arrow-600">Infrastructure</span>
      </h1>

      <p class="text-xl text-brand-600 mb-12 max-w-lg leading-relaxed">
        Network infrastructure platform that transforms fiber planning, design, and investment decisions through advanced optimization and spatial intelligence.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 mb-16">
        <button
          class="group inline-flex items-center justify-center gap-2 bg-arrow-600 hover:bg-arrow-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300"
        >
          Schedule Demo
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </button>
        <button
          class="group inline-flex items-center justify-center gap-2 border border-arrow-300 hover:border-arrow-600 text-arrow-700 hover:text-arrow-800 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300"
        >
          View Case Study
          <svg class="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        </button>
      </div>

      <!-- Metrics -->
      <div class="grid grid-cols-3 gap-8 max-w-md">
        <div class="text-left">
          <div class="text-3xl font-light text-arrow-600 mb-1">30%</div>
          <div class="text-sm text-brand-500 uppercase tracking-wide">Cost Reduction</div>
        </div>
        <div class="text-left">
          <div class="text-3xl font-light text-arrow-600 mb-1">99.9%</div>
          <div class="text-sm text-brand-500 uppercase tracking-wide">Uptime</div>
        </div>
        <div class="text-left">
          <div class="text-3xl font-light text-arrow-600 mb-1">45%</div>
          <div class="text-sm text-brand-500 uppercase tracking-wide">Faster Deployment</div>
        </div>
      </div>
    </div>

    <div class="flex justify-center lg:justify-end">
      <Hero3D width={600} height={450} />
    </div>
  </div>
</section>

<!-- Features Section -->
<section class="py-32 bg-brand-50">
  <div class="container mx-auto px-6">
    <div class="text-center mb-20">
      <div class="inline-flex items-center gap-2 bg-white text-arrow-700 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-sm">
        <span class="w-2 h-2 bg-arrow-500 rounded-full"></span>
        Core Capabilities
      </div>

      <h2 class="text-5xl md:text-6xl font-light text-brand-900 mb-8 leading-tight">
        Intelligent Network
        <span class="block font-medium italic">Planning</span>
      </h2>

      <p class="text-xl text-brand-600 max-w-2xl mx-auto leading-relaxed">
        Arrow combines spatial intelligence with advanced optimization algorithms to transform how you plan, build, and operate network infrastructure.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each features as feature}
        <div class="bg-white rounded-2xl p-8 border border-brand-100 hover:shadow-lg transition-all duration-300 group">
          <div class="w-14 h-14 bg-arrow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-7 h-7 text-arrow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="{feature.icon}"></path>
            </svg>
          </div>
          <h3 class="text-xl font-medium text-brand-900 mb-3">{feature.title}</h3>
          <p class="text-brand-600 leading-relaxed">{feature.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Capabilities Section -->
<section class="py-32 bg-white">
  <div class="container mx-auto px-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <div class="inline-flex items-center gap-2 bg-arrow-100 text-arrow-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <span class="w-2 h-2 bg-arrow-500 rounded-full"></span>
          Platform Features
        </div>

        <h2 class="text-4xl md:text-5xl font-light text-brand-900 mb-8 leading-tight">
          Enterprise-Grade
          <span class="block font-medium italic">Infrastructure</span>
        </h2>

        <p class="text-xl text-brand-600 mb-10 leading-relaxed">
          Arrow provides a comprehensive suite of tools designed for telecommunications professionals who demand precision and reliability.
        </p>

        <div class="space-y-4">
          {#each capabilities as capability}
            <div class="flex items-center gap-4">
              <div class="w-6 h-6 bg-arrow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-3 h-3 text-arrow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <span class="text-brand-700">{capability}</span>
            </div>
          {/each}
        </div>
      </div>

      <div class="bg-arrow-50 rounded-3xl p-10 border border-arrow-100">
        <div class="bg-white rounded-2xl p-8 shadow-sm">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 bg-arrow-100 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-arrow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-medium text-brand-900">Real-Time Dashboard</h3>
              <p class="text-sm text-brand-500">Monitor and optimize in one view</p>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-sm text-brand-600">Network Efficiency</span>
              <span class="text-sm font-medium text-arrow-600">94%</span>
            </div>
            <div class="w-full bg-brand-100 rounded-full h-2">
              <div class="bg-arrow-500 h-2 rounded-full" style="width: 94%"></div>
            </div>
            <div class="flex justify-between items-center mt-4">
              <span class="text-sm text-brand-600">Cost Optimization</span>
              <span class="text-sm font-medium text-arrow-600">87%</span>
            </div>
            <div class="w-full bg-brand-100 rounded-full h-2">
              <div class="bg-arrow-500 h-2 rounded-full" style="width: 87%"></div>
            </div>
            <div class="flex justify-between items-center mt-4">
              <span class="text-sm text-brand-600">Coverage Accuracy</span>
              <span class="text-sm font-medium text-arrow-600">99%</span>
            </div>
            <div class="w-full bg-brand-100 rounded-full h-2">
              <div class="bg-arrow-500 h-2 rounded-full" style="width: 99%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="py-24 bg-arrow-600">
  <div class="container mx-auto px-6 text-center">
    <h2 class="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
      Ready to Transform Your
      <span class="block font-medium italic">Network Infrastructure?</span>
    </h2>

    <p class="text-xl text-arrow-100 mb-12 max-w-2xl mx-auto leading-relaxed">
      Join telecommunications leaders who have transformed their network operations with Arrow's intelligent infrastructure platform.
    </p>

    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <button class="group inline-flex items-center justify-center gap-2 bg-white hover:bg-brand-50 text-arrow-700 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300">
        Get Started
        <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </button>
      <button class="group inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300">
        Contact Sales
        <svg class="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      </button>
    </div>
  </div>
</section>
