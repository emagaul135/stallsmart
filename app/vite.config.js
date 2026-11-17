import { defineConfig } from 'vite';

// Relative asset base so the production build also loads correctly when
// opened from file:// (e.g. local visual checks) and from any sub-path host
// such as GitHub Pages project sites. Added during M2 verification after the
// visual check found dist/ loading with no CSS from file:// (absolute
// /assets/... URLs). Original scaffold was built by Kiro session 1.
export default defineConfig({
  base: './',
});
