import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <p>© {2025} Marin Menkshi</p>
      <p>Contact: <a href="mailto:marin@menkshi.com">marin@menkshi.com</a></p>
    </footer>
  );
};

export default Footer;