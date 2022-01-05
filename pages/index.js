import Header from '../components/header';
import SloganSection from '../components/slogan-section';

export default function Home() {
    return (
        <div className="container">
            <Header />
            <SloganSection />
            <div className="p-11">Catch phrase</div>
            <div id="products" className="p-11">
                Products
            </div>
            <div id="about" className="p-11">
                About us
            </div>
            <div id="contact-us" className="p-11">
                Contact us
            </div>
        </div>
    );
}
