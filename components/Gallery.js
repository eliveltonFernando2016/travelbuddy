export default function Gallery ({ content }) {
    return (
        <div className="grid grid-cols-2 gap-12 mt-16">
            {content.map((value, index) => {
               return (
                   <div key={index} className="w-full h-[415px] overflow-hidden">
                       <img src={value} className="h-[415px] max-w-none min-w-full" />
                   </div>
               )
            })}
        </div>
    )
}
