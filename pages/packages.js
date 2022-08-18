import Head from "next/head"
import UpcomingCarousel from "../components/UpcomingCarousel"
import Cards from "../components/Cards"
import {useState} from "react";
import SectionHeader from "../components/SectionHeader";

const topCard = [
    {
        id: 1,
        title: 'Hotel Grand Indonesia',
        image: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2020/10/melhores-resorts-mundo-capa2019.jpg',
        numberStars: 5,
        reviewCount: 200,
        place: 'Jakarta',
        country: 'Indonesia',
        coin: 'Rp',
        price: 150000000
    },
    {
        id: 2,
        title: 'Hotel Grand Indonesia',
        image: 'https://viagemeturismo.abril.com.br/wp-content/uploads/2015/12/188153847.jpg?quality=70&strip=info',
        numberStars: 4,
        reviewCount: 200,
        place: 'Jakarta',
        country: 'Indonesia',
        coin: 'Rp',
        price: 150000000
    },
    {
        id: 3,
        title: 'Hotel Grand Indonesia',
        image: 'https://olhardoviajante.com.br/wp-content/uploads/2021/03/Trancoso-26.png',
        numberStars: 3,
        reviewCount: 200,
        place: 'Jakarta',
        country: 'Indonesia',
        coin: 'Rp',
        price: 150000000
    }
]
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

export default function Home() {
    const [top, setTop] = useState(topCard)
    const [services, setServices] = useState(serviceCard)

    return (
        <>
            <Head>
                <title>TravelBuddy - Packages</title>
                <meta name="description" content="TravelBuddy Website - Packages" />
            </Head>

            <section className="container mx-auto mt-36">
                <SectionHeader title="Top Hotel & Restorants" description="The Best Hotel & Restorants in Indonesia" />

                <div className="mt-16 grid grid-cols-3 gap-12">
                    {top.map((value, index) => {
                        return (
                            <Cards key={index} content={value} />
                        )
                    })}
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
