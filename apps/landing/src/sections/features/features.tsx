import {
  Boxes,
  Building2,
  CloudCog,
  KeyRound,
  Network,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureCard {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBg: string;
  accent: string;
}

const features: FeatureCard[] = [
  {
    icon: Boxes,
    title: "Modular Architecture",
    description:
      "Start with the platform core, then add focused business apps as the product expands.",
    iconBg: "bg-blue-500/15",
    accent: "text-blue-300",
  },
  {
    icon: KeyRound,
    title: "Shared Authentication",
    description:
      "Designed around one account experience across the core platform and app modules.",
    iconBg: "bg-purple-500/15",
    accent: "text-purple-300",
  },
  {
    icon: Building2,
    title: "Workspace Management",
    description:
      "Keep teams, billing, and enabled apps organized around workspace boundaries.",
    iconBg: "bg-cyan-500/15",
    accent: "text-cyan-300",
  },
  {
    icon: ShieldCheck,
    title: "Multi-Tenant Isolation",
    description:
      "Business data is modeled around workspace-level isolation from the start.",
    iconBg: "bg-emerald-500/15",
    accent: "text-emerald-300",
  },
  {
    icon: CloudCog,
    title: "Cloud-Native Infrastructure",
    description:
      "The MVP stack is planned around Next.js, Laravel, PostgreSQL, Redis, and Docker.",
    iconBg: "bg-orange-500/15",
    accent: "text-orange-300",
  },
  {
    icon: Sparkles,
    title: "AI-Ready Platform",
    description:
      "The platform is structured so future AI workflows can be added without reshaping the core.",
    iconBg: "bg-pink-500/15",
    accent: "text-pink-300",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20 lg:py-28"
    >
      <div className="mb-12 text-center">
        <span className="mono-chip inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-cyan-200">
          {"// why nexoraxs"}
        </span>
        <h2 className="mt-5 text-3xl font-bold md:text-4xl">
          Everything your business needs
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/60">
          Build, manage, and scale your business with one unified platform.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div key={feature.title} className="glass-card glass-card-hover p-6">
              <div
                className={`mb-5 flex h-11 w-11 items-center justify-center rounded-2xl ${feature.iconBg}`}
              >
                <Icon className={`h-5 w-5 ${feature.accent}`} aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
