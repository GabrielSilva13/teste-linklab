/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'images.unsplash.com' },
      { hostname: 'i.ytimg.com' },
      { hostname: 'cdn.awsli.com.br' },
      { hostname: 'www.persoalab.com.br' },
      { hostname: 'd3ugyf2ht6aenh.cloudfront.net' },
      { hostname: 'www.quimica.com.br' },
      { hostname: 'images.tcdn.com.br' },
      { hostname: 'media.istockphoto.com' },
    ],
  },
}

module.exports = nextConfig
