import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Iconos para el menú móvil

const sections = [
    { id: "inicio", label: "Inicio" },
    { id: "nosotros", label: "Nosotros" },
    { id: "proyecto", label: "Proyecto" },
    { id: "videojuego", label: "Videojuego" },
];

export const Navbar = () => {
    const [activeSection, setActiveSection] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado para el menú móvil
    const { scrollYProgress } = useScroll();
    const scrollSpring = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, id) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            // Detecta si es mobile o desktop según el ancho de la pantalla
            const isMobile = window.innerWidth <= 768; // Puedes ajustar el breakpoint según tus necesidades
            const offset = isMobile ? -50 : 0; // Offset dinámico para mobile y desktop
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = window.scrollY + elementPosition + offset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
        setIsMobileMenuOpen(false); // Cierra el menú móvil
    };
    

    useEffect(() => {
        const handleScroll = () => {
            let sectionFound = false;
            sections.forEach(({ id }) => {
                const section = document.getElementById(id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        setActiveSection(id);
                        sectionFound = true;
                    }
                }
            });
            if (!sectionFound) {
                setActiveSection(""); // Limpia el estado si no hay sección activa
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Inicializa el estado
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            {/* Navbar Desktop */}
            <div className="hidden lg:flex fixed top-0 left-0 h-full w-16 flex-col items-center bg-[var(--bg-color)] py-4">
                <motion.a
                    href="#inicio"
                    className="flex font-bold text-lg h-12 w-12 mb-6 text-center items-center justify-center rounded-xl"
                >
                    IHC<span className="text-[#0aff9d]">.</span>
                </motion.a>

                {sections.map(({ id, label }) => {
                    const isSelected = activeSection === id;
                    return (
                        <motion.button
                            key={id}
                            onClick={(e) => handleLinkClick(e, id)}
                            className={`flex items-center justify-center text-center text-lg w-full px-4 py-4 h-[120px] font-light border-l-4 transition-all duration-300 ${
                                isSelected
                                    ? "text-[#0aff9d] border-[#0aff9d] bg-[#111111]"
                                    : "text-[#dddddd] border-transparent"
                            } hover:text-[#0aff9d] hover:border-[#0aff9d]`}
                            transition={{ type: "spring", stiffness: 300 }}
                            style={{
                                writingMode: "vertical-rl",
                                transform: "rotate(180deg)",
                            }}
                        >
                            {label}
                        </motion.button>
                    );
                })}
            </div>

            {/* Navbar Mobile */}
            <div className="lg:hidden fixed top-0 left-0 w-full bg-[var(--bg-color)] py-4 z-50">
                <div className="flex items-center justify-between px-4">
                    <a href="#inicio">
                        <span className="font-bold text-lg">IHC<span className="text-[#0aff9d]">.</span></span>
                    </a>
                    <button className="focus:outline-none px-8" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <FaTimes className="text-white w-6 h-6" /> : <FaBars className="text-white w-6 h-6" />}
                    </button>
                </div>
                {isMobileMenuOpen && (
                    <ul className="mt-4 flex flex-col gap-4 px-4">
                        {sections.map(({ id, label }) => (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    onClick={(e) => handleLinkClick(e, id)}
                                    className="block text-lg text-white hover:text-[#0aff9d] transition-colors"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};
