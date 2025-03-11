import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function DenisPage() {
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
            <Link className="transition-colors hover:text-foreground/80" href="/#audits">Audits</Link>
            <Link className="transition-colors hover:text-foreground/80" href="/#services">Services</Link>
            <Link className="transition-colors hover:text-foreground/80" href="/#solutions">Solutions</Link>
            <Link className="transition-colors hover:text-foreground/80" href="/blog">Blog</Link>
            <Link className="transition-colors hover:text-foreground/80" href="/#company">Company</Link>
            <Link className="transition-colors hover:text-foreground/80" href="/#community">Community</Link>
          </nav>
          <Button className="ml-auto">Request an audit</Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center mb-12">
              Denis Jesus Palma Abanto
            </h1>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <div className="relative w-[300px] h-[300px] mx-auto">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Denis%20Jesus%20Palma%20Abanto%2012-min-M81geOd61Ggipu3l4HQ7UilPqGIrgo.png"
                    alt="Denis Jesus Palma Abanto - Founder & CEO of Shieldify"
                    fill
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-4">Founder & CEO of Shieldify</h2>
                <div className="prose max-w-none">
                  <p className="text-lg mb-4">
                    Denis Jesus Palma Abanto is a renowned blockchain security expert with a distinguished background in the industry.
                  </p>
                  <p className="mb-4">
                    As the first Site Reliability Engineer (SRE) at Solana, Denis built all of Solana's infrastructure from scratch when it was a 10-person team in early 2021. Through his exceptional expertise and dedication, he was promoted twice—to Senior SRE and then to Lead SRE—where he managed a team of five professionals.
                  </p>
                  <p className="mb-4">
                    With his deep understanding of blockchain infrastructure and security principles, Denis founded Shieldify to address the growing need for robust security solutions in the blockchain ecosystem.
                  </p>
                  <p className="mb-4">
                    Under his leadership, Shieldify has grown to become a trusted name in blockchain security, having provided comprehensive auditing services to over 150 clients, ranging from emerging startups to established protocols.
                  </p>
                  <h3 className="text-2xl font-bold mt-8 mb-4">Areas of Expertise</h3>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Smart Contract Security Auditing</li>
                    <li>Blockchain Infrastructure Design</li>
                    <li>Distributed Systems Architecture</li>
                    <li>Solana Ecosystem</li>
                    <li>Security Incident Response</li>
                    <li>Site Reliability Engineering</li>
                  </ul>
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-4">Connect with Denis</h3>
                  <div className="flex gap-4">
                    <Button variant="outline">LinkedIn</Button>
                    <Button variant="outline">Twitter</Button>
                    <Button variant="outline">GitHub</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Speaking & Presentations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Blockchain Security Summit 2023</h3>
                  <p className="text-gray-600 mb-4">New York, NY</p>
                  <p>Keynote: "Emerging Threats in Smart Contract Security"</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Solana Breakpoint 2022</h3>
                  <p className="text-gray-600 mb-4">Lisbon, Portugal</p>
                  <p>Panel: "Building Resilient Infrastructure for Web3"</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">ETH London 2023</h3>
                  <p className="text-gray-600 mb-4">London, UK</p>
                  <p>Workshop: "Advanced Smart Contract Auditing Techniques"</p>
                </CardContent>
              </Card>
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
  );
}
