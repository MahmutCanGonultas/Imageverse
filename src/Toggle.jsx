import { useGlobalContext } from "./context";
import { IoMoonSharp, IoSunny } from "react-icons/io5";

const Toggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="flex  m-5">
      <button className="ml-auto " onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <IoSunny className="text-xl  lg:text-2xl xl:text-3xl " />
        ) : (
          <IoMoonSharp className="text-xl  lg:text-2xl xl:text-3xl" />
        )}
      </button>
    </section>
  );
};

export default Toggle;
