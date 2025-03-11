import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

// Sample blog posts data (in a real app, this would come from a database or API)
const blogPosts = [
  {
    id: 1,
    title: "Understanding Smart Contract Vulnerabilities",
    slug: "understanding-smart-contract-vulnerabilities",
    excerpt: "An overview of the most common vulnerabilities found in smart contracts and how to avoid them.",
    author: "Denis Jesus Palma Abanto",
    date: "March 1, 2024",
    imageUrl: "/images/block-chain.jpg"
  },
  {
    id: 2,
    title: "Defending Against Flash Loan Attacks",
    slug: "defending-against-flash-loan-attacks",
    excerpt: "Flash loan attacks have become increasingly common in DeFi. Learn how to secure your protocols against these threats.",
    author: "Maria Rodriguez",
    date: "February 15, 2024",
    imageUrl: "/images/block-chain.jpg"
  },
  {
    id: 3,
    title: "The Rise of NFT Security Concerns",
    slug: "nft-security-concerns",
    excerpt: "As the NFT market evolves, new security challenges are emerging. Here's what creators and collectors need to know.",
    author: "Alex Chen",
    date: "January 28, 2024",
    imageUrl: "/images/block-chain.jpg"
  },
  {
    id: 4,
    title: "Best Practices for Solana Program Security",
    slug: "solana-program-security-best-practices",
    excerpt: "Solana's programming model presents unique security considerations. Explore the best practices for secure development.",
    author: "Denis Jesus Palma Abanto",
    date: "January 10, 2024",
    imageUrl: "/images/block-chain.jpg"
  }
];

export default function BlogPage() {
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-6">
              Shieldify Blog
            </h1>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Insights, tutorials, and updates from the blockchain security experts
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48 w-full">
                      <Image 
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.author}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                      <p className="text-gray-600">{post.excerpt}</p>
                      <div className="mt-4">
                        <span className="text-blue-600 font-medium">Read more →</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
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
