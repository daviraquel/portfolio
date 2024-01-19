import { ArrowLink } from "./DownArrow.styled"

export const DownArrow = ({ link }) => {
  return (
    <ArrowLink href={link}>
      <div>
        <svg>
          <polyline points="1.8,1.6 24,20.4 46.2,1.6 "></polyline>
        </svg>
      </div>
    </ArrowLink>
  )
}
