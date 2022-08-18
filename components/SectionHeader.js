export default function SectionHeader ({title, description}) {
    return (
        <>
            <h2 className="text-center text-cool-black text-4xl font-semibold tracking-wider">{title}</h2>
            <p className="text-center text-granite-gray text-lg tracking-wider pt-5">{description}</p>
        </>
    )
}
