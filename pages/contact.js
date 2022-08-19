import Head from "next/head"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHouse} from "@fortawesome/free-solid-svg-icons"

export default function Home() {
    return (
        <>
            <Head>
                <title>TravelBuddy - Contact</title>
                <meta name="description" content="TravelBuddy Website - Contact" />
            </Head>
            <section className="container mx-auto mt-36">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.2259069676397!2d-48.52393988396548!3d-27.586524982842043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273859186db29f%3A0xd7be7f63ca6829bb!2sR.%20Pres.%20Gama%20Rosa%2C%20240%20-%20Trindade%2C%20Florian%C3%B3polis%20-%20SC%2C%2088036-260!5e0!3m2!1spt-BR!2sbr!4v1660859842389!5m2!1spt-BR!2sbr" width="100%" height="600" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
            <section className="container mx-auto mt-36">
                <h2 className="text-cool-black text-4xl font-semibold tracking-wider">Get in touch</h2>
                <div className="grid grid-cols-3 gap-x-6 mt-7">
                    <div className="col-span-2">
                        <form>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <input className="appearance-none block w-full bg-white text-gray-700 border border-silver-sand rounded py-3 px-4 mb-3 leading-tight h-[72px] text-black text-base font-light focus:ring-0 focus:outline-none focus:border-mystic-red transition-colors" id="name" type="text" placeholder="Enter your name" />
                                </div>
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <input className="appearance-none block w-full bg-white text-gray-700 border border-silver-sand rounded py-3 px-4 mb-3 leading-tight h-[72px] text-black text-base font-light focus:ring-0 focus:outline-none focus:border-mystic-red transition-colors" id="email" type="email" placeholder="Enter your email" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <input className="appearance-none block w-full bg-white text-gray-700 border border-silver-sand rounded py-3 px-4 mb-3 leading-tight h-[72px] text-black text-base font-light focus:ring-0 focus:outline-none focus:border-mystic-red transition-colors" id="subject" type="text" placeholder="Enter your subject" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <textarea className="appearance-none block w-full bg-white text-gray-700 border border-silver-sand rounded py-3 px-4 mb-3 leading-tight h-[222px] text-black text-base font-light focus:ring-0 focus:outline-none focus:border-mystic-red transition-colors" id="message" placeholder="Enter message"></textarea>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <button type="submit" className="bg-mystic-red text-white text-lg px-12 py-2.5 hover:bg-space-cadet transition-colors">SEND MESSAGE</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div>
                        <div className="flex">
                            <FontAwesomeIcon icon={faHouse} size="2x" />
                            <span>
                                Semarang, Jawa Tengah<br/>
                                Indonesia
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
