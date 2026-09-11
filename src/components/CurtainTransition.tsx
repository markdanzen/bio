const LAYERS = [
  { color: "#2e2e2e" }, // charcoal — leads the fall
  { color: "#9a9a9a" }, // grey — middle
  { color: "#f5f5f5" }, // white — trails, frontmost
];

export default function CurtainTransition() {
  return (
    <div className="curtain-overlay" aria-hidden="true">
      {LAYERS.map((layer, i) => (
        <div
          key={i}
          className="transition-curtain"
          style={
            { "--i": i, "--layer-color": layer.color } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
