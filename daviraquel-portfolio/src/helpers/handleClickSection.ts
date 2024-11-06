export const handleClickSection = (section: string) => {
  const targetElement = document.querySelector(section)
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" })
  }
}
