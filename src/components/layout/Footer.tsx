const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="px-8 py-6 bg-surface border-border border-t border text-center text-muted">
      © {currentYear} SHOPA . Built with React
    </footer>
  );
};

export default Footer;
