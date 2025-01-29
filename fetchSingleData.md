

I'll provide a comprehensive example that shows how to fetch data for a specific page using a dynamic route slug:

    ```tsx project="Blog Post Fetcher" file="[slug]/page.tsx" type="react"
import { Suspense } from 'react'
import { notFound } from 'next/navigation'

// Simulated data fetching function
async function fetchPostBySlug(slug: string) {
  // In a real-world scenario, this would be a database or API call
  const posts = [
    { 
      slug: 'first-post', 
      title: 'My First Post', 
      content: 'This is the content of the first post.' 
    },
    { 
      slug: 'second-post', 
      title: 'Another Great Post', 
      content: 'Here\'s some interesting content.' 
    }
  ]

  return posts.find(post => post.slug === slug)
}

// Main Page Component
export default async function BlogPostPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const post = await fetchPostBySlug(params.slug)

  // Handle case where post is not found
  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <article className="prose">
        {post.content}
      </article>
    </div>
  )
}

// Optional: Loading State
export function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-xl">Loading post...</p>
    </div>
  )
}

// Optional: Generate Static Params for Static Generation
export async function generateStaticParams() {
  // In a real app, this would fetch all possible slugs
  const posts = [
    { slug: 'first-post' },
    { slug: 'second-post' }
  ]

  return posts.map((post) => ({
    slug: post.slug
  }))
}
```

Let me break down the key aspects of this implementation:

1. ** Dynamic Route Fetching **:
- The`[slug]` in the file path creates a dynamic route < sup > [1](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)</>&nbsp;.
    - `params.slug` contains the specific slug for the current page.

2. ** Data Fetching **:
- `fetchPostBySlug()` simulates fetching a post by its slug.
   - In a real application, this would be a database or API call.

3. ** Not Found Handling **:
- `notFound()` is used when no post matches the slug < sup > [1](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)</>&nbsp;.

    4. ** Static Generation **:
    - `generateStaticParams()` allows pre - rendering of known routes at build time < sup > [2](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)</>&nbsp;.

        5. ** Server Component **:
        - The entire component is an async Server Component, allowing direct data fetching.

Practical Usage Example:
        - URL: `/blog/first-post` would render the first post
    - URL: `/blog/second-post` would render the second post
    - Any other slug would trigger the`notFound()` page

Additional Considerations:
        - For real - world applications, replace the simulated data with actual database or API calls.
- Use error boundaries and loading states for better user experience.
- Leverage`generateStaticParams()` for performance optimization < sup > [2](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)</>&nbsp;.

            Would you like me to elaborate on any part of this implementation or show you how to integrate this with a real data source ?