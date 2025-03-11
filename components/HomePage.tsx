import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Code, Users, CheckCircle } from 'lucide-react'
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
            <Link className="transition-colors hover:text-foreground/80" href="/blog">Blog</Link>
            <Link className="transition-colors hover:text-foreground/80" href="#about">About</Link>
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

        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Our Services</h2>
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

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-6">About Shieldify</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Shieldify was founded by Denis Jesus Palma Abanto, former Lead SRE at Solana, to provide expert blockchain security services to projects of all sizes.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  With our team of security experts, we've helped over 150 clients identify and fix vulnerabilities before they could be exploited, protecting millions in digital assets.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our approach combines manual code review, automated testing, and comprehensive analysis to ensure that your blockchain projects are secure and resilient against attacks.
                </p>
                <div className="mt-8">
                  <Link href="/denis-jesus-palma-abanto">
                    <Button size="lg" variant="outline">
                      Meet Our Founder
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Denis%20Jesus%20Palma%20Abanto%2012-min-M81geOd61Ggipu3l4HQ7UilPqGIrgo.png"
                  alt="Denis Jesus Palma Abanto - Founder & CEO of Shieldify"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Our Security Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <Shield className="h-10 w-10 text-blue-600" />
                  <h3 className="text-xl font-bold">Smart Contract Audits</h3>
                  <p>Comprehensive review of your smart contracts to identify vulnerabilities and recommend fixes.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <Code className="h-10 w-10 text-blue-600" />
                  <h3 className="text-xl font-bold">Protocol Reviews</h3>
                  <p>In-depth analysis of your protocol's architecture, tokenomics, and economic security.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <Users className="h-10 w-10 text-blue-600" />
                  <h3 className="text-xl font-bold">Security Consulting</h3>
                  <p>Expert guidance on blockchain security best practices and implementation strategies.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <CheckCircle className="h-10 w-10 text-blue-600" />
                  <h3 className="text-xl font-bold">Penetration Testing</h3>
                  <p>Simulated attacks on your systems to identify real-world vulnerabilities before hackers do.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <Shield className="h-10 w-10 text-blue-600" />
                  <h3 className="text-xl font-bold">NFT Security Reviews</h3>
                  <p>Specialized security reviews for NFT projects to prevent exploits and protect creators.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <Users className="h-10 w-10 text-blue-600" />
                  <h3 className="text-xl font-bold">Security Training</h3>
                  <p>Training programs for your development team to build security awareness and skills.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="audits" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Featured Audit Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="flex justify-center">
                <div className="h-16 w-32 bg-gray-200 rounded-md flex items-center justify-center">
                  <p className="text-gray-500 font-medium">Partner 1</p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="h-16 w-32 bg-gray-200 rounded-md flex items-center justify-center">
                  <p className="text-gray-500 font-medium">Partner 2</p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="h-16 w-32 bg-gray-200 rounded-md flex items-center justify-center">
                  <p className="text-gray-500 font-medium">Partner 3</p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="h-16 w-32 bg-gray-200 rounded-md flex items-center justify-center">
                  <p className="text-gray-500 font-medium">Partner 4</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="impact" className="w-full py-12 md:py-24 lg:py-32">
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

        <section id="community" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">Join Our Community</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Stay updated with the latest in blockchain security, join discussions, and connect with our team of experts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" size="lg">Discord</Button>
              <Button variant="outline" size="lg">Twitter</Button>
              <Button variant="outline" size="lg">GitHub</Button>
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
