const EmptyState = ({ message = "Nothing here yet." }) => {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-[14px] text-slate">{message}</p>
    </div>
  );
};

export default EmptyState;