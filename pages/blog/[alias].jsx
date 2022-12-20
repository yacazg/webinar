import Head from "next/head"
import Layout from "../../components/Layout"

export default function Blog({ post }) {
  return (
    <>
      <Head>
        <title>{post.title.rendered}</title>
      </Head>

      <Layout>
        <div className="max-w-screen-xl mx-auto flex items-center justify-center text-center px-4 py-32">
          <div>
            <h1 className="text-8xl mt-8 font-bold bg-gradient-to-r from-sky-900 to-sky-700 text-transparent bg-clip-text">
              {post.title.rendered}
            </h1>
            <p className="mt-4 text-xl font-mono text-slate-500">
              {new Date(post.modified).toLocaleString("pl")}
            </p>
          </div>
        </div>

        <div className="bg-slate-100 text-slate-700">
          <div className="max-w-screen-md mx-auto py-32 p-4">
            <div
              className="[&>p+p]:mt-8"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </div>
        </div>
      </Layout>
    </>
  )
}

async function getDataFromApi(endpoint) {
  const apiUrl =
    "https://public-api.wordpress.com/wp/v2/sites/reactjscourse.wordpress.com"
  const apiEndpoint = apiUrl + endpoint
  const response = await fetch(apiEndpoint)
  const data = await response.json()

  return data
}

export async function getStaticPaths() {
  const posts = await getDataFromApi("/posts")
  const paths = posts.map((post) => ({ params: { alias: post.slug } }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { alias } = params

  const posts = await getDataFromApi(`/posts?slug=${alias}`)
  const post = posts[0]

  return {
    props: { post },
  }
}
