const stats = [
  { label: "Total Projects", value: "6" },
  { label: "Landing Page", value: "4" },
  { label: "Full-Stack", value: "2" },
];

const featured = [
  { id: 1, title: "BoxDrop", category: "full-stack" },
  { id: 2, title: "Aurex Chronograph", category: "landing page" },
  { id: 3, title: "Merchant SaaS Platform", category: "full-stack" },
];

const AdminPage = () => {
  return (
    <div>
      <h1 className="font-display text-[1.6rem] text-ink mb-8">Overview</h1>

      <div className="grid grid-cols-3 gap-4 mb-10">
        {stats.map((stat) => (
          <div key={stat.label} className="border border-line rounded-sm p-4">
            <p className="font-display text-[1.6rem] text-ink leading-none">
              {stat.value}
            </p>
            <p className="font-mono text-[11px] text-slate mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <p className="font-mono text-[12px] text-slate mb-4">featured</p>
      <div className="divide-y divide-line">
        {featured.map((project) => (
          <div key={project.id} className="flex items-center justify-between py-3">
            <p className="text-[15px] text-ink">{project.title}</p>
            <span className="font-mono text-[11px] text-slate">
              {project.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;