import { handleClickSection } from "../helpers/handleClickSection"

interface IDownArrowProps {
  linkUrl: string
}

export const DownArrow = ({ linkUrl }: IDownArrowProps) => {
  return (
    <button
      className="absolute left-1/2 transform -translate-x-1/2 bottom-4 p-5 bg-transparent focus:outline-none"
      onClick={() => handleClickSection(linkUrl)}
    >
      <svg className="w-12 h-6 animate-bounce">
        <polyline
          points="1.8,1.6 24,20.4 46.2,1.6"
          className="block fill-transparent stroke-current stroke-2"
        ></polyline>
      </svg>
    </button>
  )
}
