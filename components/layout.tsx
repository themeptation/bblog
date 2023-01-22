import Alert from "./alert";
import Cta from "./cta";
import Footer from "./footer";
import Meta from "./meta";
import Nav from "./nav";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert show />
        <Nav />
        <main>{children}</main>
      </div>

      <Cta />
      <Footer />
    </>
  );
};

export default Layout;
