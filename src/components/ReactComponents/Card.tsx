interface Props {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function Card({
  title,
  description,
  image,
  link,
}: Props) {
  return (
    <div className="animate-fade-in animate duration-300 max-w-[600px] min-h-[150px] max-h-[180px] text-black  bg-white rounded-[20px] font-['Poppins'] border-2 border-blue-500 shadow-blue-700 shadow-lg hover:scale-105 flex overflow-hidden">
      <div>
        <img
          className="lg:max-w-48 md:max-w-28 max-w-28  h-full object-fill rounded-tl-[14px] rounded-bl-[14px]"

          src={image}
        />
      </div>

      <div className="pl-4 pr-4 pt-2 flex flex-col py-6 justify-between">
        <div className="lg:text-xl text-color-base text-[13px] font-semibold">{title}</div>
        <div className="md:text-xs text-[10px] font-normal mb-4 md:pr-10 pr-0">{description}</div>
        <a href={link}>
          <button className="border border-blue-500 hover:bg-blue-500 transition duration-200 text-xs font-normal  px-2 rounded-lg">
            Ver mas
          </button>
        </a>
      </div>
      
    </div>
  );
}
