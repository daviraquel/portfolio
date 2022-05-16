import { CardContainer } from "./Carrousel.styled";

export const CarrouselCard = ({
  title,
  link,
  description,
  techs,
  imageUrl,
}) => {
  return (
    <CardContainer
      id={title}
      className="workCard"
      style={{
        backgroundImage: `url("${imageUrl}")`,
        color: "black",
      }}
    >
      <div>
        <a href={link} target="_blank" rel="noreferrer">
          <h3>{title}</h3>
        </a>
        <p>{description}</p>
        <article className="techs">
          {techs.map((el) => (
            <img className="techIcons" src={el.icon} alt={el.altText} />
          ))}
        </article>
      </div>
    </CardContainer>
  );
};
