export default function manifest() {
  return {
    name: 'May Bell',
    short_name: 'May Bell',
    description: 'A Progressive Web App built with Next.js',
    start_url: '/',
    display: 'standalone',
    background_color: 'purple',
    theme_color: 'red',
    icons: [
      {
        src: 'https://online.wscubetech.com/images/innerlogo.svg',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'https://online.wscubetech.com/images/innerlogo.svg',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}