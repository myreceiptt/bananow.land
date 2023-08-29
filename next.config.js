/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/discord/',
        destination: 'https://discord.gg/PpfGQpKDhs',
        permanent: true,
       
      },
      {
        source: '/twitter/',
        destination: 'https://twitter.com/bananow_land',
        permanent: true,
       
      },
      {
        source: '/instagram/',
        destination: 'https://instagram.com/bananow.land',
        permanent: true,
       
      },
      {
        source: '/youtube/',
        destination: 'https://www.youtube.com/@bananow_land_',
        permanent: true,
       
      },
      {
        source: '/opensea/',
        destination: 'https://opensea.io/collection/bananow-nfts',
        permanent: true,
       
      },
      {
        source: '/etherscan/',
        destination: 'https://etherscan.io/address/0xAe278341f6ACa1358FF67DFcE937F577F9BD8F47',
        permanent: true,
       
      },
    ]
  }
}

module.exports = nextConfig
