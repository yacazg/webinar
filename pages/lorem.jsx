import Head from "next/head"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <>
      <Head>
        <title>Lorem</title>
      </Head>

      <Layout>
        <div className="max-w-screen-xl mx-auto flex items-center justify-center text-center px-4 py-32">
          <div>
            <h1 className="text-8xl mt-8 font-bold bg-gradient-to-r from-sky-900 to-sky-700 text-transparent bg-clip-text">
              Lorem!
            </h1>
            <p className="mt-4 text-xl font-mono text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>
        </div>

        <div className="bg-slate-100 text-slate-700">
          <div className="max-w-screen-md mx-auto py-32 p-4 [&>p+p]:mt-8">
            <p>
              Quia illum fuga tempore, quos veniam quas ipsam id nostrum porro.
              Perferendis atque sunt aliquid pariatur aliquam exercitationem,
              velit temporibus quod incidunt.
            </p>
            <p>
              Modi ex laborum, repellendus minus dolorem quasi temporibus
              distinctio rerum animi facilis optio debitis reiciendis vero iure.
              Facere voluptatum mollitia nesciunt debitis sunt aspernatur iure
              voluptates esse adipisci sit placeat quas illo minima quaerat,
              fugiat numquam ut animi dolor rerum ex doloremque repellendus sed
              dignissimos impedit.
            </p>
            <p>
              sequi consequuntur repellat reprehenderit accusamus recusandae
              totam natus aliquam sit eos voluptate deleniti, dolores expedita?
              Recusandae quas accusamus ipsa perspiciatis officia eveniet cum
              laboriosam omnis, mollitia reiciendis minus aspernatur aliquam
              magnam officiis fugit molestiae impedit in.
            </p>
            <p>
              Eveniet soluta ea saepe, perferendis Nostrum non voluptates
              sapiente ipsum!
            </p>
          </div>
        </div>
      </Layout>
    </>
  )
}
