import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }:any) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
