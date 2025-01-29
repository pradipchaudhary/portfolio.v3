import { blogData } from "@/data/blogData";

// Simulated data fetching function
async function fetchPostBySlug(slug: string) {
    // In a real-world scenario, this would be a database or API call


    return blogData.find(post => post.slug === slug)
}


// Main Page Component
export default async function BlogPostPage({
    params
}: {
    params: { slug: string }
}) {
    console.log("sluge ", params.slug)
    const post = await fetchPostBySlug(params.slug)

    // Handle case where post is not found
    if (!post) {
        console.log("Blog not found.")
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