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
                <span className="text-white hover:text-orange-500 transition-colors flex items-center cursor-pointer">
                  Decentralized Infrastructure
                </span>
              </li>
              <li>
                <span className="text-white hover:text-orange-500 transition-colors flex items-center cursor-pointer">
                  Solana Blockchain
                </span>
              </li>
              <li>
                <span className="text-white hover:text-orange-500 transition-colors flex items-center cursor-pointer">
                  Security Architecture
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider text-zinc-400 mb-4">RESOURCES</h4>
            <span className="text-white hover:text-orange-500 transition-colors flex items-center cursor-pointer">
              Decentralized Infrastructure Whitepaper
            </span>
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
                <span className="text-white hover:text-orange-500 transition-colors flex items-center cursor-pointer">
                  USDC Integration
                </span>
              </li>
              <li>
                <span className="text-white hover:text-orange-500 transition-colors flex items-center cursor-pointer">
                  USDT Support
                </span>
              </li>
              <li>
                <span className="text-white hover:text-orange-500 transition-colors flex items-center cursor-pointer">
                  Multi-Currency Solutions
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider text-zinc-400 mb-4">RESOURCES</h4>
            <span className="text-white hover:text-orange-500 transition-colors flex items-center cursor-pointer">
              Stablecoin Integration Whitepaper
            </span>
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
                <span className="text-white hover:text-orange-500 transition-colors flex items-center cursor-pointer">
                  SDKs & Libraries
                </span>
              </li>
              <li>
                <span className="text-white hover:text-orange-500 transition-colors flex items-center cursor-pointer">
                  API Reference
                </span>
              </li>
              <li>
                <span className="text-white hover:text-orange-500 transition-colors flex items-center cursor-pointer">
                  Code Examples
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider text-zinc-400 mb-4">RESOURCES</h4>
            <span className="text-white hover:text-orange-500 transition-colors flex items-center cursor-pointer">
              Developer Documentation
            </span>
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
                <span className="text-white hover:text-orange-500 transition-colors flex items-center cursor-pointer">
                  About Us
                </span>
              </li>
              <li>
                <span className="text-white hover:text-orange-500 transition-colors flex items-center cursor-pointer">
                  Team
                </span>
              </li>
              <li>
                <span className="text-white hover:text-orange-500 transition-colors flex items-center cursor-pointer">
                  Careers
                </span>
              </li>
              <li>
                <span className="text-white hover:text-orange-500 transition-colors flex items-center cursor-pointer">
                  Press
                </span>
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
            <span className="text-sm font-medium transition-colors hover:text-orange-500 py-5 cursor-pointer">
              Features
            </span>
            {activeMenu === "features" && megaMenuOpen && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"></div>
            )}
          </div>
          <div
            className={cn("relative", activeMenu === "stablecoins" && megaMenuOpen ? "text-orange-500" : "text-white")}
            onMouseEnter={() => handleMouseEnter("stablecoins")}
          >
            <span className="text-sm font-medium transition-colors hover:text-orange-500 py-5 cursor-pointer">
              Stablecoins
            </span>
            {activeMenu === "stablecoins" && megaMenuOpen && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"></div>
            )}
          </div>
          <div
            className={cn("relative", activeMenu === "developers" && megaMenuOpen ? "text-orange-500" : "text-white")}
            onMouseEnter={() => handleMouseEnter("developers")}
          >
            <span className="text-sm font-medium transition-colors hover:text-orange-500 py-5 cursor-pointer">
              Developers
            </span>
            {activeMenu === "developers" && megaMenuOpen && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"></div>
            )}
          </div>
          <div
            className={cn("relative", activeMenu === "company" && megaMenuOpen ? "text-orange-500" : "text-white")}
            onMouseEnter={() => handleMouseEnter("company")}
          >
            <span className="text-sm font-medium transition-colors hover:text-orange-500 py-5 cursor-pointer">
              Company
            </span>
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
