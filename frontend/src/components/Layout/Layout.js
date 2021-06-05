import Wrapper from '../../hoc/Wrapper';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = props => {
  return (
    <Wrapper>
      <Header />
      <main className="mt-14">{props.children}</main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
