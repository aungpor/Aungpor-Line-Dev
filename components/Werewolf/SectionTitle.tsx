export default function SectionTitle({ icon: Icon, title, action }: { icon: any; title: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4" />
        <span className="text-sm font-semibold">{title}</span>
      </div>
      {action}
    </div>
  );
}