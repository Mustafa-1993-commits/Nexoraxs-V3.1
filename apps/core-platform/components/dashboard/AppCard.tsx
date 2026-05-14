import type { App } from "@/lib/mock-data/apps";

const openClass =
  "block w-full rounded-xl bg-blue-600 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-blue-500";

export function AppCard({ name, description, available, buttonLabel, subtitle, href }: App) {
  return (
    <div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/20">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold text-white">{name}</h3>
        {!available && (
          <span className="flex-shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/40">
            Coming Soon
          </span>
        )}
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
        {description}
      </p>
      {subtitle && (
        <span className="chip mt-2 block text-white/40">{subtitle}</span>
      )}
      <div className="mt-5">
        {available ? (
          href ? (
            <a
              href={href}
              className={openClass}
            >
              {buttonLabel ?? "Open"}
            </a>
          ) : (
            <button type="button" className={openClass}>
              {buttonLabel ?? "Open"}
            </button>
          )
        ) : (
          <button
            type="button"
            disabled
            className="w-full cursor-not-allowed rounded-xl border border-white/10 py-2.5 text-sm font-medium text-white/30"
          >
            Coming Soon
          </button>
        )}
      </div>
    </div>
  );
}
