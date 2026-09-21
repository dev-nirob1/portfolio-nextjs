import Container from "../ui/Container";
import Dot from "../ui/Dot";
import Span from "../ui/Span";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-line font-mono text-sm text-slate">
      <Container className="flex items-center justify-between gap-4 flex-col text-center md:text-left md:flex-row">
        <Span>© {year} Al Hasan Nirob. All rights reserved.</Span>
      <Span className="flex items-center gap-2">
        <Dot />
        open to full-time roles
      </Span>
      </Container>
    </footer>
  );
};

export default Footer;