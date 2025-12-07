/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			colors: {
				// Primary brand colors - sophisticated navy and charcoal
				'brand': {
					50: '#f8fafc',
					100: '#f1f5f9',
					200: '#e2e8f0',
					300: '#cbd5e1',
					400: '#94a3b8',
					500: '#64748b',
					600: '#475569',
					700: '#334155',
					800: '#1e293b',
					900: '#0f172a',
					950: '#020617'
				},
				// Arrow - Professional navy (network/infrastructure)
				'arrow': {
					50: '#f0f4ff',
					100: '#e0e7ff',
					200: '#c7d2fe',
					300: '#a5b4fc',
					400: '#818cf8',
					500: '#1e40af',
					600: '#1d4ed8',
					700: '#1e3a8a',
					800: '#1e3a8a',
					900: '#1e293b'
				},
				// HyperlocalAI - Sophisticated teal (intelligence/insights)
				'hyperlocal': {
					50: '#f0fdfa',
					100: '#ccfbf1',
					200: '#99f6e4',
					300: '#5eead4',
					400: '#2dd4bf',
					500: '#0f766e',
					600: '#0d9488',
					700: '#0f766e',
					800: '#115e59',
					900: '#134e4a'
				},
				// PrismAI - Elegant purple-gray (premium/value)
				'prism': {
					50: '#faf7ff',
					100: '#f4f1ff',
					200: '#e9e5ff',
					300: '#d6cdff',
					400: '#b8a5ff',
					500: '#7c3aed',
					600: '#8b5cf6',
					700: '#7c3aed',
					800: '#6b21a8',
					900: '#581c87'
				}
			}
		}
	},
	plugins: []
};