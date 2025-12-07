<script lang="ts">
  import { goto } from '$app/navigation';
  import Hero3D from '$lib/components/Hero3D.svelte';

  const features = [
    {
      title: '35% Value Increase',
      description: 'Customer lifetime value growth through intelligent personalization',
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
    },
    {
      title: '50% Churn Reduction',
      description: 'Proactive retention strategies powered by predictive analytics',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
      title: 'AI Personalization',
      description: 'Dynamic engagement optimization tailored to each customer segment',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
    },
    {
      title: 'Retention Intelligence',
      description: 'Deep customer insights that identify at-risk segments before churn',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z'
    },
    {
      title: 'GTM Playbooks',
      description: 'Targeted go-to-market strategies for each customer cohort',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
    },
    {
      title: 'Generative AI',
      description: 'AI-driven insights that deaverage customer bases for precision targeting',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    }
  ];

  const capabilities = [
    'Advanced customer lifetime value modeling',
    'Predictive churn risk assessment',
    'AI-generated retention playbooks',
    'Cohort-based engagement strategies',
    'Real-time customer health scoring',
    'Automated intervention recommendations'
  ];

  const processSteps = [
    { number: '1', title: 'Analyze', description: 'Deep customer behavior analysis and value potential assessment' },
    { number: '2', title: 'Predict', description: 'AI-powered predictions for lifetime value and churn risk' },
    { number: '3', title: 'Personalize', description: 'Tailored engagement strategies for each customer segment' },
    { number: '4', title: 'Optimize', description: 'Continuous optimization to maximize customer value' }
  ];
</script>

<svelte:head>
  <title>PrismAI - Value Optimization | Altman Solon</title>
  <meta name="description" content="Generative AI driven solution that deaverages a customer base to find pockets of retention opportunity and build targeted GTM playbooks.">
</svelte:head>

<!-- Hero Section -->
<section class="min-h-screen bg-white flex items-center relative overflow-hidden">
  <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
    <div class="text-center lg:text-left">
      <!-- Tag -->
      <div class="inline-flex items-center gap-2 bg-prism-100 text-prism-700 px-3 py-1 rounded-full text-sm font-medium mb-8">
        <span class="w-2 h-2 bg-prism-500 rounded-full"></span>
        Value Optimization
      </div>

      <h1 class="text-6xl md:text-8xl font-light text-brand-900 mb-8 leading-[0.9] tracking-tight">
        PrismAI
        <span class="block font-medium italic text-prism-600">Retention</span>
      </h1>

      <p class="text-xl text-brand-600 mb-12 max-w-lg leading-relaxed">
        Generative AI driven solution that deaverages a customer base to find pockets of retention opportunity and build targeted GTM playbooks for each.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 mb-16">
        <button
          class="group inline-flex items-center justify-center gap-2 bg-prism-600 hover:bg-prism-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300"
        >
          Schedule Demo
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </button>
        <button
          class="group inline-flex items-center justify-center gap-2 border border-prism-300 hover:border-prism-600 text-prism-700 hover:text-prism-800 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300"
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
          <div class="text-3xl font-light text-prism-600 mb-1">35%</div>
          <div class="text-sm text-brand-500 uppercase tracking-wide">Value Increase</div>
        </div>
        <div class="text-left">
          <div class="text-3xl font-light text-prism-600 mb-1">50%</div>
          <div class="text-sm text-brand-500 uppercase tracking-wide">Churn Reduction</div>
        </div>
        <div class="text-left">
          <div class="text-3xl font-light text-prism-600 mb-1">85%</div>
          <div class="text-sm text-brand-500 uppercase tracking-wide">Personalization</div>
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
      <div class="inline-flex items-center gap-2 bg-white text-prism-700 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-sm">
        <span class="w-2 h-2 bg-prism-500 rounded-full"></span>
        Core Capabilities
      </div>

      <h2 class="text-5xl md:text-6xl font-light text-brand-900 mb-8 leading-tight">
        Intelligent Customer
        <span class="block font-medium italic">Value Management</span>
      </h2>

      <p class="text-xl text-brand-600 max-w-2xl mx-auto leading-relaxed">
        PrismAI leverages generative AI to understand your customer base at a granular level and build personalized retention strategies.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each features as feature}
        <div class="bg-white rounded-2xl p-8 border border-brand-100 hover:shadow-lg transition-all duration-300 group">
          <div class="w-14 h-14 bg-prism-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-7 h-7 text-prism-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

