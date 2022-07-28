import Logo from "./Logo"
import Link from "next/link"
import {useEffect, useState} from "react"
import {useRouter} from "next/router"

const itemsMenu = [
    {
        title: 'Home',
        link: '/',
        class: 'pr-6 text-lg'
    },
    {
        title: 'About',
        link: '/aboutus',
        class: 'px-6 text-lg'
    },
    {
        title: 'Packages',
        link: '/packages',
        class: 'px-6 text-lg'
    },
    {
        title: 'Places',
        link: '/places',
        class: 'px-6 text-lg'
    },
    {
        title: 'Contact',
        link: '/contact',
        class: 'pl-6 text-lg'
    }
]

export default function HeaderMenu () {
    const [menu, setMenu] = useState(itemsMenu)
    const [active, setActive] = useState(null)
    const router = useRouter()

    useEffect(() => {
        setActive(menu.findIndex(value => value.link === router.pathname))
    }, [router.pathname])

    return (
        <>
            <nav className="bg-white container flex items-center justify-between mx-auto py-6">
                <Link href="/">
                    <a>
                        <Logo />
                    </a>
                </Link>
                <ul className="flex">
                    { menu.map((value, index) => {
                        return (
                            <li key={value.title} className={`${value.class}${active==index?' text-mystic-red':' text-dim-gray hover:text-mystic-red transition-colors'}`}>
                                <Link href={value.link}>{value.title}</Link>
                            </li>
                        )
                    })}
                </ul>
                <button className="bg-mystic-red text-white text-lg px-12 py-2.5 hover:bg-space-cadet transition-colors">Book Now</button>
            </nav>
        </>
    )
}
