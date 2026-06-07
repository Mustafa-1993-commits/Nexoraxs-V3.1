import type { Branch, BusinessUnit, OSSubscription, User, Workspace } from "@/lib/store";

const COMMERCE_APP_URL = "http://localhost:3002";

interface CommerceSetupUrlInput {
  user: User | null;
  workspace: Workspace | null;
  businessUnit: BusinessUnit | null;
  branch: Branch | null;
  subscription: OSSubscription | null;
}

export function commerceSetupUrl({
  user,
  workspace,
  businessUnit,
  branch,
  subscription,
}: CommerceSetupUrlInput): string {
  if (!user || !workspace || !businessUnit || !subscription || subscription.osId !== "commerce") {
    return "/dashboard/apps";
  }

  const params = new URLSearchParams({
    nx_handoff: "commerce",
    currentUserId: user.id,
    currentWorkspaceId: workspace.id,
    currentBusinessUnitId: businessUnit.id,
    currentOSId: "commerce",
    currentOSSubscriptionId: subscription.id,
    workspaceName: workspace.name,
    workspaceCountry: workspace.country,
    workspaceCurrency: workspace.currency,
    workspaceTimezone: workspace.timezone,
    userName: user.fullName || user.name || "",
    userEmail: user.email,
    businessUnitName: businessUnit.name,
    businessPreset: businessUnit.presetId || businessUnit.preset || "retail",
    plan: subscription.plan,
    planId: subscription.planId,
  });

  if (branch) {
    params.set("currentBranchId", branch.id);
    params.set("branchName", branch.name);
  }
  if (subscription.trialEndsAt) params.set("trialEndsAt", subscription.trialEndsAt);
  if (subscription.renewsAt) params.set("renewsAt", subscription.renewsAt);

  return `${COMMERCE_APP_URL}/setup?${params.toString()}`;
}

export function commerceDashboardUrl(): string {
  return `${COMMERCE_APP_URL}/dashboard`;
}
