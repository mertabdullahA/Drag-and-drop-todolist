import { AppsOutline, HomeOutline } from "react-ionicons";

const Sidebar = () => {
  const navLinks = [
    {
      title: "Anasayfa",
      icon: <HomeOutline color="#555" width="22px" height="22px" />,
      active: false,
    },
    {
      title: "Yapılacaklar",
      icon: <AppsOutline color="#555" width="22px" height="22px" />,
      active: true,
    },
  ];
  return (
    <div className="fixed left-0 top-0 md:w-[230px] w-[60px] overflow-hidden h-full flex flex-col">
      <div className="w-full flex items-center md:justify-start justify-center md:pl-5 h-[70px] bg-[#fff]">
        <span className="text-black font-semibold text-2xl md:block hidden">
          Abdullah<span className="text-gray-600">ToDo</span>
        </span>
        <span className="text-orange-400 font-semibold text-2xl md:hidden block">
          L.
        </span>
      </div>
      <div className="w-full h-[calc(100vh-70px)] border-r flex flex-col md:items-start items-center gap-2 border-slate-300 bg-[#fff] py-5 md:px-3 px-3 relative">
        {navLinks.map((link) => {
          return (
            <div
              key={link.title}
              className={`flex items-center gap-2 w-full rounded-lg hover:bg-orange-300 px-2 py-3 cursor-pointer ${
                link.active ? "bg-orange-300" : "bg-transparent"
              }`}
            >
              {link.icon}
              <span className="font-medium text-[15px] md:block hidden">
                {link.title}
              </span>
            </div>
          );
        })}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <br></br>
        <br></br>
        <p className="justify-center items-center text-gray-600">
          Developed by Abdullah.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
