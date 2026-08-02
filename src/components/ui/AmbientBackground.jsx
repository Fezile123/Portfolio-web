export default function AmbientBackground({ variant = "default" }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_75%)]" />
      <div
        className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary/30 blur-[120px] animate-blob"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-1/3 -right-32 h-[24rem] w-[24rem] rounded-full bg-accent2/25 blur-[120px] animate-blob"
        style={{ animationDelay: "3s" }}
      />
      {variant === "default" && (
        <div
          className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-accent/20 blur-[120px] animate-blob"
          style={{ animationDelay: "6s" }}
        />
      )}
      <div className="absolute inset-0 noise" />
    </div>
  );
}
