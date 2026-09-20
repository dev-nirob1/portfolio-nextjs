import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const FrontLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default FrontLayout;