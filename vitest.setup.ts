import '@testing-library/jest-dom/vitest';

// Minimal IntersectionObserver polyfill for framer-motion viewport features in jsdom
if (typeof (globalThis as any).IntersectionObserver === 'undefined') {
	class IntersectionObserver {
		constructor(_callback: any, _options?: any) {}
		observe() {}
		unobserve() {}
		disconnect() {}
		takeRecords() { return []; }
	}
	(globalThis as any).IntersectionObserver = IntersectionObserver as any;
}
