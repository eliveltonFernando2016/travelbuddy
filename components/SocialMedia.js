import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram"
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons/faSquareFacebook"
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons/faSquareTwitter"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link"

export default function SocialMedia () {
    return (
        <div className="mt-7">
            <span className="text-mystic-red text-lg font-semibold">Social Media</span>
            <div className="mt-2">
                <Link href="https://instagram.com">
                    <a target="_blank" className="text-white text-4xl hover:text-mystic-red transition-colors">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </Link>
                <Link href="https://facebook.com">
                    <a target="_blank" className="text-white text-4xl ml-5 hover:text-mystic-red transition-colors">
                        <FontAwesomeIcon icon={faSquareFacebook} />
                    </a>
                </Link>
                <Link href="https://twitter.com">
                    <a target="_blank" className="text-white text-4xl ml-5 hover:text-mystic-red transition-colors">
                        <FontAwesomeIcon icon={faSquareTwitter} />
                    </a>
                </Link>
            </div>
        </div>
    )
}
