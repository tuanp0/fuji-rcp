export default function manifest() {
  return {
    name: 'Fuji Recipes - TP',
    short_name: 'Fuji Recipes',
    description: 'Recipes for Fuji cameras',
    start_url: '/fuji',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '../app/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '../app/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: './app/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}