export default function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] px-2 py-1 rounded-full bg-muted text-muted-foreground">{children}</span>
  );
}