<!-- Process Section -->
<section class="py-32 bg-white">
  <div class="container mx-auto px-6">
    <div class="text-center mb-20">
      <div class="inline-flex items-center gap-2 bg-prism-100 text-prism-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
        <span class="w-2 h-2 bg-prism-500 rounded-full"></span>
        Our Methodology
      </div>

      <h2 class="text-5xl md:text-6xl font-light text-brand-900 mb-8 leading-tight">
        Value Maximization
        <span class="block font-medium italic">Process</span>
      </h2>

      <p class="text-xl text-brand-600 max-w-2xl mx-auto leading-relaxed">
        Our proven methodology transforms customer relationships into long-term value drivers.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each processSteps as step}
        <div class="text-center">
          <div class="w-16 h-16 bg-prism-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span class="text-2xl font-bold text-white">{step.number}</span>
          </div>
          <h3 class="text-xl font-medium text-prism-600 mb-3">{step.title}</h3>
          <p class="text-brand-600 leading-relaxed">{step.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Capabilities Section -->
<section class="py-32 bg-brand-50">
  <div class="container mx-auto px-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <div class="inline-flex items-center gap-2 bg-white text-prism-700 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-sm">
          <span class="w-2 h-2 bg-prism-500 rounded-full"></span>
          Platform Features
        </div>

        <h2 class="text-4xl md:text-5xl font-light text-brand-900 mb-8 leading-tight">
          Enterprise-Grade
          <span class="block font-medium italic">Value Platform</span>
        </h2>

        <p class="text-xl text-brand-600 mb-10 leading-relaxed">
          PrismAI provides customer success teams with the intelligence they need to maximize lifetime value and minimize churn.
        </p>

        <div class="space-y-4">
          {#each capabilities as capability}
            <div class="flex items-center gap-4">
              <div class="w-6 h-6 bg-prism-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-3 h-3 text-prism-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <span class="text-brand-700">{capability}</span>
            </div>
          {/each}
        </div>
      </div>

      <div class="bg-prism-50 rounded-3xl p-10 border border-prism-100">
        <div class="bg-white rounded-2xl p-8 shadow-sm">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 bg-prism-100 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-prism-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-medium text-brand-900">Value Dashboard</h3>
              <p class="text-sm text-brand-500">Customer health at a glance</p>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-sm text-brand-600">Customer Health Score</span>
              <span class="text-sm font-medium text-prism-600">89%</span>
            </div>
            <div class="w-full bg-brand-100 rounded-full h-2">
              <div class="bg-prism-500 h-2 rounded-full" style="width: 89%"></div>
            </div>
            <div class="flex justify-between items-center mt-4">
              <span class="text-sm text-brand-600">Retention Rate</span>
              <span class="text-sm font-medium text-prism-600">94%</span>
            </div>
            <div class="w-full bg-brand-100 rounded-full h-2">
              <div class="bg-prism-500 h-2 rounded-full" style="width: 94%"></div>
            </div>
            <div class="flex justify-between items-center mt-4">
              <span class="text-sm text-brand-600">Upsell Success</span>
              <span class="text-sm font-medium text-prism-600">78%</span>
            </div>
            <div class="w-full bg-brand-100 rounded-full h-2">
              <div class="bg-prism-500 h-2 rounded-full" style="width: 78%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="py-24 bg-prism-600">
  <div class="container mx-auto px-6 text-center">
    <h2 class="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
      Unlock Your Customer's
      <span class="block font-medium italic">True Value</span>
    </h2>

    <p class="text-xl text-prism-100 mb-12 max-w-2xl mx-auto leading-relaxed">
      Join enterprises who have maximized customer lifetime value with PrismAI's intelligent retention platform.
    </p>

    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <button class="group inline-flex items-center justify-center gap-2 bg-white hover:bg-brand-50 text-prism-700 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300">
        Start Optimization
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
