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
  "h-full w-full bg-black bg-opacity-50 absolute bottom-0 rounded-b-lg "

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
      <a href={link} target="_blank" rel="noreferrer" className="text-white">
        <div className={commonTextContainerClasses}>
          <h3 className="text-2xl font-bold pt-6 px-10">{title}</h3>
          <p className="text-white pt-6 px-10">{description}</p>
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
      </a>
    </div>
  )
}
