export default function HeroBackground() {
  return (
    <div
      className="absolute inset-0 z-0"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(0,240,255,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_60%,rgba(10,22,40,0.9),transparent_50%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#08080a]/40 via-transparent to-[#08080a]" />
    </div>
  );
}
