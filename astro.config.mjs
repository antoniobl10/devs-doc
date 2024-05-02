import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Docs de un Developer',
    social: {
      github: 'https://github.com/antoniobl10'
    },
    sidebar: [{
      label: 'Docs',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Empezar',
        link: '/guias/empezar/'
      }]
    }, 
	{
      label: 'Hacking',
      autogenerate: {
        directory: 'hacking'
      }
    }, 
	{
      label: 'Desarrollo de software',
      autogenerate: {
        directory: 'Desarrollo de software'
      }
    },
	
	],
    customCss: ['./src/tailwind.css']
  }), tailwind({
    applyBaseStyles: false
  })]
});