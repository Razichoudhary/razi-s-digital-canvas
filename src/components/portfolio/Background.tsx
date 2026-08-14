export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at 50% 0%, #000 20%, transparent 75%)",
        }}
      />
      <div
        className="animate-drift absolute -top-40 -left-32 h-[38rem] w-[38rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, var(--blob-a), transparent 65%)" }}
      />
      <div
        className="animate-drift absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--blob-b), transparent 65%)",
          animationDelay: "-9s",
        }}
      />
      <div
        className="animate-drift absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--blob-a), transparent 70%)",
          animationDelay: "-16s",
        }}
      />
    </div>
  );
}
