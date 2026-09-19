import Container from "../ui/Container";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className=" py-8 border-t border-line font-mono text-sm text-slate">
      <Container className="flex items-center justify-between gap-4 flex-col md:flex-row">
        <span>© {year} Al Hasan Nirob. All rights reserved.</span>
      <span className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        open to full-time roles
      </span>
      </Container>
    </footer>
  );
};

export default Footer;