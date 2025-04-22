"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Wallet, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface MegaMenuProps {
  isOpen: boolean
  onClose: () => void
  activeMenu: string | null
}

// Update the MegaMenu component to be centered and not stretch to the edges
const MegaMenu = ({ isOpen, onClose, activeMenu }: MegaMenuProps) => {
  if (!isOpen || !activeMenu) return null

  const menuContent = {
    features: (
      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-medium text-white">Decentralized Infrastructure</h3>
            <ArrowUpRight className="h-4 w-4 text-orange-500" />
          </div>
          <div className="relative h-40 w-full rounded-lg overflow-hidden bg-zinc-800">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-sm text-white mb-2">
                Apex 2.0 - Unlocking New Possibilities For The Global Payments Ecosystem
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <h4 className="text-xs font-medium uppercase tracking-wider text-zinc-400 mb-4">INFRASTRUCTURE</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#decentralized"
                  className="text-white hover:text-orange-500 transition-colors flex items-center"
                  onClick={onClose}
                >
                  Decentralized Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="#blockchain"
                  className="text-white hover:text-orange-500 transition-colors flex items-center"
                  onClick={onClose}
                >
                  Solana Blockchain
                </Link>
              </li>
              <li>
                <Link
                  href="#security"
                  className="text-white hover:text-orange-500 transition-colors flex items-center"
                  onClick={onClose}
                >
                  Security Architecture
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider text-zinc-400 mb-4">RESOURCES</h4>
            <Link
              href="#whitepaper"
              className="text-white hover:text-orange-500 transition-colors flex items-center"
              onClick={onClose}
            >
              Decentralized Infrastructure Whitepaper
            </Link>
          </div>
        </div>
      </div>
    ),
    stablecoins: (
      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-medium text-white">Stablecoin Ecosystem</h3>
            <ArrowUpRight className="h-4 w-4 text-orange-500" />
          </div>
          <div className="relative h-40 w-full rounded-lg overflow-hidden bg-zinc-800">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-sm text-white mb-2">Apex Stablecoins - The Foundation For Global, Instant Payments</p>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <h4 className="text-xs font-medium uppercase tracking-wider text-zinc-400 mb-4">STABLECOINS</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#usdc"
                  className="text-white hover:text-orange-500 transition-colors flex items-center"
                  onClick={onClose}
                >
                  USDC Integration
                </Link>
              </li>
              <li>
                <Link
                  href="#usdt"
                  className="text-white hover:text-orange-500 transition-colors flex items-center"
                  onClick={onClose}
                >
                  USDT Support
                </Link>
              </li>
              <li>
                <Link
                  href="#multi-currency"
                  className="text-white hover:text-orange-500 transition-colors flex items-center"
                  onClick={onClose}
                >
                  Multi-Currency Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider text-zinc-400 mb-4">RESOURCES</h4>
            <Link
              href="#stablecoin-whitepaper"
              className="text-white hover:text-orange-500 transition-colors flex items-center"
              onClick={onClose}
            >
              Stablecoin Integration Whitepaper
            </Link>
          </div>
        </div>
      </div>
    ),
    developers: (
      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-medium text-white">Developer Platform</h3>
            <ArrowUpRight className="h-4 w-4 text-orange-500" />
          </div>
          <div className="relative h-40 w-full rounded-lg overflow-hidden bg-zinc-800">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-sm text-white mb-2">Build The Future Of Finance With Apex Developer Tools</p>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <h4 className="text-xs font-medium uppercase tracking-wider text-zinc-400 mb-4">TOOLS</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#sdk"
                  className="text-white hover:text-orange-500 transition-colors flex items-center"
                  onClick={onClose}
                >
                  SDKs & Libraries
                </Link>
              </li>
              <li>
                <Link
                  href="#api"
                  className="text-white hover:text-orange-500 transition-colors flex items-center"
                  onClick={onClose}
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  href="#examples"
                  className="text-white hover:text-orange-500 transition-colors flex items-center"
                  onClick={onClose}
                >
                  Code Examples
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider text-zinc-400 mb-4">RESOURCES</h4>
            <Link
              href="#documentation"
              className="text-white hover:text-orange-500 transition-colors flex items-center"
              onClick={onClose}
            >
              Developer Documentation
            </Link>
          </div>
        </div>
      </div>
    ),
    company: (
      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-medium text-white">About Apex</h3>
            <ArrowUpRight className="h-4 w-4 text-orange-500" />
          </div>
          <div className="relative h-40 w-full rounded-lg overflow-hidden bg-zinc-800">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-sm text-white mb-2">Our Mission: Building The Future Of Decentralized Payments</p>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <h4 className="text-xs font-medium uppercase tracking-wider text-zinc-400 mb-4">COMPANY</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-white hover:text-orange-500 transition-colors flex items-center"
                  onClick={onClose}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#team"
                  className="text-white hover:text-orange-500 transition-colors flex items-center"
                  onClick={onClose}
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="#careers"
                  className="text-white hover:text-orange-500 transition-colors flex items-center"
                  onClick={onClose}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#press"
                  className="text-white hover:text-orange-500 transition-colors flex items-center"
                  onClick={onClose}
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  }

  return (
    <div className="absolute top-full left-0 right-0 flex justify-center z-50">
      <div className="w-full max-w-4xl mx-auto bg-zinc-900/95 backdrop-blur-md border border-zinc-800 rounded-xl mt-2">
        <div className="py-8 px-8">{activeMenu && menuContent[activeMenu as keyof typeof menuContent]}</div>
      </div>
    </div>
  )
}

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu)
    setMegaMenuOpen(true)
  }

  const handleMouseLeave = () => {
    setMegaMenuOpen(false)
    setActiveMenu(null)
  }

  const closeMegaMenu = () => {
    setMegaMenuOpen(false)
    setActiveMenu(null)
  }

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60"
      onMouseLeave={handleMouseLeave}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Wallet className="h-6 w-6 text-orange-500" />
          <span className="text-xl font-bold">apex</span>
        </div>
        <nav className="hidden md:flex gap-6 relative">
          <div
            className={cn("relative", activeMenu === "features" && megaMenuOpen ? "text-orange-500" : "text-white")}
            onMouseEnter={() => handleMouseEnter("features")}
          >
            <Link
              href="#features"
              className="text-sm font-medium transition-colors hover:text-orange-500 py-5"
              onClick={closeMegaMenu}
            >
              Features
            </Link>
            {activeMenu === "features" && megaMenuOpen && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"></div>
            )}
          </div>
          <div
            className={cn("relative", activeMenu === "stablecoins" && megaMenuOpen ? "text-orange-500" : "text-white")}
            onMouseEnter={() => handleMouseEnter("stablecoins")}
          >
            <Link
              href="#stablecoins"
              className="text-sm font-medium transition-colors hover:text-orange-500 py-5"
              onClick={closeMegaMenu}
            >
              Stablecoins
            </Link>
            {activeMenu === "stablecoins" && megaMenuOpen && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"></div>
            )}
          </div>
          <div
            className={cn("relative", activeMenu === "developers" && megaMenuOpen ? "text-orange-500" : "text-white")}
            onMouseEnter={() => handleMouseEnter("developers")}
          >
            <Link
              href="#developers"
              className="text-sm font-medium transition-colors hover:text-orange-500 py-5"
              onClick={closeMegaMenu}
            >
              Developers
            </Link>
            {activeMenu === "developers" && megaMenuOpen && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"></div>
            )}
          </div>
          <div
            className={cn("relative", activeMenu === "company" && megaMenuOpen ? "text-orange-500" : "text-white")}
            onMouseEnter={() => handleMouseEnter("company")}
          >
            <Link
              href="#company"
              className="text-sm font-medium transition-colors hover:text-orange-500 py-5"
              onClick={closeMegaMenu}
            >
              Company
            </Link>
            {activeMenu === "company" && megaMenuOpen && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"></div>
            )}
          </div>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#contact" className="text-sm font-medium text-zinc-400 transition-colors hover:text-orange-500">
            Contact
          </Link>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
            <Link href="#get-started">Talk to Sales</Link>
          </Button>
        </div>
      </div>
      <MegaMenu isOpen={megaMenuOpen} onClose={closeMegaMenu} activeMenu={activeMenu} />
    </header>
  )
}
