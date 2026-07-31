export default function NewsLoading() {
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
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i}>
                <div className="aspect-[16/10] rounded-xl2 bg-paper-line" />
                <div className="mt-4 h-4 w-3/4 rounded bg-paper-line" />
                <div className="mt-2 h-4 w-1/2 rounded bg-paper-line" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
