import CustomerReviews from "./CustomerReviews";
import Footer from "./Footer";
import Hero from "./Hero";
import PopularProducts from "./PopularProducts";
import Service from "./Service";
import SpecialOffer from "./SpecialOffer";
import Subscribe from "./Subscribe";
import SupperQuality from "./SupperQuality";


export default function Home() {
    return(
        <main className="relative">
        <section className="xl:ps-10 sm:ps-5 ps-3"><Hero/></section>
        <section className="xl:ps-10 sm:ps-5 ps-3 py-20"><PopularProducts/></section>
        <section className="xl:ps-10 sm:ps-5 ps-3 py-20"><SupperQuality/></section>
        <section className="xl:ps-10 sm:ps-5 ps-3 py-20"><Service/></section>
        <section className="xl:ps-10 sm:ps-5 ps-3 py-20"><SpecialOffer/></section>
        <section className="xl:ps-10 sm:ps-5 ps-3 py-20"><CustomerReviews/></section>
        <section className="xl:ps-10 sm:ps-5 ps-3 py-20"><Subscribe/></section>
        <section className="xl:ps-10 sm:ps-5 ps-3 py-20 bg-black text-white"><Footer/></section>


        </main>
    );
}