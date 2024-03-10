
const Button = ({className, size, href, text}) => {
  const buttonCommon = () => {
    return (
      <button className={`bg-primary inline-block ${size == 'sm' && "px-[22px] py-[10px]"} ${size == 'md' && 'px-[48px] py-[10px]'} ${size == 'lg' && 'px-[36px] py-[10px]'} ${size == 'xl' && 'px-[112px] py-[10px]'} rounded-[5px] text-white font-bold`}>{text}</button>
    )
  }

  const linkCommon = () => {
    return (
      <a href={href} className={`${className} text-kulrang inline-block font-regular ${size =='sm' && "px-[22px] py-[10px]"} ${size =='md' && 'px-[48px] py-[10px]'} ${size == 'lg' && 'px-[36px] py-[10px]'} ${size == 'xl' && 'px-[112px] py-[10px]'} rounded-[5px] font-bold`}>{text}</a>
    )
  }

  return href ? linkCommon() : buttonCommon()
}

export default Button