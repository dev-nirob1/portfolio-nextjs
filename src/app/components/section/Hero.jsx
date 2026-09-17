const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-between px-6 md:px-14 py-8 border-t border-line font-mono text-[11px] text-slate">
      <span>© {year} Nirob</span>
      <span className="flex items-center gap-2">
        <span className="w-[6px] h-[6px] rounded-full bg-primary" />
        open to full-time roles
      </span>
    </footer>
  );
};

export default Footer;