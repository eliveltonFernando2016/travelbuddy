import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar"

export default function Cards ({ content }) {
    function printStars(value) {
        for(let i=0; i < value; i++) {
            <FontAwesomeIcon key={i} icon={faStar} className="mr-1"/>
        }
    }

    return (
        <>
            <div>
                <div className="h-[338px] w-full overflow-hidden">
                    <img src={content.image} className="h-[338px] max-w-none min-w-full" />
                </div>
                <p className="text-2xl text-black tracking-wider mt-10">{content.title}</p>
                {content.numberStars && content.reviewCount &&
                    <p className="pt-6">
                        <span className="text-mikado-yellow">
                            {printStars(content.numberStars)}
                        </span>
                        <span className="text-black font-light">({content.reviewCount} Review)</span>
                    </p>
                }
                {content.description &&
                    <p className="pt-2.5 text-granite-gray font-light text-lg">{content.description}</p>
                }
                {content.place && content.country &&
                    <p className="pt-2.5 text-granite-gray font-light text-lg">{content.place}, {content.country}</p>
                }
                {content.price && content.coin &&
                    <p className="pt-2.5 text-black font-light">From <span className="text-lava">{content.coin}{content.price}</span></p>
                }
            </div>
        </>
    )
}
