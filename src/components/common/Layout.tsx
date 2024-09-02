import Footer from './Footer';
import HeaderContainer from './header/header.container';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <HeaderContainer />
      {children}
      <Footer /> 
    </>

  );
}
