const Loader = ({ label = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-3">
      <div className="w-5 h-5 border-2 border-line border-t-primary rounded-full animate-spin" />
      <p className="font-mono text-[12px] text-slate">{label}</p>
    </div>
  );
};

export default Loader;