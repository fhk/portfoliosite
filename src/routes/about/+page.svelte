<script lang="ts">
  import Hero3D from '$lib/components/Hero3D.svelte';
</script>

<svelte:head>
  <title>About - Altman Solon</title>
  <meta name="description" content="Learn about Altman Solon's mission, team, and approach to B2B analytics transformation.">
</svelte:head>

<!-- Hero Section -->
<section class="min-h-screen bg-white flex items-center relative overflow-hidden">
  <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
    <div class="text-center lg:text-left">
      <!-- Tag -->
      <div class="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-sm font-medium mb-8">
        <span class="w-2 h-2 bg-brand-400 rounded-full"></span>
        About Altman Solon
      </div>
      
      <h1 class="text-6xl md:text-8xl font-light text-brand-900 mb-8 leading-[0.9] tracking-tight">
        Transforming
        <span class="block font-medium italic">Intelligence</span>
      </h1>
      
      <p class="text-xl text-brand-600 mb-12 max-w-lg leading-relaxed">
        Pioneers in B2B analytics transformation, unlocking data-driven intelligence for telecommunications and enterprise organizations worldwide.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 mb-16">
        <button class="group inline-flex items-center justify-center gap-2 border border-brand-900 hover:border-brand-800 text-brand-700 hover:text-brand-900 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300">
          Our Story
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </button>
        <button class="group inline-flex items-center justify-center gap-2 border border-brand-300 hover:border-brand-900 text-brand-700 hover:text-brand-900 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300">
          Meet the Team
          <svg class="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        </button>
      </div>
      
      <!-- Quick Stats -->
      <div class="grid grid-cols-3 gap-8 max-w-md">
        <div class="text-left">
          <div class="text-3xl font-light text-arrow-600 mb-1">15+</div>
          <div class="text-sm text-brand-500 uppercase tracking-wide">Years</div>
        </div>
        <div class="text-left">
          <div class="text-3xl font-light text-hyperlocal-600 mb-1">100+</div>
          <div class="text-sm text-brand-500 uppercase tracking-wide">Clients</div>
        </div>
        <div class="text-left">
          <div class="text-3xl font-light text-prism-600 mb-1">20+</div>
          <div class="text-sm text-brand-500 uppercase tracking-wide">Countries</div>
        </div>
      </div>
    </div>
    
    <div class="flex justify-center lg:justify-end">
      <Hero3D width={600} height={450} />
    </div>
  </div>
</section>

<!-- Mission Section -->
<section class="py-32 bg-brand-50">
  <div class="container mx-auto px-6">
    <div class="text-center mb-20">
      <div class="inline-flex items-center gap-2 bg-white text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-sm">
        <span class="w-2 h-2 bg-brand-400 rounded-full"></span>
        Core Values
      </div>
      
      <h2 class="text-5xl md:text-6xl font-light text-brand-900 mb-8 leading-tight">
        Our
        <span class="block font-medium italic">Mission</span>
      </h2>
      
      <p class="text-xl text-brand-600 max-w-2xl mx-auto leading-relaxed">
        Guided by three fundamental principles that shape every client engagement and drive our commitment to excellence.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <!-- Excellence -->
      <div class="bg-white rounded-3xl p-8 text-center group hover:shadow-lg transition-all duration-300 border border-brand-100">
        <div class="inline-flex items-center gap-1.5 bg-arrow-100 text-arrow-700 px-3 py-1 rounded-full text-xs font-medium mb-6">
          <span class="w-1.5 h-1.5 bg-arrow-500 rounded-full"></span>
          Excellence
        </div>
        
        <div class="w-16 h-16 bg-arrow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg class="w-8 h-8 text-arrow-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        
        <h3 class="text-2xl font-light text-brand-900 mb-4">World-Class Solutions</h3>
        <p class="text-brand-600 leading-relaxed">
          Delivering analytics solutions that exceed expectations and drive measurable business transformation across every engagement.
        </p>
      </div>
      
      <!-- Innovation -->
      <div class="bg-white rounded-3xl p-8 text-center group hover:shadow-lg transition-all duration-300 border border-brand-100">
        <div class="inline-flex items-center gap-1.5 bg-hyperlocal-100 text-hyperlocal-700 px-3 py-1 rounded-full text-xs font-medium mb-6">
          <span class="w-1.5 h-1.5 bg-hyperlocal-500 rounded-full"></span>
          Innovation
        </div>
        
        <div class="w-16 h-16 bg-hyperlocal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg class="w-8 h-8 text-hyperlocal-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        
        <h3 class="text-2xl font-light text-brand-900 mb-4">Cutting-Edge Technology</h3>
        <p class="text-brand-600 leading-relaxed">
          Pioneering AI and machine learning technologies to solve complex telecommunications and enterprise challenges.
        </p>
      </div>
      
      <!-- Partnership -->
      <div class="bg-white rounded-3xl p-8 text-center group hover:shadow-lg transition-all duration-300 border border-brand-100">
        <div class="inline-flex items-center gap-1.5 bg-prism-100 text-prism-700 px-3 py-1 rounded-full text-xs font-medium mb-6">
          <span class="w-1.5 h-1.5 bg-prism-500 rounded-full"></span>
          Partnership
        </div>
        
        <div class="w-16 h-16 bg-prism-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg class="w-8 h-8 text-prism-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m4-2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4z"/>
          </svg>
        </div>
        
        <h3 class="text-2xl font-light text-brand-900 mb-4">Long-term Relations</h3>
        <p class="text-brand-600 leading-relaxed">
          Building enduring partnerships with clients based on trust, transparency, and mutual success across global markets.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Team Section -->
