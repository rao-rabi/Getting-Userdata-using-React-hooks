import logo from "../logo.png";
const Header = () => {
  return (
    <nav className="d-flex px-4 py-1 bg-body-secondary">
      <img src={logo} alt="" width={60} />
      <h1 className="pt-1 px-2 fw-bold text-primary-emphasis">Facebook</h1>
    </nav>
  );
};

export default Header;
