import Head from "next/head"
import DatePicker from 'react-date-picker/dist/entry.nostyle'
import {useState} from "react"

export default function Home() {
    const [checkIn, setCheckin] = useState(new Date())
    const [checkOut, setCheckOut] = useState(new Date())
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
                          <DatePicker onChange={setCheckin} value={checkIn} calendarAriaLabel="Check in date" className="h-14 border border-blue-de-france text-blue-de-france text-base font-light" />
                          <DatePicker onChange={setCheckOut} value={checkOut} className="h-14 border border-blue-de-france text-blue-de-france text-base font-light" />
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
      </>
  )
}

