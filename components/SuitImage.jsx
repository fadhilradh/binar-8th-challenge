import Image from 'next/image'

const SuitImage = ({ src, cname }) => {
  return (
    <div className="p-4 shadow-xl rounded-xl hover:bg-[#3E3426] cursor-pointer object-fill">
      <Image className={`${cname}`} src={src} width={130} height={130} />
    </div>
  )
}

export default SuitImage
