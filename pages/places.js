import Head from "next/head"
import {useState} from "react"
import Gallery from "../components/Gallery"
import SectionHeader from "../components/SectionHeader";

const GalleryItems = [
    'https://atlantis.nyc3.digitaloceanspaces.com/media/legacy/atlantis/Things_To_Do/Water_Park/Beaches/Hero/Experiences_Beach.jpg',
    'https://www.beachpark.com.br/wp-content/uploads/2014/07/sem-t%C3%ADtulo19-2.jpg',
    'https://www.beachpark.com.br/wp-content/uploads/2014/07/MG_9776-2.jpg',
    'https://viagemeturismo.abril.com.br/wp-content/uploads/2021/07/fullscreen_letterbox-DRONE-018-EAGLE-BEACH.jpg',
    'https://atlantis.nyc3.digitaloceanspaces.com/media/legacy/atlantis/Things_To_Do/Water_Park/Beaches/Hero/Experiences_Beach.jpg',
    'https://www.beachpark.com.br/wp-content/uploads/2014/07/sem-t%C3%ADtulo19-2.jpg',
    'https://www.beachpark.com.br/wp-content/uploads/2014/07/MG_9776-2.jpg',
    'https://viagemeturismo.abril.com.br/wp-content/uploads/2021/07/fullscreen_letterbox-DRONE-018-EAGLE-BEACH.jpg'
]

export default function Home() {
    const [gallery, setGallery] = useState(GalleryItems)
    return (
        <>
            <Head>
                <title>TravelBuddy - Places</title>
                <meta name="description" content="TravelBuddy Website - Places" />
            </Head>
            <section className="container mx-auto my-36">
                <SectionHeader title="Places" description="The Best Place to Stay in Indonesia" />

                <Gallery content={gallery} />
            </section>
        </>
    )
}