<section class="py-32 bg-white">
  <div class="container mx-auto px-6">
    <div class="text-center mb-20">
      <div class="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
        <span class="w-2 h-2 bg-brand-400 rounded-full"></span>
        Global Expertise
      </div>
      
      <h2 class="text-5xl md:text-6xl font-light text-brand-900 mb-8 leading-tight">
        Expert
        <span class="block font-medium italic">Team</span>
      </h2>
      
      <p class="text-xl text-brand-600 max-w-2xl mx-auto leading-relaxed">
        Diverse team of data scientists, engineers, and business strategists with decades of experience in telecommunications and enterprise analytics.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
      <div class="bg-brand-50 rounded-3xl p-8 text-center group hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-brand-100">
        <div class="text-4xl font-light text-arrow-600 mb-2">50+</div>
        <div class="text-brand-600 font-medium">Expert Consultants</div>
        <div class="text-sm text-brand-500 mt-2">Global talent network</div>
      </div>
      
      <div class="bg-brand-50 rounded-3xl p-8 text-center group hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-brand-100">
        <div class="text-4xl font-light text-hyperlocal-600 mb-2">15+</div>
        <div class="text-brand-600 font-medium">Years Experience</div>
        <div class="text-sm text-brand-500 mt-2">Industry leadership</div>
      </div>
      
      <div class="bg-brand-50 rounded-3xl p-8 text-center group hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-brand-100">
        <div class="text-4xl font-light text-prism-600 mb-2">100+</div>
        <div class="text-brand-600 font-medium">Global Clients</div>
        <div class="text-sm text-brand-500 mt-2">Trusted partnerships</div>
      </div>
      
      <div class="bg-brand-50 rounded-3xl p-8 text-center group hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-brand-100">
        <div class="text-4xl font-light text-brand-600 mb-2">20+</div>
        <div class="text-brand-600 font-medium">Countries Served</div>
        <div class="text-sm text-brand-500 mt-2">Worldwide presence</div>
      </div>
    </div>
    
    <!-- Additional team insights -->
    <div class="mt-20 max-w-4xl mx-auto">
      <div class="bg-brand-50 rounded-3xl p-12 text-center">
        <h3 class="text-3xl font-light text-brand-900 mb-6">
          Diverse Expertise,
          <span class="font-medium italic">Unified Vision</span>
        </h3>
        <p class="text-lg text-brand-600 leading-relaxed max-w-2xl mx-auto">
          Our multidisciplinary team brings together specialists in data science, telecommunications engineering, business strategy, and analytics innovation. Each engagement benefits from this collective expertise, ensuring comprehensive solutions that address technical complexity and business impact.
        </p>
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
      Join Our Mission
    </div>
    
    <h2 class="text-5xl md:text-6xl font-light text-brand-900 mb-8 leading-tight">
      Transform Your
      <span class="block font-medium italic">Business</span>
    </h2>
    
    <p class="text-xl text-brand-600 mb-12 max-w-2xl mx-auto leading-relaxed">
      Join industry leaders who trust Altman Solon for strategic analytics transformation and measurable business results.
    </p>
    
    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <button class="group inline-flex items-center justify-center gap-2 bg-white hover:bg-brand-50 text-brand-900 hover:text-brand-800 border border-brand-900 hover:border-brand-800 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300">
        Get Started
        <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </button>
      <button class="group inline-flex items-center justify-center gap-2 border border-brand-300 hover:border-brand-900 text-brand-700 hover:text-brand-900 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300">
        Learn More
        <svg class="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </button>
    </div>
  </div>
</section>