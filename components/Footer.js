import LogoFooter from "./LogoFooter";
import FooterMenu from "./FooterMenu";
import Link from "next/link";
import SocialMedia from "./SocialMedia";

export default function Footer () {
    return (
        <footer className="bg-space-cadet">
            <div className="container mx-auto py-24">
                <div className="grid grid-cols-3">
                    <LogoFooter />
                    <div className="flex justify-center">
                        <FooterMenu />
                    </div>
                    <div className="flex justify-end">
                        <div>
                            <span className="text-2xl text-white font-semibold">CONTACT US</span>
                            <address className="text-white not-italic mt-7 text-lg mb-3.5">
                                24 Shipley St.Arvada, CO 80003<br/>
                                09378493810
                            </address>
                            <Link href="mailto:contact@travelbuddy.com">
                                <a className="text-lg text-white hover:text-mystic-red transition-colors">TravelBuddy@gmail.com</a>
                            </Link>
                            <SocialMedia />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-cetacean-blue py-4">
                <p className="text-silver-sand text-center">@Copyright 2022 TravelBuddy</p>
            </div>
        </footer>
    )
}
