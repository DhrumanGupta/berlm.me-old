import Link from 'next/link'
import client from '../utils/client'

const Index = ({ posts }) => {
  return (
    <div>
      <h1>Welcome to a blog!</h1>
      {posts.length > 0 &&
        posts.map(
          ({ _id, title = '', slug = '', publishedAt = '' }) =>
            slug && (
              <li key={_id}>
                <Link href={'/blog/[slug]'} as={`/blog/${slug.current}`}>
                  <a>{title}</a>
                </Link>{' '}
                ({new Date(publishedAt).toDateString()})
              </li>
            )
        )}
    </div>
  )
}

export async function getStaticProps() {
  const posts = await client.fetch(`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `)
  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}

export default Index
