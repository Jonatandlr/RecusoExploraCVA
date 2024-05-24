interface Props {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function Card({
  title = "Title",
  description = "Description",
  image = "https://via.placeholder.com/128x131",
  link = "#",
}: Props) {
  return (
    <div className="animate-fade-in animate duration-300 max-w-[600px] min-h-[180px] text-black  bg-white rounded-[20px] font-['Poppins'] border-2 border-blue-500 shadow-blue-700 shadow-lg hover:scale-105 flex overflow-hidden">
      <div>
        <img
          className="max-w-48 h-full object-fill rounded-tl-[14px] rounded-bl-[14px]"

          src={image}
        />
      </div>

      <div className="pl-4 pr-4 pt-2 flex flex-col py-2">
        <div className="text-lg text-base font-medium">{title}</div>
        <div className="  text-xs font-normal mb-1">{description}</div>
        {/* redirect link */}

        <a href={link}>
          <button className="border border-blue-500 hover:bg-blue-500 transition duration-200 text-xs font-normal  px-2 rounded-lg">
            Ver mas
          </button>
        </a>
      </div>
      
    </div>
  );
}
