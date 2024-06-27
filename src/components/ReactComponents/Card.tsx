interface Props {
  title: string;
  description: string;
  image: string;
  link: string;
  color: string;
}

export default function Card({
  title,
  description,
  image,
  link,
  color,
}: Props) {
  return (
    <div
      className={`animate-fade-in animate duration-300 max-w-[600px] min-h-[180px] max-h-[180px] text-black  bg-white rounded-[20px] font-['Poppins'] border-2 shadow-lg hover:scale-105 flex overflow-hidden     
     ${
       color === "Adultos"
         ? "border-[#e0aea0]  shadow-[#ED695D]"
         : `${
             color === "Jóvenes"
               ? "border-[#616ED1]  shadow-[#916DE2]"
               : "border-[#a3d2ca]  shadow-[#a3d2ca]"
           }`
     }`}
    >
      <div>
        <img
          className="lg:max-w-48 md:max-w-28 max-w-28  h-full object-fill rounded-tl-[14px] rounded-bl-[14px]"
          src={image}
        />
      </div>

      <div className="pl-4 pr-4 pt-2 flex flex-col py-6 justify-between">
        <div
          className={`lg:text-xl text-[13px] font-semibold
        ${
          color === "Adultos"
            ? "text-[#e0aea0]"
            : `${color === "Jóvenes" ? "text-[#616ED1]" : "text-[#a3d2ca]"}`
        }`}
        >
          {title}
        </div>
        <div className="md:text-xs text-[10px] font-normal mb-4 md:pr-10 pr-0">
          {description}
        </div>
        <a href={link} target="_blank">
          <button
            className={`border transition duration-200 text-xs font-normal  px-2 rounded-lg
      
           ${
             color === "Adultos"
               ? "border-[#e0aea0] hover:bg-[#ED695D]"
               : `${
                   color === "Jóvenes"
                     ? "border-[#616ED1] hover:bg-[#916DE2]"
                     : "border-[#a3d2ca] hover:bg-[#a3d2ca]"
                 }`
           }`}
          >
            Ver más
          </button>
        </a>
      </div>
    </div>
  );
}
