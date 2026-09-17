const WindowPanel = ({ label, children }) => {
  return (
    <div className="rounded-sm overflow-hidden border border-line bg-surface">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-line">
        <span className="w-2.25 h-2.25 rounded-full bg-[#C9A96A]" />
        <span className="w-2.25 h-2.25 rounded-full bg-primary" />
        <span className="w-2.25 h-2.25 rounded-full bg-[#7E9B76]" />
        <span className="ml-3 font-mono text-[11px] text-slate">{label}</span>
      </div>
      {children}
    </div>
  );
};

export default WindowPanel;