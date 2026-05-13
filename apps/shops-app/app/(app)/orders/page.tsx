export default function OrdersPage() {
  return (
    <div>
      <div className="mb-8">
        <p className="chip mb-2 text-white/30">{"// orders"}</p>
        <h1 className="text-3xl font-bold tracking-tight text-white">Orders</h1>
        <p className="mt-2 text-sm text-white/50">
          Track and manage customer orders.
        </p>
      </div>
      <PlaceholderCard
        icon="🛒"
        title="Orders are coming soon"
        description="View, process, and fulfil customer orders. Track status from placement to delivery."
      />
    </div>
  );
}

function PlaceholderCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="card flex flex-col items-center justify-center py-20 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-3xl">
        {icon}
      </div>
      <p className="text-lg font-semibold text-white mb-2">{title}</p>
      <p className="max-w-sm text-sm text-white/40">{description}</p>
      <span className="chip mt-6 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/30">
        Foundation release
      </span>
    </div>
  );
}
