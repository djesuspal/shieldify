import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Code } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-14 items-center">
          <Link className="flex items-center" href="/">
            <div className="relative w-[150px] h-[40px]">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shieldify-high-resolution-logo-transparent%20(1)-axlq4XPhFdLCmO2U1aEe3jWzTQRwg5.png" 
                alt="Shieldify Logo by Denis Palma Abanto" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <nav className="flex flex-1 items-center justify-center space-x-6 text-sm font-medium">
            <Link className="transition-colors hover:text-foreground/80" href="#audits">Audits</Link>
            <Link className="transition-colors hover:text-foreground/80" href="#services">Services</Link>
            <Link className="transition-colors hover:text-foreground/80" href="#solutions">Solutions</Link>
            <Link className="transition-colors hover:text-foreground/80" href="#blog">Blog</Link>
            <Link className="transition-colors hover:text-foreground/80" href="#company">Company</Link>
            <Link className="transition-colors hover:text-foreground/80" href="#community">Community</Link>
          </nav>
          <Button className="ml-auto">Request an audit</Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#7fffd4]">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-black">
                Blockchain Security Auditor
              </h1>
              <p className="max-w-[600px] text-black md:text-xl mx-auto">
                Led by Denis Jesus Palma Abanto, Shieldify has protected over 150 clients with expert blockchain security auditing services.
              </p>
              <Button size="lg" className="mt-4 bg-blue-600 text-white hover:bg-blue-700">
                Request an audit
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card className="p-6">
                <CardContent className="space-y-4">
                  <Shield className="h-12 w-12" />
                  <h3 className="text-2xl font-bold">Smart Contract Audit</h3>
                  <p className="text-gray-600">
                    Mitigate weaknesses in your smart contract and improve its functionality with double line-to-line code analysis and a separate review by a lead auditor.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="space-y-4">
                  <Code className="h-12 w-12" />
                  <h3 className="text-2xl font-bold">dApp Audit</h3>
                  <p className="text-gray-600">
                    Identify vulnerabilities in applications interacting with blockchain networks with secure code review and static security analysis.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Meet our leadership team</h2>
            <div className="grid place-items-center">
              <div className="max-w-sm text-center">
                <div className="relative w-[300px] h-[300px] mx-auto mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Denis%20Jesus%20Palma%20Abanto%2012-min-M81geOd61Ggipu3l4HQ7UilPqGIrgo.png"
                    alt="Denis Jesus Palma Abanto - Founder & CEO of Shieldify"
                    fill
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
                <h3 className="text-2xl font-bold">Denis Jesus Palma Abanto</h3>
                <p className="text-gray-600 mb-4">Founder & CEO</p>
                <p className="text-sm text-gray-600">
                  First SRE at Solana, built all of Solana's infrastructure from scratch when it was a 10-person team in early 2021. Through dedication and expertise, promoted twice—to Senior SRE and then to Lead SRE—managing a team of five.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
              <div>
                <h3 className="text-4xl font-bold">150+</h3>
                <p className="text-gray-600">protected clients</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold">18+</h3>
                <p className="text-gray-600">ecosystem partners</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold">6+</h3>
                <p className="text-gray-600">top-class engineers</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold">4+</h3>
                <p className="text-gray-600">years of expertise</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:py-8">
          <div className="flex flex-1 flex-col gap-4">
            <Link className="flex items-center" href="#">
              <div className="relative w-[150px] h-[40px]">
                <Image 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shieldify-high-resolution-logo-transparent%20(1)-axlq4XPhFdLCmO2U1aEe3jWzTQRwg5.png" 
                  alt="Shieldify Logo - Blockchain Security Auditing" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <p className="text-sm text-gray-600">
              Secure your blockchain future with expert auditing services by Denis Palma Abanto
            </p>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Follow us</h3>
              <Link className="text-sm text-gray-600" href="#">Twitter</Link>
              <Link className="text-sm text-gray-600" href="#">GitHub</Link>
              <Link className="text-sm text-gray-600" href="#">Discord</Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Contact</h3>
              <Link className="text-sm text-gray-600" href="#">Contact Us</Link>
              <Link className="text-sm text-gray-600" href="#">Privacy Policy</Link>
              <Link className="text-sm text-gray-600" href="#">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
