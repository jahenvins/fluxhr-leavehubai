export default function AIInsights() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-teal-500/10 to-cyan-500/5 p-8 backdrop-blur-2xl">
      
      <div className="flex items-center justify-between">
        
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-teal-300">
            AI INSIGHTS
          </p>

          <h2 className="mt-3 font-heading text-4xl font-black tracking-tight text-white">
            Workforce Analytics
          </h2>
        </div>

        <div className="rounded-2xl bg-teal-500/10 px-4 py-2 text-sm text-teal-300">
          Live AI
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        
        <Insight
          title="Burnout Alert"
          desc="Design team overtime increased 18% this week."
        />

        <Insight
          title="Attendance Peak"
          desc="Engineering team reached 98% attendance."
        />

        <Insight
          title="Leave Trend"
          desc="Friday leave requests increased by 23%."
        />
      </div>
    </div>
  );
}

function Insight({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
      
      <h3 className="font-heading text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 leading-relaxed text-zinc-400">
        {desc}
      </p>
    </div>
  );
}