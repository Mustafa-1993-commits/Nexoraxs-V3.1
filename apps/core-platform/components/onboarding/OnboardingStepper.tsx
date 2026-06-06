// @deprecated — replaced by components/onboarding/PhaseStepper.tsx
import { Icon } from "@nexoraxs/ui";

export type OnboardingStep = 1 | 2 | 3 | 4;

const STEP_LABELS: Record<OnboardingStep, string> = {
  1: "Language",
  2: "Workspace",
  3: "Business Unit",
  4: "Main Branch",
};

const STEPS = [1, 2, 3, 4] as const;

export function OnboardingStepper({ currentStep }: { currentStep: OnboardingStep }) {
  return (
    <div className="w-full">
      <div className="flex items-start">
        {STEPS.map((step, index) => {
          const completed = step < currentStep;
          const active    = step === currentStep;

          return (
            <div key={step} className="flex min-w-0 flex-1 items-start">
              <div className="flex flex-col items-center gap-2">
                <div
                  className={[
                    "flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                    completed ? "bg-blue-600/30 text-blue-400"
                    : active  ? "bg-blue-600 text-white"
                    :           "border border-white/20 text-white/30",
                  ].join(" ")}
                >
                  {completed ? (
                    <Icon name="check" className="h-4 w-4" />
                  ) : (
                    step
                  )}
                </div>
                <span
                  className={[
                    "chip text-center",
                    completed ? "text-blue-400"
                    : active  ? "text-white"
                    :           "text-white/30",
                  ].join(" ")}
                >
                  {STEP_LABELS[step]}
                </span>
              </div>

              {index < STEPS.length - 1 && (
                <div
                  className={[
                    "mt-5 h-px flex-1",
                    step <= currentStep ? "bg-blue-500/40" : "bg-white/10",
                  ].join(" ")}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
