import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2022-02-08',
})
