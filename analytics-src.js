// Source file for Vercel Web Analytics
// This will be bundled to analytics.js
import { inject } from '@vercel/analytics';

// Initialize Vercel Web Analytics
inject({
  mode: 'auto', // Automatically detect environment (production/development)
  debug: false  // Set to true to see debug logs in development
});
