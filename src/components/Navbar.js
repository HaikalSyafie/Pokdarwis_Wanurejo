'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Poppins, Berkshire_Swash } from 'next/font/google'

const poppinsFont = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-poppins',
})

const berkshireFont = Berkshire_Swash({
  subsets: ['latin'],
  weight: '400',
})

export default function Navbar() {
  const currentPath = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  const navItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Destinasi Wisata', href: '/wisata' },
    { label: 'Agro', href: '/agro' },
    { label: 'Kesehatan', href: '/kesehatan' },
    { label: 'Informasi', href: '/Informasi' },
  ]

  const linkClass = (path) =>
    `relative transition-colors duration-300 text-black
     ${poppinsFont.className} text-sm md:text-base
     after:absolute after:-bottom-1 after:left-0 after:h-[4px] after:w-0 after:bg-black after:rounded-full
     hover:after:w-full hover:after:transition-all hover:after:duration-500
     ${currentPath === path ? 'after:w-full' : ''}`

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white 
              flex items-center justify-between px-4 py-2 shadow-md transition-colors duration-500 ease-in-out">
      {/* Logo dan Judul */}
      <div className="flex items-center">
        <div className="p-1">
          <Image src="/logo.png" alt="Logo" width={45} height={45} />
        </div>
        <h1 className={`text-black ${berkshireFont.className} text-base sm:text-lg md:text-xl font-semibold`}>
          POKDARWIS Umbul Tirto
        </h1>
      </div>

      {/* Hamburger menu (mobile only) */}
      <div className="flex md:hidden items-center pr-2">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-xl text-black`}></i>
        </button>
      </div>

      {/* Navigation links (desktop only) */}
      <div className={`hidden md:flex gap-4 xl:gap-8 items-center font-medium ${poppinsFont.className} text-sm md:text-base`}>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className={linkClass(item.href)}>
            {item.label}
          </Link>
        ))}
      </div>

      {/* Dropdown menu (mobile) */}
      {menuOpen && (
        <div className="absolute top-full right-4 mt-2 bg-white rounded-md shadow-lg px-3 py-2 w-44 z-50">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${linkClass(item.href)} block py-1 border-b border-black/10`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
