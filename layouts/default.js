import Header from '../components/headers/Header-phase1';
import Footer from '../components/Footer';

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
