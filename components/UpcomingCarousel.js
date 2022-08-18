import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons/faChevronLeft"
import {faChevronRight} from "@fortawesome/free-solid-svg-icons/faChevronRight"
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar"

import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation} from "swiper"
import 'swiper/css'

import {useRef} from "react"

export default function UpcomingCarousel () {
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)

    return (
        <>
            <div className="h-[880px] absolute z-50 flex items-center ml-5">
                <div ref={navigationPrevRef} className="rounded-full bg-white/50 hover:bg-white transition-colors border-1 border-white/50 text-mystic-red h-[86px] w-[86px] flex justify-center items-center cursor-pointer">
                    <FontAwesomeIcon icon={faChevronLeft} size="2x" />
                </div>
            </div>
            <div className="h-[880px] absolute right-0 z-50 flex items-center mr-5">
                <div ref={navigationNextRef} className="rounded-full bg-white/50 hover:bg-white transition-colors border-1 border-white/50 text-mystic-red h-[86px] w-[86px] flex justify-center items-center cursor-pointer">
                    <FontAwesomeIcon icon={faChevronRight} size="2x" />
                </div>
            </div>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                modules={[Navigation]}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
            >
                <SwiperSlide>
                    <div className="h-[880px] bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url("https://cdn.getyourguide.com/img/location/53bffc6b150e2-m1404229779.jpg/99.jpg")`}}>
                        <div className="container h-full mx-auto flex justify-end items-center">
                            <div className="bg-white p-12">
                                <span className="text-lg text-mystic-red">Upcoming Event</span>
                                <p className="text-3xl text-cool-black font-semibold tracking-wider pt-3.5">Bali - Indonesia</p>
                                <p className="text-lg text-granite-gray pt-6 font-normal">
                                    Waters make fish every without firmament saw had. Morning<br/>
                                    air subdue. Our, air very one. Whales grass is fish whales<br/>
                                    winged.
                                </p>
                                <p className="text-lg text-granite-gray pt-8">
                                    date : <span className="text-arsenic">12 Aug 2020</span>
                                </p>
                                <p className="text-lg text-granite-gray pt-5">
                                    cost : <span className="text-arsenic">Start from Rp3000.000,00</span>
                                </p>
                                <p className="text-lg text-granite-gray pt-5">
                                    organizer : <span className="text-arsenic">TravelBuddy</span>
                                </p>
                                <p className="text-lg text-granite-gray pt-5">
                                    Rating :
                                    <span className="text-mikado-yellow">
                                        <FontAwesomeIcon icon={faStar} className="ml-1" />
                                        <FontAwesomeIcon icon={faStar} className="ml-1" />
                                        <FontAwesomeIcon icon={faStar} className="ml-1" />
                                        <FontAwesomeIcon icon={faStar} className="ml-1" />
                                        <FontAwesomeIcon icon={faStar} className="ml-1" />
                                    </span>
                                </p>
                                <button className="bg-mystic-red text-white text-lg px-12 py-2.5 hover:bg-space-cadet transition-colors mt-8">Plan Details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[880px] bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url("https://www.melia.com/dam/jcr:bbdc86f5-a1ad-4d01-b24e-fbb76dbffc15/302MeliaCaribeTropical-Pool_Main-1600x785.jpg")`}}>
                        <div className="container h-full mx-auto flex justify-end items-center">
                            <div className="bg-white p-12">
                                <span className="text-lg text-mystic-red">Upcoming Event</span>
                                <p className="text-3xl text-cool-black font-semibold tracking-wider pt-3.5">Bali - Indonesia</p>
                                <p className="text-lg text-granite-gray pt-6 font-normal">
                                    Waters make fish every without firmament saw had. Morning<br/>
                                    air subdue. Our, air very one. Whales grass is fish whales<br/>
                                    winged.
                                </p>
                                <p className="text-lg text-granite-gray pt-8">
                                    date : <span className="text-arsenic">12 Aug 2020</span>
                                </p>
                                <p className="text-lg text-granite-gray pt-5">
                                    cost : <span className="text-arsenic">Start from Rp3000.000,00</span>
                                </p>
                                <p className="text-lg text-granite-gray pt-5">
                                    organizer : <span className="text-arsenic">TravelBuddy</span>
                                </p>
                                <p className="text-lg text-granite-gray pt-5">
                                    Rating :
                                    <span className="text-mikado-yellow">
                                        <FontAwesomeIcon icon={faStar} className="ml-1" />
                                        <FontAwesomeIcon icon={faStar} className="ml-1" />
                                        <FontAwesomeIcon icon={faStar} className="ml-1" />
                                        <FontAwesomeIcon icon={faStar} className="ml-1" />
                                        <FontAwesomeIcon icon={faStar} className="ml-1" />
                                      </span>
                                </p>
                                <button className="bg-mystic-red text-white text-lg px-12 py-2.5 hover:bg-space-cadet transition-colors mt-8">Plan Details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[880px] bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url("https://www.durobeach.com/wp-content/uploads/2017/06/Home_topo2-1536x672-min-1536x672.jpg")`}}>
                        <div className="container h-full mx-auto flex justify-end items-center">
                            <div className="bg-white p-12">
                                <span className="text-lg text-mystic-red">Upcoming Event</span>
                                <p className="text-3xl text-cool-black font-semibold tracking-wider pt-3.5">Bali - Indonesia</p>
                                <p className="text-lg text-granite-gray pt-6 font-normal">
                                    Waters make fish every without firmament saw had. Morning<br/>
                                    air subdue. Our, air very one. Whales grass is fish whales<br/>
                                    winged.
                                </p>
                                <p className="text-lg text-granite-gray pt-8">
                                    date : <span className="text-arsenic">12 Aug 2020</span>
                                </p>
                                <p className="text-lg text-granite-gray pt-5">
                                    cost : <span className="text-arsenic">Start from Rp3000.000,00</span>
                                </p>
                                <p className="text-lg text-granite-gray pt-5">
                                    organizer : <span className="text-arsenic">TravelBuddy</span>
                                </p>
                                <p className="text-lg text-granite-gray pt-5">
                                    Rating :
                                    <span className="text-mikado-yellow">
                                        <FontAwesomeIcon icon={faStar} className="ml-1" />
                                        <FontAwesomeIcon icon={faStar} className="ml-1" />
                                        <FontAwesomeIcon icon={faStar} className="ml-1" />
                                        <FontAwesomeIcon icon={faStar} className="ml-1" />
                                        <FontAwesomeIcon icon={faStar} className="ml-1" />
                                      </span>
                                </p>
                                <button className="bg-mystic-red text-white text-lg px-12 py-2.5 hover:bg-space-cadet transition-colors mt-8">Plan Details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[880px] bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url("https://www.visiteosusa.com.br/sites/default/files/styles/hero_l/public/images/hero_media_image/2016-10/2%20HERO_12_Dolphins_Randy%20Ruby.jpg?itok=vqwqPx3w")`}}>
                        <div className="container h-full mx-auto flex justify-end items-center">
                            <div className="bg-white p-12">
                                <span className="text-lg text-mystic-red">Upcoming Event</span>
                                <p className="text-3xl text-cool-black font-semibold tracking-wider pt-3.5">Bali - Indonesia</p>
                                <p className="text-lg text-granite-gray pt-6 font-normal">
                                    Waters make fish every without firmament saw had. Morning<br/>
                                    air subdue. Our, air very one. Whales grass is fish whales<br/>
                                    winged.
                                </p>
                                <p className="text-lg text-granite-gray pt-8">
                                    date : <span className="text-arsenic">12 Aug 2020</span>
                                </p>
                                <p className="text-lg text-granite-gray pt-5">
                                    cost : <span className="text-arsenic">Start from Rp3000.000,00</span>
                                </p>
                                <p className="text-lg text-granite-gray pt-5">
                                    organizer : <span className="text-arsenic">TravelBuddy</span>
                                </p>
                                <p className="text-lg text-granite-gray pt-5">
                                    Rating :
                                    <span className="text-mikado-yellow">
                                        <FontAwesomeIcon icon={faStar} className="ml-1" />
                                        <FontAwesomeIcon icon={faStar} className="ml-1" />
                                        <FontAwesomeIcon icon={faStar} className="ml-1" />
                                        <FontAwesomeIcon icon={faStar} className="ml-1" />
                                        <FontAwesomeIcon icon={faStar} className="ml-1" />
                                      </span>
                                </p>
                                <button className="bg-mystic-red text-white text-lg px-12 py-2.5 hover:bg-space-cadet transition-colors mt-8">Plan Details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[880px] bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url("https://viagemeturismo.abril.com.br/wp-content/uploads/2021/07/fullscreen_letterbox-DRONE-018-EAGLE-BEACH.jpg")`}}>
                        <div className="container h-full mx-auto flex justify-end items-center">
                            <div className="bg-white p-12">
                                <span className="text-lg text-mystic-red">Upcoming Event</span>
                                <p className="text-3xl text-cool-black font-semibold tracking-wider pt-3.5">Bali - Indonesia</p>
                                <p className="text-lg text-granite-gray pt-6 font-normal">
                                    Waters make fish every without firmament saw had. Morning<br/>
                                    air subdue. Our, air very one. Whales grass is fish whales<br/>
                                    winged.
                                </p>
                                <p className="text-lg text-granite-gray pt-8">
                                    date : <span className="text-arsenic">12 Aug 2020</span>
                                </p>
                                <p className="text-lg text-granite-gray pt-5">
                                    cost : <span className="text-arsenic">Start from Rp3000.000,00</span>
                                </p>
                                <p className="text-lg text-granite-gray pt-5">
                                    organizer : <span className="text-arsenic">TravelBuddy</span>
                                </p>
                                <p className="text-lg text-granite-gray pt-5">
                                    Rating :
                                    <span className="text-mikado-yellow">
                                        <FontAwesomeIcon icon={faStar} className="ml-1" />
                                        <FontAwesomeIcon icon={faStar} className="ml-1" />
                                        <FontAwesomeIcon icon={faStar} className="ml-1" />
                                        <FontAwesomeIcon icon={faStar} className="ml-1" />
                                        <FontAwesomeIcon icon={faStar} className="ml-1" />
                                      </span>
                                </p>
                                <button className="bg-mystic-red text-white text-lg px-12 py-2.5 hover:bg-space-cadet transition-colors mt-8">Plan Details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
