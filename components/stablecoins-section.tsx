"use client"

import { useRef, useEffect } from "react"

export function StablecoinsSection() {
  const stickyRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current || !containerRef.current) return

      const container = containerRef.current
      const sticky = stickyRef.current
      const containerRect = container.getBoundingClientRect()

      if (containerRect.top <= 0 && containerRect.bottom >= window.innerHeight) {
        sticky.style.position = "fixed"
        sticky.style.top = "0"
        sticky.style.width = "50%"
        sticky.style.height = "100vh"
      } else if (containerRect.top > 0) {
        sticky.style.position = "absolute"
        sticky.style.top = "0"
        sticky.style.width = "50%"
        sticky.style.height = "100%"
      } else if (containerRect.bottom < window.innerHeight) {
        sticky.style.position = "absolute"
        sticky.style.top = `${container.offsetHeight - sticky.offsetHeight}px`
        sticky.style.width = "50%"
        sticky.style.height = "100%"
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section id="stablecoins" className="w-full bg-black relative" ref={containerRef} style={{ minHeight: "100vh" }}>
      <div className="flex flex-col lg:flex-row">
        {/* Left Column - Sticky Content */}
        <div
          ref={stickyRef}
          className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center"
          style={{ position: "absolute", top: 0, left: 0, height: "100%" }}
        >
          <h3 className="text-orange-500 text-sm font-medium uppercase tracking-wider mb-6">How It Works</h3>

          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white max-w-md mb-6">
            Apex is a stablecoin payment infrastructure built on Solana for global, instant transactions
          </h2>

          <p className="text-zinc-400 max-w-md mb-12">
            Apex combines the speed of Solana blockchain with the stability of stablecoins, creating a payment system
            that's both lightning-fast and price-stable.
          </p>

          <div className="flex flex-col gap-6">
            <a href="#features" className="text-white hover:text-orange-500 transition-colors">
              Features
            </a>
            <a
              href="#key-functionalities"
              className="text-white hover:text-orange-500 transition-colors flex items-center"
            >
              <div className="w-2 h-2 rounded-full bg-orange-500 mr-3"></div>
              Key Functionalities
            </a>
            <a href="#controls" className="text-white hover:text-orange-500 transition-colors">
              Controls
            </a>
          </div>
        </div>

        {/* Right Column - Scrollable Content */}
        <div className="lg:w-1/2 lg:ml-auto p-8 md:p-12 lg:p-16 grid grid-cols-1 gap-6">
          {/* Feature Card 1 */}
          <div className="bg-zinc-900/80 rounded-xl p-8 backdrop-blur-sm border border-zinc-800/50">
            <h3 className="text-white text-xl font-medium mb-4">Instant Settlement and Reconciliation</h3>
            <p className="text-zinc-400">
              Apex enables businesses to maintain settlement accounts and settlement balances on-chain which allow
              payment obligations to be fulfilled instantly. Balances in settlement accounts are held in the native
              stablecoin instrument associated with the currency where each participating business is operating.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-zinc-900/80 rounded-xl p-8 backdrop-blur-sm border border-zinc-800/50">
            <h3 className="text-white text-xl font-medium mb-4">Multi-Currency Stablecoins</h3>
            <p className="text-zinc-400">
              Apex provides support for multiple stablecoins with values pegged to the value of respective fiat
              currencies or CBDCs. Local stablecoins are used for settling domestic payments while global stablecoins
              pegged to the US dollar are used for settling cross-border payments. The deposits underpinning stablecoins
              are held by regulated and globally reputable custodians.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-zinc-900/80 rounded-xl p-8 backdrop-blur-sm border border-zinc-800/50">
            <h3 className="text-white text-xl font-medium mb-4">Smart Contract Platform</h3>
            <p className="text-zinc-400">
              Apex provides support for developer communities to build innovative decentralized applications that
              leverage the stablecoins, users, and capabilities within Apex as well as the regulatory authorization and
              integrations to legacy financial systems. Build payment flows, escrow services, and more.
            </p>
          </div>

          {/* Feature Card 4 */}
          <div className="bg-zinc-900/80 rounded-xl p-8 backdrop-blur-sm border border-zinc-800/50">
            <h3 className="text-white text-xl font-medium mb-4">Cross-Chain Bridges</h3>
            <p className="text-zinc-400">
              These components serve as interchanges between Apex and third-party systems like public chains, CBDC
              infrastructure, and other legacy financial systems, including payment networks, banking hosts, and
              messaging services. Through token wrapping, bridges enable the transfer of stablecoins/value between Apex
              and other chains hosting CBDCs and other tokens.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
