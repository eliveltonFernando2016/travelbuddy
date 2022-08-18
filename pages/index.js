import Head from "next/head"
import {useRef, useState} from "react"
import DatePicker from 'react-date-picker/dist/entry.nostyle'
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'
import UpcomingCarousel from "../components/UpcomingCarousel"
import Cards from "../components/Cards"
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons/faChevronLeft"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faChevronRight} from "@fortawesome/free-solid-svg-icons/faChevronRight";

export default function Home() {
    const [checkIn, setCheckin] = useState('')
    const [checkOut, setCheckOut] = useState('')

    const navigationPrev = useRef(null)
    const navigationNext = useRef(null)

    return (
        <>
            <Head>
              <title>TravelBuddy</title>
              <meta name="description" content="TravelBuddy Website - Home" />
            </Head>

            <div className="container mx-auto -mt-40">
              <div className="text-center">
                <button className="bg-mystic-red text-white text-lg px-12 py-2.5 hover:bg-space-cadet transition-colors">Discover Now</button>
              </div>

              <div className="bg-white px-6 py-8 mt-16 mx-20">
                  <nav>
                      <ul className="flex">
                          <li className="px-3 mr-2 pb-2 text-ucla-blue text-base border-b-2 border-blue-de-france">Hotel</li>
                          <li className="px-3 mx-2 text-ucla-blue text-base border-b-2 border-white hover:border-blue-de-france transition-colors">Ticket</li>
                          <li className="px-3 ml-2 text-ucla-blue text-base border-b-2 border-white hover:border-blue-de-france transition-colors">Place</li>
                      </ul>
                  </nav>
                  <form className="mt-8">
                      <div className="grid grid-cols-5 gap-x-6">
                          <select className="h-14 border border-blue-de-france text-blue-de-france text-base font-light">
                              <option>Choose Place</option>
                              <option>Place 1</option>
                              <option>Place 2</option>
                              <option>Place 3</option>
                              <option>Place 4</option>
                              <option>Place 5</option>
                          </select>
                          <DatePicker
                              name="checkIn"
                              onChange={setCheckin}
                              value={checkIn}
                              format={`${checkIn !== '' ? 'dd/MM/y' : 'dd MM y'}`}
                              clearIcon={null}
                              dayPlaceholder="Check"
                              monthPlaceholder="in"
                              yearPlaceholder="date"
                              className="h-14 border border-blue-de-france text-blue-de-france text-base font-light"
                          />
                          <DatePicker
                              name="checkOut"
                              onChange={setCheckOut}
                              value={checkOut}
                              format={`${checkOut !== '' ? 'dd/MM/y' : 'dd MM y'}`}
                              clearIcon={null}
                              dayPlaceholder="Check"
                              monthPlaceholder="out"
                              yearPlaceholder="date"
                              className="h-14 border border-blue-de-france text-blue-de-france text-base font-light"
                          />
                          <select className="h-14 border border-blue-de-france text-blue-de-france text-base font-light">
                              <option>Person</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                          </select>
                          <button className="bg-mystic-red text-white text-lg hover:bg-space-cadet transition-colors">Search</button>
                      </div>
                  </form>
              </div>
            </div>

            <section className="container mx-auto mt-36">
                <h2 className="text-center text-cool-black text-4xl font-semibold tracking-wider">Top Places to visit</h2>
                <p className="text-center text-granite-gray text-lg tracking-wider pt-5">The Best Place to Stay in Indonesia</p>
                <div className="grid grid-cols-2 gap-12 mt-16">
                  <div className="w-full h-[415px] overflow-hidden">
                    <img src="https://atlantis.nyc3.digitaloceanspaces.com/media/legacy/atlantis/Things_To_Do/Water_Park/Beaches/Hero/Experiences_Beach.jpg" className="h-[415px] max-w-none min-w-full" />
                  </div>
                  <div className="w-full h-[415px] overflow-hidden">
                    <img src="https://www.beachpark.com.br/wp-content/uploads/2014/07/sem-t%C3%ADtulo19-2.jpg" className="h-[415px] max-w-none min-w-full" />
                  </div>
                  <div className="w-full h-[415px] overflow-hidden">
                    <img src="https://www.beachpark.com.br/wp-content/uploads/2014/07/MG_9776-2.jpg" className="h-[415px] max-w-none min-w-full" />
                  </div>
                  <div className="w-full h-[415px] overflow-hidden">
                    <img src="https://viagemeturismo.abril.com.br/wp-content/uploads/2021/07/fullscreen_letterbox-DRONE-018-EAGLE-BEACH.jpg" className="h-[415px] max-w-none min-w-full" />
                  </div>
              </div>
                <div className="text-center mt-16">
                <button className="bg-mystic-red text-white text-lg px-12 py-2.5 hover:bg-space-cadet transition-colors">Discover More</button>
              </div>
            </section>

            <section className="mt-36">
                <UpcomingCarousel />
            </section>

            <section className="container mx-auto mt-36">
                <h2 className="text-center text-cool-black text-4xl font-semibold tracking-wider">Top Hotel & Restorants</h2>
                <p className="text-center text-granite-gray text-lg tracking-wider pt-5">The Best Hotel & Restorants in Indonesia</p>

                <div className="mt-16 grid grid-cols-3 gap-12">
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
            </section>

            <section className="bg-cool-black py-24 mt-36">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <h2 className="text-white text-4xl font-semibold">What they Said</h2>
                        <div className="flex">
                            <div ref={navigationPrev} className="bg-blue-de-france text-white w-16 h-16 mr-2">
                                <FontAwesomeIcon icon={faChevronLeft} size="2x" />
                            </div>
                            <div ref={navigationNext} className="bg-blue-de-france text-white w-16 h-16 ml-2">
                                <FontAwesomeIcon icon={faChevronRight} size="2x" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

