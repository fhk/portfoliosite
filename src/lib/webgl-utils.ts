export function detectWebGL(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    return !!(gl && gl instanceof WebGLRenderingContext);
  } catch (e) {
    return false;
  }
}

export function supportsWebGL2(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2');
    return !!(gl && gl instanceof WebGL2RenderingContext);
  } catch (e) {
    return false;
  }
}

export function checkReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function getOptimalPixelDensity(): number {
  if (typeof window === 'undefined') return 1;
  
  const devicePixelRatio = window.devicePixelRatio || 1;
  const isMobile = window.innerWidth < 768;
  
  // Reduce pixel density on mobile and high-DPI displays for better performance
  if (isMobile && devicePixelRatio > 1) {
    return 1;
  }
  
  return Math.min(devicePixelRatio, 2);
}