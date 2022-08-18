import Head from "next/head"
import UpcomingCarousel from "../components/UpcomingCarousel"
import Cards from "../components/Cards"
import {useState} from "react"
import Image from "next/image"

import LogoAboutUs from "../public/LogoAboutUs.svg"
import SectionHeader from "../components/SectionHeader";

const serviceCard = [
    {
        id: 1,
        title: 'Transportation',
        description: 'All transportation cost we bear',
        image: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/34/79/34796_v7.jpeg'
    },
    {
        id: 2,
        title: 'Guidence',
        description: 'We offer the best guidence for you',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Ponta_Negra_Beach_Hotel.jpg'
    },
    {
        id: 3,
        title: 'Accomodation',
        description: 'Luxarious and comfortable',
        image: 'https://odia.ig.com.br/_midias/jpg/2022/07/14/398x470/1_gloria_residencial___fachada-25797441.jpg'
    }
]

export default function Aboutus() {
    const [services, setServices] = useState(serviceCard)
    return (
        <>
            <Head>
                <title>TravelBuddy - About Us</title>
                <meta name="description" content="TravelBuddy Website - About Us" />
            </Head>

            <section className="container mx-auto mt-36">
                <div className="grid grid-cols-2 gap-x-12">
                    <Image src={LogoAboutUs} />
                    <div>
                        <span className="text-lg text-mystic-red tracking-wider">Who we are</span>
                        <h2 className="text-3xl text-cool-black font-semibold tracking-wider mt-6">We love to discover Indonesia</h2>
                        <p className="pt-6 text-lg tracking-wider text-dim-gray">
                            Waters make fish every without firmament saw had. Morning air subdue. Our. Air very one. Whales grass is fish whales winged night yielding land creeping that seed appear were bearing.<br/><br/>
                            Waters make fish every without firmament saw had. Morning air subdue. Our. Air very one. Whales grass is fish whales winged night yielding land creeping that seed appear were bearing.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mt-36">
                <UpcomingCarousel />
            </section>

            <section className="container mx-auto my-36">
                <SectionHeader title="We offered best services" description="The Best Service" />

                <div className="mt-16 grid grid-cols-3 gap-12">
                    {services.map((value, index) => {
                        return (
                            <Cards key={index} content={value} />
                        )
                    })}
                </div>
            </section>
        </>
    )
}
