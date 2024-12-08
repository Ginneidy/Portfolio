"use client"

import Link from "next/link"
import { useCallback, useEffect, useState } from "react"

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMenuClosing, setIsMenuClosing] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState("")

    const toggleMenu = () => {
        if (isMenuOpen) {
            setIsMenuClosing(true)
            setTimeout(() => {
                setIsMenuOpen(false)
                setIsMenuClosing(false)
            }, 700) // match the duration of the animation
        } else {
            setIsMenuOpen(true)
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50 ? true : false)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    useEffect(() => {
        const sections = document.querySelectorAll<HTMLElement>("section")

        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }, observerOptions)

        sections.forEach((section) => {
            observer.observe(section)
        })

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section)
            })
        }
    }, [])

    const getLinkClass = useCallback((section: string): string => {
        return activeSection === section ? "text-gray-700 font-bold" : "hover:text-gray-700 transition-colors"
    }, [activeSection])

    const scrollToTop = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <header className={`w-full px-4 md:px-10 lg:px-20 xl:px-40 flex items-center font-light text-lg text-center py-4 sticky top-0 bg-[#F5F4F4] z-50 transition-shadow duration-500 ${isScrolled ? "shadow-md" : ""}`}>
            <nav className="w-full flex justify-between items-center relative z-50">
                <ul className="flex">
                    <li className="text-xl font-semibold">
                        <Link href={"#"} onClick={scrollToTop} className="hover:text-gray-700 transition-colors flex items-center space-x-4">
                            <img src={"https://svgshare.com/i/18A3.svg"} className="h-10" alt="" />
                            <span>
                                Ginneidy Leon
                            </span>
                        </Link>
                    </li>
                </ul>
                <ul className="hidden md:flex space-x-4 lg:space-x-8 xl:space-x-12">
                    {["about", "skills", "projects", "experience", "certifications", "contact"].map((section) => (
                        <li key={section}>
                            <Link href={`#${section}`} className={getLinkClass(section)}>{section.charAt(0).toUpperCase() + section.slice(1)}</Link>
                        </li>
                    ))}
                </ul>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none" aria-label="Toggle Menu">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>
            {(isMenuOpen || isMenuClosing) && (
                <div className={`md:hidden bg-[#F5F4F4] w-full absolute top-16 left-0 shadow-md z-40 transition-opacity  ${isMenuOpen && !isMenuClosing ? "animate-slideIn" : "animate-slideOut"}`}>
                    <ul className="flex flex-col items-center space-y-4 py-4 w-full">
                        {["about", "skills", "projects", "experience", "certifications", "contact"].map((section) => (
                            <li key={section}>
                                <Link href={`#${section}`} className={getLinkClass(section)} onClick={toggleMenu}>
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    )
}
