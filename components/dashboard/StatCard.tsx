type Props = {
  title: string;
  value: string;
};

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
      
      <p className="text-sm text-zinc-500">
        {title}
      </p>

      <h3 className="mt-4 font-heading text-5xl font-black tracking-tight text-white">
        {value}
      </h3>

      <div className="mt-5 inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
        +12% this month
      </div>
    </div>
  );
}