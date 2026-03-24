type Status = "complete" | "in-progress" | "not-started";

const styles: Record<Status, string> = {
  complete: "text-coherence border-coherence/30",
  "in-progress": "text-resonance border-resonance/30",
  "not-started": "text-muted border-border",
};

const labels: Record<Status, string> = {
  complete: "Complete",
  "in-progress": "In Progress",
  "not-started": "Not Started",
};

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      role="status"
      aria-label={labels[status]}
      className={`inline-block px-2 py-0.5 border rounded text-xs tracking-wide ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}
