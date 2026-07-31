export default function BlogLoading() {
  return (
    <div className="animate-pulse">
      <div className="h-[420px] bg-navy" />
      <div className="bg-paper py-20">
        <div className="container-x">
          <div className="h-64 rounded-xl2 bg-paper-soft" />
        </div>
      </div>
      <div className="bg-paper-soft py-24">
        <div className="container-x">
          <div className="h-8 w-48 rounded bg-paper-line" />
          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i}>
                  <div className="aspect-[16/10] rounded-xl2 bg-paper-line" />
                  <div className="mt-4 h-4 w-2/3 rounded bg-paper-line" />
                  <div className="mt-2 h-4 w-1/2 rounded bg-paper-line" />
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <div className="h-48 rounded-xl2 bg-paper-line" />
              <div className="h-40 rounded-xl2 bg-paper-line" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
