type Props = {
  title: string;
  description: string;
};

export default function AIChatCard({
  title,
  description,
}: Props) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
      
      <div className="mb-5 flex items-center gap-3">
        
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 font-black text-black">
          AI
        </div>

        <div>
          <h3 className="font-heading text-xl font-bold text-white">
            {title}
          </h3>

          <p className="text-sm text-zinc-500">
            FluxHR Intelligence
          </p>
        </div>
      </div>

      <p className="leading-relaxed text-zinc-300">
        {description}
      </p>
    </div>
  );
}