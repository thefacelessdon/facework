export function ProgressBar({
  value,
  max,
  label,
}: {
  value: number;
  max: number;
  label: string;
}) {
  const percentage = max > 0 ? (value / max) * 100 : 0;

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={label}
      className="w-full bg-stone rounded-sm h-1"
    >
      <div
        className="bg-coherence h-1 rounded-sm"
        style={{
          width: `${percentage}%`,
          transition: `width var(--duration-slow) var(--ease-settle)`,
        }}
      />
    </div>
  );
}
