function FeatureCard({ children }) {
  return (
    <div className="bg-sky-800 text-slate-100 w-full rounded-md p-8 shadow-lg">
      {children}
    </div>
  )
}

export default function Features() {
  return (
    <div className="bg-gradient-to-r from-sky-900 to-sky-800">
      <div className="max-w-screen-xl mx-auto py-32 p-4">
        <div className="flex gap-8 flex-col lg:flex-row">
          <FeatureCard>
            <h2 className="text-3xl font-semibold mb-8 flex gap-6">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-14 h-14"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                  />
                </svg>
              </span>
              <span>Illum omnis perferendis</span>
            </h2>

            <p>
              Cupiditate saepe nobis aut deleniti molestias culpa, suscipit
              illo.
            </p>
            <p className="mt-4">
              Quia tenetur rerum, dolorem tempore quos deserunt necessitatibus
              nostrum, consequuntur non corporis sequi?
            </p>
          </FeatureCard>

          <FeatureCard>
            <h2 className="text-3xl font-semibold mb-8 flex gap-6">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-14 h-14"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </span>
              <span>Accusantium et at nemo porro</span>
            </h2>

            <p>
              Totam architecto doloribus, exercitationem autem, officia dolor
              voluptatum fuga, voluptate labore obcaecati modi delectus odio
              error deserunt commodi?
            </p>
            <p className="mt-4">Distinctio quos corporis iure?</p>
          </FeatureCard>

          <FeatureCard>
            <h2 className="text-3xl font-semibold mb-8 flex gap-6">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-14 h-14"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
                  />
                </svg>
              </span>
              <span>Illum omnis perferendis</span>
            </h2>

            <p>
              Nihil vitae consequuntur quia odio praesentium ipsam dolores
              laborum dolorem neque corporis ab, consequatur, non doloremque rem
              iste, harum esse amet voluptas.
            </p>
          </FeatureCard>
        </div>
      </div>
    </div>
  )
}
