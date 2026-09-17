const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-between px-6 md:px-14 py-8 border-t border-line font-mono text-sm text-slate">
      <span>© {year} Al Hasan Nirob. All rights reserved.</span>
      <span className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        open to full-time roles
      </span>
    </footer>
  );
};

export default Footer;