import { useEffect, useState } from "react";
import NavbarDropdown from "./NavbarDropDown";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleScrollPos = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > scrollPos) {
      setIsOpen(false);
    }
    setScrollPos(currentScrollPos);
  };

  const handleItemClick = (item, path) => {
    setSelectedItem(item);
    setIsOpen(false);
    const targetElement = document.querySelector(path);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPos);
    return () => {
      window.removeEventListener("scroll", handleScrollPos);
    };
  }, [scrollPos]);

  // Lista de secciones actualizada
  const sections = [
    { name: "Creación de la idea", path: "#creacion-idea" },
    { name: "Sketching", path: "#sketching" },
    { name: "Storyboarding", path: "#storyboarding" },
    { name: "Prototipo de papel", path: "#prototipo-papel" },
    { name: "Primer prototipo", path: "#primer-prototipo" },
    { name: "Segundo prototipo", path: "#segundo-prototipo" }
  ];

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = sections.find((sec) => sec.path === `#${entry.target.id}`);
          if (section) {
            setSelectedItem(section.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    });

    sections.forEach(({ path }) => {
      const section = document.querySelector(path);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    // top-0 left-0
    <nav className={`bg-orange-400 transition-shadow duration-300 rounded-lg fixed pb-2 w-[20%] h-[85%] z-20 ${isOpen || scrollPos > 10 ? "shadow-lg" : ""}`}>
      <div className="container mx-auto">
        <div className="flex flex-col items-start p-5 space-y-6 bg-tertiary-300">
          <div onClick={handleOpen} className={`flex flex-col items-center w-fit gap-[7px] cursor-pointer md:hidden z-20 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}>
            <span className={`transition-all duration-300 ease-in-out h-[2px] w-5 bg-black-500 rounded-full ${isOpen ? "bg-white" : ""}`}></span>
            <span className={`transition-all duration-300 ease-in-out h-[2px] w-4 bg-black-500 rounded-full ${isOpen ? "bg-white" : ""}`}></span>
            <span className={`transition-all duration-300 ease-in-out h-[2px] w-5 bg-black-500 rounded-full ${isOpen ? "bg-white" : ""}`}></span>
          </div>

          <div className="flex flex-col items-start w-full space-y-4 text-black-200 text-sm font-body">
            {
            sections.map(({ name, path }) => (
              <div key={name} className="relative">
                <a
                  href={path}
                  className={`relative navlink block py-2 px-4 w-full ${selectedItem === name ? "text-primary-100 font-bold italic" : "text-black-200"} transition-colors duration-300 ease-in-out font-sourgummy text-2xl`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(name, path);
                  }}
                >
                  {name}
                  <span
                    className={`absolute left-0 bottom-[-5px] h-[2px] w-full bg-primary-100 transition-all duration-300 ${
                      selectedItem === name ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </nav>
  );
}
