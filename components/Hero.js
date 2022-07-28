import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const hero = {
    'home': {
        h1: 'Travel Buddy',
        h2: 'Let’s start your journey with us, your dream will come true',
        heroBackground: {
            backgroundImage: 'url(https://theessenceofturkey.files.wordpress.com/2014/03/kaputas-kas.jpg)'
        }
    },
    'aboutus': {
        h1: 'About Us',
        h2: 'TravelBuddy The best service travel',
        heroBackground: {
            backgroundImage: 'url(https://www.sovereign.com/-/media/bynder/sovereign-destinations/destination-header-images/turkey/mediterranean-coast/050190-kaputas-turkey-pixabay-2519481-hybris.jpg?rev=40f521078de34dd1affcc2d5ce1720ad&w=1920&h=940)'
        }
    },
    'contact': {
        h1: 'Contact',
        h2: 'Critics and recomendation for us',
        heroBackground: {
            backgroundImage: 'url(https://www.sovereign.com/-/media/bynder/sovereign-destinations/destination-header-images/turkey/mediterranean-coast/050190-kaputas-turkey-pixabay-2519481-hybris.jpg?rev=40f521078de34dd1affcc2d5ce1720ad&w=1920&h=940)'
        }
    },
    'packages': {
        h1: 'Packages',
        h2: 'TravelBuddy The best service travel',
        heroBackground: {
            backgroundImage: 'url(https://www.sovereign.com/-/media/bynder/sovereign-destinations/destination-header-images/turkey/mediterranean-coast/050190-kaputas-turkey-pixabay-2519481-hybris.jpg?rev=40f521078de34dd1affcc2d5ce1720ad&w=1920&h=940)'
        }
    },
    'places': {
        h1: 'Places',
        h2: 'The best places for you',
        heroBackground: {
            backgroundImage: 'url(https://www.sovereign.com/-/media/bynder/sovereign-destinations/destination-header-images/turkey/mediterranean-coast/050190-kaputas-turkey-pixabay-2519481-hybris.jpg?rev=40f521078de34dd1affcc2d5ce1720ad&w=1920&h=940)'
        }
    }
}

export default function Hero () {
    const [headIndex, setHeadIndex] = useState({})
    const router = useRouter()

    useEffect(() => {
        if (router.pathname == '/') {
            setHeadIndex(hero['home'])
        } else {
            setHeadIndex(hero[router.pathname.substring(1)])
        }
    }, [router.pathname])
    return (
        <header className="min-h-[722px] flex justify-center items-center bg-no-repeat bg-cover bg-center" style={headIndex.heroBackground}>
            <div>
                <h1 className="text-center text-8xl font-bold text-white tracking-widest">{headIndex.h1}</h1>
                <h2 className="text-center text-white text-xl tracking-wider pt-4">{headIndex.h2}</h2>
            </div>
        </header>
    )
}
