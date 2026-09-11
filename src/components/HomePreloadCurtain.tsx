const LAYERS = [
  { color: "#2e2e2e" }, // charcoal — lifts first
  { color: "#9a9a9a" }, // grey — middle
  { color: "#f5f5f5" }, // white — lifts last
];

export default function HomePreloadCurtain() {
  return (
    <div className="home-preload-overlay" aria-hidden="true">
      {LAYERS.map((layer, i) => (
        <div
          key={i}
          className="home-preload-layer"
          style={
            { "--i": i, "--layer-color": layer.color } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
