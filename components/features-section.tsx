import type React from "react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-zinc-900/80 rounded-xl p-8 backdrop-blur-sm border border-zinc-800/50 flex flex-col gap-6 transition-all duration-300 hover:border-orange-900/50 hover:bg-zinc-900/90">
      <div className="text-orange-500">{icon}</div>
      <h3 className="text-xl font-medium tracking-tighter text-white">{title}</h3>
      <p className="text-zinc-400 leading-relaxed tracking-tight">{description}</p>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-24 md:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col gap-4 mb-8">
          <p className="text-orange-500">Stablecoin Payment Infrastructure</p>
          <div className="flex flex-col gap-4 md:flex-row md:items-end justify-between">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tighter text-white max-w-2xl">
              A New Paradigm and <span className="text-orange-500">Payment System</span> for Digital Commerce
            </h2>
            <p className="text-zinc-400 text-sm max-w-md">
              Digital payments processed through decentralized infrastructure, settled instantly in stablecoins, and
              secured by Solana blockchain technology.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <FeatureCard
            icon={
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24 4L4 14V34L24 44L44 34V14L24 4Z"
                  stroke="#F97316"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M4 14L24 24" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 44V24" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M44 14L24 24" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M14 9L34 19V39"
                  stroke="#F97316"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            title="Decentralized Infrastructure"
            description="Built on Solana's high-performance blockchain, our infrastructure eliminates central points of failure while providing unmatched transaction throughput and security."
          />

          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

            }
            title="Stablecoin Focused"
            description="Accept and settle payments in major stablecoins like USDC, USDT, and more, providing the perfect balance of blockchain innovation with price stability."
          />

          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
  <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
</svg>

            }
            title="Lightning Fast Settlement"
            description="Leverage Solana's sub-second finality to receive funds instantly, eliminating the multi-day settlement periods of traditional payment systems."
          />

          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>

            }
            title="Borderless Payments"
            description="Enable truly global commerce with no international fees, currency conversion costs, or cross-border restrictions. Accept payments from anywhere in the world."
          />

          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
</svg>

            }
            title="Developer-First Platform"
            description="Our comprehensive SDKs and APIs are designed for developers to easily integrate powerful payment experiences into any application or service."
          />

          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" />
</svg>


            }
            title="Self-Custody Solution"
            description="Maintain complete control of your funds with our non-custodial infrastructure. Your stablecoins are always in your wallet, not held by a third party."
          />
        </div>
      </div>
    </section>
  )
}
