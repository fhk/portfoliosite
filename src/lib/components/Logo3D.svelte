<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { detectWebGL, checkReducedMotion, getOptimalPixelDensity } from '$lib/webgl-utils';
  
  // Dynamic imports for client-side only
  let P5: any;
  let p5InstanceExtensions: any;
  
  export let width = 400;
  export let height = 300;
  export let interactive = true;
  export let showFallback = false;
  
  let webglSupported = false;
  let reducedMotion = false;
  let mouseInteracting = false;
  let p5Loaded = false;
  
  onMount(async () => {
    if (browser) {
      try {
        // Dynamically import p5-svelte only on client-side
        const p5Module = await import('p5-svelte');
        P5 = p5Module.default;
        
        webglSupported = detectWebGL();
        reducedMotion = checkReducedMotion();
        p5Loaded = true;
      } catch (error) {
        console.warn('Failed to load p5-svelte:', error);
        p5Loaded = false;
      }
    }
  });
  
  const sketch = (p5: any) => {
    let rotAngle = 0;
    let targetRotationY = 0;
    let mouseInfluence = { x: 0, y: 0 };
    
    p5.setup = () => {
      p5.createCanvas(width, height, webglSupported ? p5.WEBGL : undefined);
      p5.pixelDensity(getOptimalPixelDensity());
    };
    
    p5.draw = () => {
      p5.background(20, 25, 35);
      
      if (webglSupported) {
        // Auto rotation
        if (!reducedMotion) {
          rotAngle += 0.01;
        }
        
        // Mouse interaction
        if (interactive && mouseInteracting) {
          const mouseInfluenceX = p5.map(p5.mouseX, 0, width, -0.3, 0.3);
          const mouseInfluenceY = p5.map(p5.mouseY, 0, height, 0.3, -0.3);
          mouseInfluence.x = p5.lerp(mouseInfluence.x, mouseInfluenceX, 0.1);
          mouseInfluence.y = p5.lerp(mouseInfluence.y, mouseInfluenceY, 0.1);
        } else {
          mouseInfluence.x = p5.lerp(mouseInfluence.x, 0, 0.1);
          mouseInfluence.y = p5.lerp(mouseInfluence.y, 0, 0.1);
        }
        
        p5.push();
        
        // Lighting similar to the cube example
        p5.ambientLight(100);
        p5.directionalLight(255, 255, 255, 0.5, 0.5, -1);
        p5.pointLight(255, 255, 255, -200, -200, 200);
        
        // Apply rotations
        p5.rotateX(mouseInfluence.y);
        p5.rotateY(rotAngle + mouseInfluence.x);
        p5.rotateX(rotAngle * 0.3);
        
        p5.noStroke();
        p5.shininess(50);
        
        // Draw simplified 3D letter "A" with the cube's approach
        draw3DLetterA(p5, 100, 150, 255);
        
        p5.pop();
      } else {
        // 2D fallback
        p5.fill(100, 150, 255);
        p5.textAlign(p5.CENTER, p5.CENTER);
        p5.textSize(120);
        p5.text('A', width / 2, height / 2);
      }
    };
    
    p5.mouseEntered = () => {
      if (interactive) {
        mouseInteracting = true;
      }
    };
    
    p5.mouseExited = () => {
      mouseInteracting = false;
    };
    
    // Simplified 3D letter A function based on cube example
    function draw3DLetterA(p5: p5InstanceExtensions, r: number, g: number, b: number) {
      const depth = 20;
      const halfDepth = depth / 2;
      const scale = 0.5;
      
      // Define key points of letter A
      const apex = { x: 0 * scale, y: -80 * scale };
      const botLeftOut = { x: -60 * scale, y: 80 * scale };
      const botLeftIn = { x: -40 * scale, y: 80 * scale };
      const botRightIn = { x: 40 * scale, y: 80 * scale };
      const botRightOut = { x: 60 * scale, y: 80 * scale };
      const crossLeft = { x: -20 * scale, y: 20 * scale };
      const crossRight = { x: 20 * scale, y: 20 * scale };
      
      p5.fill(r, g, b);
      
      // Front face
      p5.beginShape(p5.TRIANGLES);
      
      // Left leg
      p5.vertex(botLeftOut.x, botLeftOut.y, halfDepth);
      p5.vertex(apex.x, apex.y, halfDepth);
      p5.vertex(crossLeft.x, crossLeft.y, halfDepth);
      
      p5.vertex(botLeftOut.x, botLeftOut.y, halfDepth);
      p5.vertex(crossLeft.x, crossLeft.y, halfDepth);
      p5.vertex(botLeftIn.x, botLeftIn.y, halfDepth);
      
      // Right leg
      p5.vertex(botRightOut.x, botRightOut.y, halfDepth);
      p5.vertex(crossRight.x, crossRight.y, halfDepth);
      p5.vertex(apex.x, apex.y, halfDepth);
      
      p5.vertex(botRightOut.x, botRightOut.y, halfDepth);
      p5.vertex(botRightIn.x, botRightIn.y, halfDepth);
      p5.vertex(crossRight.x, crossRight.y, halfDepth);
      
      // Crossbar
      p5.vertex(crossLeft.x, crossLeft.y, halfDepth);
      p5.vertex(crossRight.x, crossRight.y, halfDepth);
      p5.vertex(crossLeft.x, crossLeft.y - 10 * scale, halfDepth);
      
      p5.vertex(crossRight.x, crossRight.y, halfDepth);
      p5.vertex(crossRight.x, crossRight.y - 10 * scale, halfDepth);
      p5.vertex(crossLeft.x, crossLeft.y - 10 * scale, halfDepth);
      
      p5.endShape();
      
      // Back face (reverse winding)
      p5.beginShape(p5.TRIANGLES);
      
      // Left leg
      p5.vertex(botLeftOut.x, botLeftOut.y, -halfDepth);
      p5.vertex(crossLeft.x, crossLeft.y, -halfDepth);
      p5.vertex(apex.x, apex.y, -halfDepth);
      
      p5.vertex(botLeftOut.x, botLeftOut.y, -halfDepth);
      p5.vertex(botLeftIn.x, botLeftIn.y, -halfDepth);
      p5.vertex(crossLeft.x, crossLeft.y, -halfDepth);
      
      // Right leg
      p5.vertex(botRightOut.x, botRightOut.y, -halfDepth);
      p5.vertex(apex.x, apex.y, -halfDepth);
      p5.vertex(crossRight.x, crossRight.y, -halfDepth);
      
      p5.vertex(botRightOut.x, botRightOut.y, -halfDepth);
      p5.vertex(crossRight.x, crossRight.y, -halfDepth);
      p5.vertex(botRightIn.x, botRightIn.y, -halfDepth);
      
      // Crossbar
      p5.vertex(crossLeft.x, crossLeft.y, -halfDepth);
      p5.vertex(crossLeft.x, crossLeft.y - 10 * scale, -halfDepth);
      p5.vertex(crossRight.x, crossRight.y, -halfDepth);
      
      p5.vertex(crossRight.x, crossRight.y, -halfDepth);
      p5.vertex(crossLeft.x, crossLeft.y - 10 * scale, -halfDepth);
      p5.vertex(crossRight.x, crossRight.y - 10 * scale, -halfDepth);
      
      p5.endShape();
      
      // Side walls using quad helper function
      drawSideWall(p5, botLeftOut.x, botLeftOut.y, apex.x, apex.y, halfDepth);
      drawSideWall(p5, apex.x, apex.y, botRightOut.x, botRightOut.y, halfDepth);
      drawSideWall(p5, crossLeft.x, crossLeft.y, crossRight.x, crossRight.y, halfDepth);
    }
    
    function drawSideWall(p5: p5InstanceExtensions, x1: number, y1: number, x2: number, y2: number, halfDepth: number) {
      p5.beginShape(p5.TRIANGLES);
      p5.vertex(x1, y1, halfDepth);
      p5.vertex(x2, y2, halfDepth);
      p5.vertex(x2, y2, -halfDepth);
      
      p5.vertex(x1, y1, halfDepth);
      p5.vertex(x2, y2, -halfDepth);
      p5.vertex(x1, y1, -halfDepth);
      p5.endShape();
    }
  };
  
  // Listen for reduced motion changes
  onMount(() => {
    if (typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => {
      reducedMotion = mediaQuery.matches;
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  });
</script>

<div class="logo-container relative">
  {#if (p5Loaded && webglSupported && !showFallback)}
    <svelte:component this={P5} {sketch} />
  {:else}
    <!-- Static fallback for browsers without WebGL or when explicitly requested -->
    <div 
      class="fallback-logo bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-6xl shadow-xl"
      style="width: {width}px; height: {height}px;"
    >
      A
    </div>
  {/if}
  
  {#if !webglSupported && !showFallback}
    <div class="absolute bottom-2 left-2 text-xs text-gray-500 opacity-50">
      WebGL not supported
    </div>
  {/if}
</div>

<style>
  .logo-container {
    display: inline-block;
    border-radius: 0.5rem;
    overflow: hidden;
  }
  
</style>