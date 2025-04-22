"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { NetworkVisualization } from "@/components/network-visualization"
import { FeaturesSection } from "@/components/features-section"
import { StablecoinsSection } from "@/components/stablecoins-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Navbar } from "@/components/navbar"
import {
  ArrowUpRight,
  CheckCircle,
  ExternalLink,
  FileText,
  Globe,
  Zap,
  Wallet,
  Shield,
  ChevronRight,
  Terminal,
  Layers,
  Building2,
  Users,
  Cpu,
  Lock,
  Sparkles,
  Lightbulb,
  Rocket,
  Clock,
  Blocks,
} from "lucide-react"

export default function LandingPage() {
  const [wordIndex, setWordIndex] = useState(0)
  const highlightedWords = ["Decentralized", "Secured", "Reliable", "Borderless", "Supafast"]

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % highlightedWords.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1">
        <section className="relative w-full py-24 md:py-32 lg:py-40 xl:py-48 overflow-hidden">
          {/* Network Visualization */}
          <div className="absolute inset-0 z-0 opacity-70">
            <NetworkVisualization />
          </div>

          {/* Background effects */}
          <div className="absolute inset-0 z-0">
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-orange-900/10 blur-3xl"></div>
            <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-orange-900/5 blur-2xl"></div>
          </div>

          <div className="container relative z-10 px-4 md:px-6 mx-auto text-center">
            <div className="inline-flex items-center transition-colors rounded-full border-gray-50 bg-black px-3 py-1 text-sm mb-6 backdrop-blur-sm">
              <span className="text-orange-500 mr-1">Apex</span>
              <span className="text-zinc-400 hover:text-zinc-300">and Solana Partner to Revolutionize Payments</span>
              <ChevronRight className="h-4 w-4 ml-1 text-zinc-500" />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter max-w-4xl mx-auto leading-tight">
              The Solana Blockchain Network for{" "}
              <span
                key={wordIndex}
                className="text-orange-500 inline-block transition-all duration-500 animate-fade-in"
              >
                {highlightedWords[wordIndex]}
              </span>{" "}
              Payments
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-zinc-400 text-sm tracking-tight md:text-base">
              Join leading businesses, developers, and enterprises on Apex. We are building a first-of-its-kind
              decentralized stablecoin network for moving and managing the world's money in a transparent way.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-base rounded-full"
                size="lg"
                asChild
              >
                <Link href="#get-started">
                  Get Started <ArrowUpRight className="ml-1 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-orange-500" />
                <span className="text-zinc-300">Fully Decentralized</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-orange-500" />
                <span className="text-zinc-300">Stablecoin Focused</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-orange-500" />
                <span className="text-zinc-300">Sub-Second Finality</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent"></div>
        </section>

        {/* Features Section */}
        <FeaturesSection />

        {/* Stablecoins Section */}
        <StablecoinsSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        <section id="decentralized" className="w-full py-12 md:py-24 lg:py-32 border-b border-zinc-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-500/10 px-3 py-1 text-sm text-orange-500">
                  Decentralized
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">True Decentralization</h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Apex is built on a fully decentralized infrastructure, ensuring security, transparency, and user
                  control.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-12 py-12 lg:grid-cols-2">
              <div className="relative h-[400px] rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  fill
                  alt="Decentralized Infrastructure"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-orange-500/10 p-2 mt-1">
                    <Lock className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Non-Custodial by Design</h3>
                    <p className="text-zinc-400 mt-2">
                      Apex never takes custody of your funds. All transactions are executed directly on-chain, giving
                      you complete control of your assets at all times.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-orange-500/10 p-2 mt-1">
                    <Blocks className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">On-Chain Transparency</h3>
                    <p className="text-zinc-400 mt-2">
                      All transactions are recorded on the Solana blockchain, providing complete transparency and
                      auditability for every payment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-orange-500/10 p-2 mt-1">
                    <Users className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Community Governance</h3>
                    <p className="text-zinc-400 mt-2">
                      Apex is governed by its community, ensuring that the platform evolves according to the needs of
                      its users rather than centralized interests.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-orange-500/10 p-2 mt-1">
                    <Shield className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Censorship Resistant</h3>
                    <p className="text-zinc-400 mt-2">
                      With no central authority controlling the network, Apex payments cannot be censored or blocked,
                      ensuring financial freedom for all users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ecosystem" className="w-full py-12 md:py-24 lg:py-32 border-b border-zinc-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-500/10 px-3 py-1 text-sm text-orange-500">
                  Ecosystem
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Building a Better Payment Ecosystem</h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Apex is more than a payment processor—it's a movement to transform how value moves in the digital
                  economy.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <div className="rounded-full bg-orange-500/10 p-3">
                  <Sparkles className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold">Financial Inclusion</h3>
                <p className="text-center text-zinc-400">
                  Apex is building a world where anyone with internet access can participate in the global economy,
                  regardless of location or banking status.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <div className="rounded-full bg-orange-500/10 p-3">
                  <Lightbulb className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold">Innovation Hub</h3>
                <p className="text-center text-zinc-400">
                  We're creating an ecosystem where developers can build the next generation of financial applications
                  on top of our infrastructure.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <div className="rounded-full bg-orange-500/10 p-3">
                  <Rocket className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold">Ecosystem Growth</h3>
                <p className="text-center text-zinc-400">
                  By making payments seamless, we're accelerating the adoption of web3 technologies and the growth of
                  the entire ecosystem.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl mt-12">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
                <h3 className="text-2xl font-bold mb-6">Our Vision for the Future of Payments</h3>
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-orange-500" />
                      <h4 className="font-bold">Instant Settlements</h4>
                    </div>
                    <p className="text-zinc-400">
                      No more waiting days for payments to clear. Apex enables instant settlement for all transactions,
                      improving cash flow for businesses of all sizes.
                    </p>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-orange-500" />
                      <h4 className="font-bold">Borderless Transactions</h4>
                    </div>
                    <p className="text-zinc-400">
                      We're eliminating the concept of "international payments" by making all transactions global by
                      default, with no additional fees or complications.
                    </p>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-orange-500" />
                      <h4 className="font-bold">Enhanced Security</h4>
                    </div>
                    <p className="text-zinc-400">
                      By leveraging blockchain technology, we're creating a payment system that's inherently more secure
                      than traditional methods, reducing fraud and chargebacks.
                    </p>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-3">
                      <Zap className="h-5 w-5 text-orange-500" />
                      <h4 className="font-bold">Programmable Money</h4>
                    </div>
                    <p className="text-zinc-400">
                      Apex enables programmable money flows, allowing for automated payments, escrow services, and
                      complex financial arrangements without intermediaries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 border-b border-zinc-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-500/10 px-3 py-1 text-sm text-orange-500">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Simple Integration, Powerful Results
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get up and running with Apex on Solana in minutes, not days.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <Image
                src="/placeholder.svg?height=400&width=500"
                width={500}
                height={400}
                alt="Integration diagram"
                className="mx-auto rounded-xl object-cover object-center"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold">Create an Account</h3>
                      <p className="text-zinc-400">Sign up for Apex and connect your Solana wallet.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold">Integrate Our SDK</h3>
                      <p className="text-zinc-400">Add a few lines of code to your application using our SDK.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold">Configure Your Settings</h3>
                      <p className="text-zinc-400">Set up your preferred tokens and settlement options.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold">Go Live</h3>
                      <p className="text-zinc-400">Start processing payments on Solana with sub-second finality.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="use-cases" className="w-full py-12 md:py-24 lg:py-32 border-b border-zinc-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-500/10 px-3 py-1 text-sm text-orange-500">
                  Use Cases
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Built for Everyone</h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Apex serves a wide range of users with tailored solutions for each use case.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <div className="rounded-full bg-orange-500/10 p-3">
                  <Building2 className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold">For Businesses</h3>
                <p className="text-center text-zinc-400">
                  Accept crypto payments online or in-store with easy integration and automatic settlement to your
                  preferred wallet or bank account.
                </p>
                <Button variant="outline" className="mt-4 border-zinc-800 text-white hover:bg-zinc-800" asChild>
                  <Link href="#business">Learn More</Link>
                </Button>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <div className="rounded-full bg-orange-500/10 p-3">
                  <Cpu className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold">For Developers</h3>
                <p className="text-center text-zinc-400">
                  Build powerful payment experiences with our comprehensive SDKs, APIs, and developer tools on Solana.
                </p>
                <Button variant="outline" className="mt-4 border-zinc-800 text-white hover:bg-zinc-800" asChild>
                  <Link href="#developers">View Docs</Link>
                </Button>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <div className="rounded-full bg-orange-500/10 p-3">
                  <Users className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold">For Enterprises</h3>
                <p className="text-center text-zinc-400">
                  Custom solutions for large organizations with advanced security, compliance, and integration
                  requirements.
                </p>
                <Button variant="outline" className="mt-4 border-zinc-800 text-white hover:bg-zinc-800" asChild>
                  <Link href="#enterprise">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="developers" className="w-full py-12 md:py-24 lg:py-32 border-b border-zinc-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-orange-500/10 px-3 py-1 text-sm text-orange-500">
                  For Developers
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Build on Solana with Apex</h2>
                <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our developer-friendly documentation and SDKs make it easy to integrate Solana payments into any
                  application.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-orange-500 hover:bg-orange-600" asChild>
                    <Link href="#api-docs">
                      View Documentation <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-zinc-800 text-white hover:bg-zinc-800" asChild>
                    <Link href="#github">GitHub Repository</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                <pre className="overflow-x-auto text-sm text-zinc-400">
                  <code>{`// Example: Create a payment request on Solana
import { Apex } from '@apex/sdk';

// Initialize the SDK with your API key
const apex = new Apex('YOUR_API_KEY');

// Create a payment
const payment = await apex.createPayment({
  amount: '100.00',
  currency: 'USDC',
  network: 'solana',
  description: 'Payment for Order #1234',
  redirectUrl: 'https://yourapp.com/thank-you',
  metadata: {
    orderId: '1234',
    customer: 'john.doe@example.com'
  }
});

// Get the payment link or embed the checkout
const paymentLink = payment.checkoutUrl;
`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-b border-zinc-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-500/10 px-3 py-1 text-sm text-orange-500">
                  Integration Options
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Multiple Ways to Integrate</h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the integration method that works best for your needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <div className="rounded-full bg-orange-500/10 p-3">
                  <Terminal className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold">Direct API Integration</h3>
                <p className="text-center text-zinc-400">
                  Full control over the payment experience with our comprehensive RESTful APIs.
                </p>
                <Button variant="outline" className="mt-4 border-zinc-800 text-white hover:bg-zinc-800" asChild>
                  <Link href="#api-docs">View API Docs</Link>
                </Button>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <div className="rounded-full bg-orange-500/10 p-3">
                  <Layers className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold">SDK Integration</h3>
                <p className="text-center text-zinc-400">
                  Quickly integrate with our JavaScript, Python, Rust, and other language SDKs.
                </p>
                <Button variant="outline" className="mt-4 border-zinc-800 text-white hover:bg-zinc-800" asChild>
                  <Link href="#sdk-docs">View SDK Docs</Link>
                </Button>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <div className="rounded-full bg-orange-500/10 p-3">
                  <FileText className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold">No-Code Solutions</h3>
                <p className="text-center text-zinc-400">
                  Payment links, embeddable checkout widgets, and QR codes for quick implementation.
                </p>
                <Button variant="outline" className="mt-4 border-zinc-800 text-white hover:bg-zinc-800" asChild>
                  <Link href="#no-code">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="get-started" className="w-full py-12 md:py-24 lg:py-32 border-b border-zinc-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to build on Solana with Apex?
              </h2>
              <p className="mx-auto max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of businesses, developers, and enterprises already using Apex.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-2 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-lg flex-1 bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500"
                />
                <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
                  Get Started
                </Button>
              </form>
              <p className="text-xs text-zinc-500">No credit card required. Start building in minutes.</p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-b border-zinc-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-orange-500/10 px-3 py-1 text-sm text-orange-500">
                  Case Studies
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  See How Organizations Use Apex
                </h2>
                <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn how businesses, developers, and enterprises have implemented Apex on Solana.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-orange-500 hover:bg-orange-600" asChild>
                    <Link href="#case-studies">
                      View Case Studies <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[250px] w-[350px] sm:h-[300px] sm:w-[400px]">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Case Study"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-zinc-800 bg-black">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:flex-row lg:gap-20">
          <div className="flex flex-col gap-4 lg:w-1/3">
            <div className="flex items-center gap-2">
              <Wallet className="h-6 w-6 text-orange-500" />
              <span className="text-xl font-bold">apex</span>
            </div>
            <p className="text-zinc-400">
              The next-generation payment infrastructure on Solana. Enable lightning-fast stablecoin payments for
              businesses, developers, and enterprises.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-zinc-400 hover:text-white">
                Twitter
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white">
                GitHub
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white">
                Discord
              </Link>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-sm text-zinc-400 hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#stablecoins" className="text-sm text-zinc-400 hover:text-white">
                    Stablecoins
                  </Link>
                </li>
                <li>
                  <Link href="#decentralized" className="text-sm text-zinc-400 hover:text-white">
                    Decentralized
                  </Link>
                </li>
                <li>
                  <Link href="#ecosystem" className="text-sm text-zinc-400 hover:text-white">
                    Ecosystem
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#developers" className="text-sm text-zinc-400 hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm text-zinc-400 hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-800 py-6">
          <div className="container flex flex-col items-center justify-between gap-4 px-4 md:px-6 lg:flex-row">
            <p className="text-center text-sm text-zinc-500 lg:text-left">
              © {new Date().getFullYear()} Apex. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
