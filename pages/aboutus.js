import Head from "next/head"
import UpcomingCarousel from "../components/UpcomingCarousel";

export default function Aboutus() {
    return (
        <>
            <Head>
                <title>TravelBuddy - About Us</title>
                <meta name="description" content="TravelBuddy Website - About Us" />
            </Head>
            <h1>About Us</h1>
            <section className="mt-36">
                <UpcomingCarousel />
            </section>
        </>
    )
}
