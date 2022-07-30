import Link from "next/link"

export default function FooterMenu () {
    return (
        <div>
            <span className="text-2xl text-white font-semibold">DISCOVER DESTINATION</span>
            <nav>
                <ul className="mt-7">
                    <li className="text-lg text-white hover:text-mystic-red transition-colors">
                        <Link href="/">Bali</Link>
                    </li>
                    <li className="text-lg text-white pt-3.5 hover:text-mystic-red transition-colors">
                        <Link href="/">Karimun Jawa</Link>
                    </li>
                    <li className="text-lg text-white pt-3.5 hover:text-mystic-red transition-colors">
                        <Link href="/">Jepara</Link>
                    </li>
                    <li className="text-lg text-white pt-3.5 hover:text-mystic-red transition-colors">
                        <Link href="/">Lombok</Link>
                    </li>
                    <li className="text-lg text-white pt-3.5 hover:text-mystic-red transition-colors">
                        <Link href="/">Yogyakarta</Link>
                    </li>
                    <li className="text-lg text-white pt-3.5 hover:text-mystic-red transition-colors">
                        <Link href="/">Flores</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
