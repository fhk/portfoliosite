<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  export let width = 600;
  export let height = 400;

  let canvasElement: HTMLCanvasElement;
  let p5Instance: any;

  onMount(async () => {
    if (browser) {
      try {
        // Dynamically import p5 only on client-side
        const p5 = (await import('p5')).default;
        
        const sketch = (p: any) => {
          let rotAngle = 0;
          
          p.setup = () => {
            p.createCanvas(width, height, p.WEBGL);
            p.pixelDensity(1); // Optimize performance
          };
          
          p.draw = () => {
            p.background(20, 25, 35);
            
            // Increment rotation
            rotAngle += 0.015;
            
            // Lighting setup
            p.ambientLight(80, 80, 120);
            p.directionalLight(255, 255, 255, 0.5, 0.5, -1);
            p.pointLight(255, 255, 255, -200, -200, 200);
            
            p.push();
            
            // Apply rotations
            p.rotateY(rotAngle);
            p.rotateX(rotAngle * 0.3);
            
            p.noStroke();
            p.shininess(50);
            
            // Draw three overlapping "A" letters in professional brand colors
            p.push();
            p.translate(-30, -30, -30);
            draw3DLetterA(p, 30, 64, 175); // Professional navy - Arrow
            p.pop();
            
            p.push();
            p.translate(-15, -15, -15);
            draw3DLetterA(p, 15, 118, 110); // Sophisticated teal - HyperlocalAI
            p.pop();
            
            p.push();
            p.translate(0, 0, 0);
            draw3DLetterA(p, 124, 58, 237); // Elegant purple - PrismAI
            p.pop();
            
            p.pop();
          };
          
          // Simplified 3D Letter A function
          function draw3DLetterA(p: any, r: number, g: number, b: number) {
            const depth = 25;
            const halfDepth = depth / 2;
            const scale = 0.6;
            
            // Define key points of letter A
            const apex = { x: 0 * scale, y: -80 * scale };
            const botLeftOut = { x: -60 * scale, y: 80 * scale };
            const botLeftIn = { x: -40 * scale, y: 80 * scale };
            const botRightIn = { x: 40 * scale, y: 80 * scale };
            const botRightOut = { x: 60 * scale, y: 80 * scale };
            const crossLeft = { x: -25 * scale, y: 15 * scale };
            const crossRight = { x: 25 * scale, y: 15 * scale };
            const crossTop = { x: 0, y: -10 * scale };
            
            p.fill(r, g, b);
            
            // Front face
            p.beginShape(p.TRIANGLES);
            
            // Left leg
            p.vertex(botLeftOut.x, botLeftOut.y, halfDepth);
            p.vertex(apex.x, apex.y, halfDepth);
            p.vertex(crossLeft.x, crossLeft.y, halfDepth);
            
            p.vertex(botLeftOut.x, botLeftOut.y, halfDepth);
            p.vertex(crossLeft.x, crossLeft.y, halfDepth);
            p.vertex(botLeftIn.x, botLeftIn.y, halfDepth);
            
            // Right leg  
            p.vertex(botRightOut.x, botRightOut.y, halfDepth);
            p.vertex(crossRight.x, crossRight.y, halfDepth);
            p.vertex(apex.x, apex.y, halfDepth);
            
            p.vertex(botRightOut.x, botRightOut.y, halfDepth);
            p.vertex(botRightIn.x, botRightIn.y, halfDepth);
            p.vertex(crossRight.x, crossRight.y, halfDepth);
            
            // Top section
            p.vertex(apex.x, apex.y, halfDepth);
            p.vertex(crossRight.x, crossRight.y, halfDepth);
            p.vertex(crossTop.x, crossTop.y, halfDepth);
            
            p.vertex(apex.x, apex.y, halfDepth);
            p.vertex(crossTop.x, crossTop.y, halfDepth);
            p.vertex(crossLeft.x, crossLeft.y, halfDepth);
            
            // Crossbar
            p.vertex(crossLeft.x, crossLeft.y, halfDepth);
            p.vertex(crossRight.x, crossRight.y, halfDepth);
            p.vertex(crossLeft.x, crossLeft.y - 8 * scale, halfDepth);
            
            p.vertex(crossRight.x, crossRight.y, halfDepth);
            p.vertex(crossRight.x, crossRight.y - 8 * scale, halfDepth);
            p.vertex(crossLeft.x, crossLeft.y - 8 * scale, halfDepth);
            
            p.endShape();
            
            // Back face (reverse winding)
            p.beginShape(p.TRIANGLES);
            
            // Left leg
            p.vertex(botLeftOut.x, botLeftOut.y, -halfDepth);
            p.vertex(crossLeft.x, crossLeft.y, -halfDepth);
            p.vertex(apex.x, apex.y, -halfDepth);
            
            p.vertex(botLeftOut.x, botLeftOut.y, -halfDepth);
            p.vertex(botLeftIn.x, botLeftIn.y, -halfDepth);
            p.vertex(crossLeft.x, crossLeft.y, -halfDepth);
            
            // Right leg
            p.vertex(botRightOut.x, botRightOut.y, -halfDepth);
            p.vertex(apex.x, apex.y, -halfDepth);
            p.vertex(crossRight.x, crossRight.y, -halfDepth);
            
            p.vertex(botRightOut.x, botRightOut.y, -halfDepth);
            p.vertex(crossRight.x, crossRight.y, -halfDepth);
            p.vertex(botRightIn.x, botRightIn.y, -halfDepth);
            
            // Top section
            p.vertex(apex.x, apex.y, -halfDepth);
            p.vertex(crossTop.x, crossTop.y, -halfDepth);
            p.vertex(crossRight.x, crossRight.y, -halfDepth);
            
            p.vertex(apex.x, apex.y, -halfDepth);
            p.vertex(crossLeft.x, crossLeft.y, -halfDepth);
            p.vertex(crossTop.x, crossTop.y, -halfDepth);
            
            // Crossbar
            p.vertex(crossLeft.x, crossLeft.y, -halfDepth);
            p.vertex(crossLeft.x, crossLeft.y - 8 * scale, -halfDepth);
            p.vertex(crossRight.x, crossRight.y, -halfDepth);
            
            p.vertex(crossRight.x, crossRight.y, -halfDepth);
            p.vertex(crossLeft.x, crossLeft.y - 8 * scale, -halfDepth);
            p.vertex(crossRight.x, crossRight.y - 8 * scale, -halfDepth);
            
            p.endShape();
            
            // Side walls
            drawQuad(p, botLeftOut.x, botLeftOut.y, apex.x, apex.y, halfDepth);
            drawQuad(p, apex.x, apex.y, botRightOut.x, botRightOut.y, halfDepth);
            drawQuad(p, crossLeft.x, crossLeft.y, crossRight.x, crossRight.y, halfDepth);
          }
          
          function drawQuad(p: any, x1: number, y1: number, x2: number, y2: number, halfDepth: number) {
            p.beginShape(p.TRIANGLES);
            p.vertex(x1, y1, halfDepth);
            p.vertex(x2, y2, halfDepth);
            p.vertex(x2, y2, -halfDepth);
            
            p.vertex(x1, y1, halfDepth);
            p.vertex(x2, y2, -halfDepth);
            p.vertex(x1, y1, -halfDepth);
            p.endShape();
          }
        };
        
        p5Instance = new p5(sketch, canvasElement);
        
      } catch (error) {
        console.warn('Failed to load p5.js:', error);
      }
    }
  });
  
  // Cleanup on destroy
  onMount(() => {
    return () => {
      if (p5Instance) {
        p5Instance.remove();
      }
    };
  });
</script>

<div class="hero-3d-container" bind:this={canvasElement}>
  <!-- Fallback for when 3D doesn't load -->
  {#if !p5Instance && browser}
    <div 
      class="fallback-visual bg-gradient-to-br from-arrow-600 via-hyperlocal-600 to-prism-600 rounded-lg flex items-center justify-center text-white font-bold text-6xl shadow-2xl"
      style="width: {width}px; height: {height}px;"
    >
      A
    </div>
  {/if}
</div>

<style>
  .hero-3d-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    overflow: hidden;
  }
</style>