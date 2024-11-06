interface CarrouselCardProps {
  title: string
  link: string
  description: string
  techs: { icon: string; altText: string }[]
  imageUrl: string
}

const commonCardClasses =
  "h-80 min-w-[250px] bg-cover bg-center rounded-lg relative transition-transform duration-200"
const commonCardHoverClasses = "hover:scale-110"
const commonTextContainerClasses =
  "flex flex-col gap-1.5 h-4/5 w-full bg-gray-800 bg-opacity-50 absolute bottom-0 rounded-b-lg p-2.5"

export const CarrouselCard: React.FC<CarrouselCardProps> = ({
  title,
  link,
  description,
  techs,
  imageUrl,
}) => {
  return (
    <div
      id={title}
      className={`${commonCardClasses} ${commonCardHoverClasses}`}
      style={{ backgroundImage: `url("${imageUrl}")`, color: "black" }}
    >
      <div className={commonTextContainerClasses}>
        <a href={link} target="_blank" rel="noreferrer" className="text-white">
          <h3>{title}</h3>
        </a>
        <p className="text-white">{description}</p>
        <article className="flex flex-row gap-1.5 items-center justify-center absolute bottom-1 w-full">
          {techs.map((el) => (
            <img
              key={el.altText}
              className="w-10"
              src={el.icon}
              alt={el.altText}
            />
          ))}
        </article>
      </div>
    </div>
  )
}
