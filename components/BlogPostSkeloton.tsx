export  function BlogPostSkeleton() {
  return (
    <div className="min-h-screen px-4 py-12">
      <article className="mx-auto max-w-3xl animate-pulse">

        <div className="relative mb-10 overflow-hidden rounded-2xl border border-white/10 aspect-video bg-white/5" />

        <header className="mb-10">
          <div className="h-3 w-20 rounded bg-white/10 mb-3" />

          <div className="h-9 w-11/12 rounded bg-white/10 mt-3 mb-2" />
          <div className="h-9 w-2/3 rounded bg-white/10 mb-2" />

          <div className="h-4 w-1/2 rounded bg-white/10 mt-2" />

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <div className="h-3 w-16 rounded bg-white/10" />
            <div className="h-3 w-2 rounded bg-white/10" />
            <div className="h-3 w-20 rounded bg-white/10" />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <div className="h-6 w-16 rounded-full bg-white/10" />
            <div className="h-6 w-20 rounded-full bg-white/10" />
            <div className="h-6 w-14 rounded-full bg-white/10" />
          </div>

          <hr className="mt-8 border-white/10" />
        </header>

        <div className="space-y-3">
          <div className="h-4 w-full rounded bg-white/10" />
          <div className="h-4 w-[95%] rounded bg-white/10" />
          <div className="h-4 w-[88%] rounded bg-white/10" />
          <div className="h-4 w-full rounded bg-white/10" />
          <div className="h-4 w-3/4 rounded bg-white/10" />

          <div className="pt-4" />

          <div className="h-6 w-64 rounded bg-white/10" />

          <div className="h-4 w-full rounded bg-white/10" />
          <div className="h-4 w-[91%] rounded bg-white/10" />
          <div className="h-4 w-[78%] rounded bg-white/10" />

          <div className="pt-4" />

          <div className="h-28 w-full rounded-xl bg-white/10" />

          <div className="pt-4" />

          <div className="h-4 w-full rounded bg-white/10" />
          <div className="h-4 w-[85%] rounded bg-white/10" />
          <div className="h-4 w-3/5 rounded bg-white/10" />
        </div>

      </article>
    </div>
  );
}