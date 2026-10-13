import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

/**
 * Plugin SEO minimal.
 *
 * Le domaine final n'est connu qu'au moment du déploiement. Tant que la variable
 * SITE_URL n'est pas définie, on n'écrit AUCUNE URL fictive : pas de balise
 * canonical / og:url et pas de sitemap.xml. Dès que SITE_URL est définie
 * (ex. https://mon-portfolio.pages.dev), ces éléments sont générés au build.
 */
function seoPlugin(siteUrl) {
  const base = (siteUrl || '').trim().replace(/\/+$/, '');
  let outDir = 'dist';
  let root = process.cwd();

  return {
    name: 'portfolio-seo',
    configResolved(config) {
      outDir = config.build.outDir;
      root = config.root;
    },
    transformIndexHtml(html) {
      const tags = base
        ? `<link rel="canonical" href="${base}/" />\n    <meta property="og:url" content="${base}/" />`
        : '';
      return html.replace('<!--seo-urls-->', tags);
    },
    closeBundle() {
      const dir = resolve(root, outDir);
      mkdirSync(dir, { recursive: true });

      const robots = ['User-agent: *', 'Allow: /'];
      if (base) robots.push('', `Sitemap: ${base}/sitemap.xml`);
      writeFileSync(resolve(dir, 'robots.txt'), robots.join('\n') + '\n');

      if (base) {
        const today = new Date().toISOString().slice(0, 10);
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${base}/</loc>
    <lastmod>${today}</lastmod>
  </url>
</urlset>
`;
        writeFileSync(resolve(dir, 'sitemap.xml'), sitemap);
      } else {
        console.warn(
          '\n[portfolio-seo] SITE_URL non défini : sitemap.xml, canonical et og:url ne sont pas générés.\n' +
            '               Définissez SITE_URL avant le build final (voir README).\n'
        );
      }
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), seoPlugin(env.SITE_URL)],
    build: {
      outDir: 'dist',
      target: 'es2020',
    },
  };
});
