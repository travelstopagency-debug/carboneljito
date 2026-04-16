import AdminShell from '@/components/admin/AdminShell';

type Props = {
  title: string;
  subtitle: string;
};

export default function AdminModulePlaceholder({ title, subtitle }: Props) {
  return (
    <AdminShell title={title} subtitle={subtitle}>
      <div className="rounded-xl border border-dashed border-white/20 bg-white/5 p-10 text-center">
        <p className="text-xl font-semibold text-zinc-200">Coming soon</p>
        <p className="mt-2 text-sm text-zinc-400">This ERP module is being prepared.</p>
      </div>
    </AdminShell>
  );
}
