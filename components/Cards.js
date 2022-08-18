import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";

export default function Cards () {
    return (
        <>
            <div>
                <div className="h-[338px] overflow-hidden">
                    <img src="https://casacor.abril.com.br/wp-content/uploads/sites/7/2021/05/jad-sylla-tours-duo-jean-nouvel-designboom-01.png?w=818" />
                </div>
                <p className="text-2xl text-black tracking-wider mt-10">Hotel Grand Indonesia</p>
                <p className="pt-6">
                    <span className="text-mikado-yellow">
                        <FontAwesomeIcon icon={faStar} className="mr-1" />
                        <FontAwesomeIcon icon={faStar} className="mr-1" />
                        <FontAwesomeIcon icon={faStar} className="mr-1" />
                        <FontAwesomeIcon icon={faStar} className="mr-1" />
                        <FontAwesomeIcon icon={faStar} className="mr-1" />
                    </span>
                    <span className="text-black font-light">(200 Review)</span></p>
                <p className="pt-2.5 text-granite-gray font-light text-lg">Jakarta, Indonesia</p>
                <p className="pt-2.5 text-black font-light">From <span className="text-lava">Rp1.500.000,00</span></p>
            </div>
        </>
    )
}
