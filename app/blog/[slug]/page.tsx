import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";

// Sample blog posts data (in a real app, this would come from a database or API)
const blogPosts = [
  {
    id: 1,
    title: "Understanding Smart Contract Vulnerabilities",
    slug: "understanding-smart-contract-vulnerabilities",
    excerpt: "An overview of the most common vulnerabilities found in smart contracts and how to avoid them.",
    author: "Denis Jesus Palma Abanto",
    date: "March 1, 2024",
    imageUrl: "/images/block-chain.jpg",
    content: `
      <h2>Introduction to Smart Contract Vulnerabilities</h2>
      <p>Smart contracts are self-executing contracts with the terms of the agreement directly written into code. They run on blockchain networks like Ethereum, Solana, and others, enabling trustless agreements that execute automatically when predefined conditions are met. While smart contracts offer numerous advantages, they are also susceptible to various security vulnerabilities that can lead to significant financial losses.</p>
      
      <h2>Common Smart Contract Vulnerabilities</h2>
      
      <h3>1. Reentrancy Attacks</h3>
      <p>Reentrancy attacks occur when a function makes an external call to an untrusted contract before it resolves its own state. This allows the attacker to recursively call back into the original function, potentially executing operations multiple times before the first invocation completes.</p>
      <p>To prevent reentrancy attacks, developers should implement the "checks-effects-interactions" pattern, which ensures that all state changes occur before external calls are made. Additionally, using reentrancy guards can provide an extra layer of protection.</p>
      
      <h3>2. Integer Overflow and Underflow</h3>
      <p>In many programming languages, including Solidity (prior to version 0.8.0), arithmetic operations can overflow or underflow without raising exceptions. This can lead to unexpected behavior and security vulnerabilities.</p>
      <p>Developers should use safe math libraries or the latest version of Solidity, which includes built-in overflow/underflow checks, to prevent these vulnerabilities.</p>
      
      <h3>3. Access Control Issues</h3>
      <p>Improper access control is a common vulnerability in smart contracts. Without proper checks, unauthorized users may be able to execute privileged functions or access sensitive data.</p>
      <p>Implementing proper role-based access control and using modifiers to restrict function access can help mitigate this vulnerability.</p>
      
      <h3>4. Front-Running</h3>
      <p>Front-running occurs when an attacker observes a pending transaction and then submits their own transaction with a higher gas price, ensuring their transaction is processed before the original one. This can be particularly problematic in decentralized exchanges and other financial applications.</p>
      <p>Techniques such as batch auctions, commit-reveal schemes, and gas price caps can help mitigate front-running attacks.</p>
      
      <h2>Best Practices for Secure Smart Contract Development</h2>
      
      <ol>
        <li><strong>Follow established security patterns</strong> - Implement well-known security patterns and avoid reinventing the wheel.</li>
        <li><strong>Use formal verification</strong> - Formal verification tools can help prove the correctness of smart contracts mathematically.</li>
        <li><strong>Conduct thorough testing</strong> - Comprehensive testing, including unit tests, integration tests, and fuzzing, can help identify potential vulnerabilities.</li>
        <li><strong>Perform security audits</strong> - Professional security audits can identify vulnerabilities that might be missed during development.</li>
        <li><strong>Keep the code simple</strong> - Complex code is more likely to contain vulnerabilities. Keep smart contracts as simple as possible.</li>
        <li><strong>Use established libraries</strong> - Rely on well-tested, secure libraries like OpenZeppelin for common functionality.</li>
        <li><strong>Implement emergency stops</strong> - Circuit breakers can help prevent further damage in case a vulnerability is exploited.</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>Understanding and addressing common smart contract vulnerabilities is essential for developing secure blockchain applications. By following best practices and implementing proper security measures, developers can significantly reduce the risk of security incidents and build more robust smart contracts.</p>
      <p>At Shieldify, our team of security experts conducts comprehensive audits to identify and address these vulnerabilities before they can be exploited, helping our clients build secure and reliable blockchain applications.</p>
    `
  },
  {
    id: 2,
    title: "Defending Against Flash Loan Attacks",
    slug: "defending-against-flash-loan-attacks",
    excerpt: "Flash loan attacks have become increasingly common in DeFi. Learn how to secure your protocols against these threats.",
    author: "Maria Rodriguez",
    date: "February 15, 2024",
    imageUrl: "/images/block-chain.jpg",
    content: `
      <h2>Understanding Flash Loans</h2>
      <p>Flash loans are a novel financial concept unique to the DeFi ecosystem. They allow users to borrow assets without collateral, provided that the loan is repaid within the same transaction. If the borrower fails to repay the loan by the end of the transaction, the entire transaction is reverted, ensuring that the lender's funds are always safe.</p>
      
      <p>While flash loans have legitimate use cases, such as arbitrage, collateral swaps, and self-liquidations, they have also become a popular tool for attackers due to their ability to provide access to large amounts of capital without requiring collateral.</p>
      
      <h2>Common Flash Loan Attack Vectors</h2>
      
      <h3>1. Price Oracle Manipulation</h3>
      <p>Many DeFi protocols rely on price oracles to determine asset prices. Attackers can use flash loans to temporarily manipulate these prices, allowing them to exploit other protocols that depend on these oracles.</p>
      
      <h3>2. Governance Attacks</h3>
      <p>Some protocols use token-based governance systems where voting power is determined by token holdings. Attackers can use flash loans to temporarily acquire large quantities of governance tokens, allowing them to pass malicious proposals.</p>
      
      <h3>3. Exploiting Protocol Vulnerabilities</h3>
      <p>Flash loans can amplify the impact of existing vulnerabilities in DeFi protocols, allowing attackers to extract significantly more value than would otherwise be possible.</p>
      
      <h2>Defending Against Flash Loan Attacks</h2>
      
      <h3>Robust Oracle Design</h3>
      <p>To prevent price oracle manipulation, protocols should implement time-weighted average prices (TWAPs), use multiple oracle sources, and implement circuit breakers that can detect and respond to unusual price movements.</p>
      
      <h3>Governance Safeguards</h3>
      <p>To prevent governance attacks, protocols can implement timelock mechanisms for proposal execution, require tokens to be locked for a certain period before being eligible for voting, and use quadratic voting to reduce the impact of large token holdings.</p>
      
      <h3>Security-First Design Principles</h3>
      <p>At a fundamental level, protocols should be designed with security in mind. This includes thorough testing, formal verification, and security audits. Additionally, protocols should be designed to be resistant to flash loan attacks from the outset.</p>
      
      <h2>Case Study: Cream Finance</h2>
      <p>In October 2021, Cream Finance suffered a flash loan attack that resulted in the loss of approximately $130 million. The attacker exploited a vulnerability in Cream's price oracle to manipulate the value of their collateral, allowing them to borrow significantly more assets than should have been possible.</p>
      
      <p>This attack highlights the importance of robust oracle design and security-first development practices.</p>
      
      <h2>Conclusion</h2>
      <p>Flash loan attacks represent a significant threat to the DeFi ecosystem, but with proper security measures, protocols can defend against these attacks. By implementing robust oracle designs, governance safeguards, and security-first development practices, DeFi protocols can reduce their vulnerability to flash loan attacks and build a more secure ecosystem for their users.</p>
    `
  },
  {
    id: 3,
    title: "The Rise of NFT Security Concerns",
    slug: "nft-security-concerns",
    excerpt: "As the NFT market evolves, new security challenges are emerging. Here's what creators and collectors need to know.",
    author: "Alex Chen",
    date: "January 28, 2024",
    imageUrl: "/images/block-chain.jpg",
    content: `
      <h2>The NFT Revolution</h2>
      <p>Non-fungible tokens (NFTs) have transformed the digital art and collectibles landscape, providing creators with new ways to monetize their work and collectors with verifiable ownership of digital assets. However, as the NFT market has grown, so too have the security concerns associated with it.</p>
      
      <h2>Common NFT Security Risks</h2>
      
      <h3>Smart Contract Vulnerabilities</h3>
      <p>Like any smart contract, NFT contracts can contain vulnerabilities that may be exploited by attackers. These vulnerabilities can range from issues with the minting process to problems with the transfer and ownership mechanisms.</p>
      
      <h3>Phishing Attacks</h3>
      <p>NFT collectors are frequently targeted by phishing attacks, where attackers create fake websites or send malicious messages that prompt users to connect their wallets or sign fraudulent transactions.</p>
      
      <h3>Marketplace Vulnerabilities</h3>
      <p>NFT marketplaces may contain vulnerabilities that allow attackers to purchase NFTs at prices below their market value or exploit other aspects of the platform.</p>
      
      <h3>Metadata Concerns</h3>
      <p>Many NFTs store their associated media (images, videos, etc.) off-chain, often using IPFS or centralized storage solutions. If these storage solutions fail, the NFT might lose its connection to the media it represents.</p>
      
      <h2>Best Practices for NFT Security</h2>
      
      <h3>For Creators</h3>
      <ol>
        <li><strong>Choose secure platforms:</strong> Use established, audited NFT platforms for minting and selling your work.</li>
        <li><strong>Consider on-chain metadata:</strong> When possible, store metadata on-chain to ensure the long-term integrity of your NFTs.</li>
        <li><strong>Verify contract code:</strong> If deploying your own NFT contract, ensure it's thoroughly audited and follows best practices.</li>
        <li><strong>Set appropriate royalties:</strong> Configure royalties correctly to ensure you receive your share of secondary sales.</li>
      </ol>
      
      <h3>For Collectors</h3>
      <ol>
        <li><strong>Use hardware wallets:</strong> Store valuable NFTs in hardware wallets for enhanced security.</li>
        <li><strong>Verify authenticity:</strong> Always verify the authenticity of NFT collections before purchasing, especially for high-value items.</li>
        <li><strong>Be cautious with approvals:</strong> Only approve reputable contracts and platforms to access your NFTs, and revoke approvals when they're no longer needed.</li>
        <li><strong>Beware of phishing:</strong> Be vigilant about phishing attempts and always verify the authenticity of websites and communications.</li>
      </ol>
      
      <h2>Emerging Solutions</h2>
      
      <h3>Enhanced Verification Mechanisms</h3>
      <p>NFT marketplaces are implementing enhanced verification mechanisms to help users distinguish between authentic and counterfeit collections. These mechanisms include verified badges, official collection tagging, and blockchain analysis tools to track the provenance of NFTs.</p>
      
      <h3>Decentralized Storage Solutions</h3>
      <p>To address metadata concerns, more projects are exploring decentralized storage solutions like Arweave, which offers permanent storage, or hybrid approaches that combine the benefits of different storage systems.</p>
      
      <h3>Smart Contract Insurance</h3>
      <p>Insurance protocols are emerging to provide coverage for NFT-related risks, including smart contract failures, marketplace exploits, and other security incidents.</p>
      
      <h2>Conclusion</h2>
      <p>As the NFT ecosystem continues to evolve, security considerations will remain paramount. By understanding the risks and implementing best practices, creators and collectors can participate in the NFT revolution while minimizing their exposure to security threats.</p>
      <p>At Shieldify, we specialize in auditing NFT smart contracts and platforms to identify and address potential vulnerabilities before they can be exploited, helping to build a more secure NFT ecosystem for everyone.</p>
    `
  },
  {
    id: 4,
    title: "Best Practices for Solana Program Security",
    slug: "solana-program-security-best-practices",
    excerpt: "Solana's programming model presents unique security considerations. Explore the best practices for secure development.",
    author: "Denis Jesus Palma Abanto",
    date: "January 10, 2024",
    imageUrl: "/images/block-chain.jpg",
    content: `
      <h2>Introduction to Solana's Security Model</h2>
      <p>Solana has emerged as one of the leading blockchain platforms, known for its high throughput and low transaction costs. However, Solana's programming model, based on the Rust programming language and its unique architecture, presents specific security challenges that developers must address.</p>
      
      <h2>Understanding Solana's Program Architecture</h2>
      <p>Solana programs (smart contracts) operate differently from their counterparts on chains like Ethereum. Solana uses a stateless model where programs don't store state directly. Instead, state is stored in separate "account" objects, and programs operate on these accounts when invoked.</p>
      
      <p>This architecture provides several advantages, including parallel execution, but also introduces unique security considerations.</p>
      
      <h2>Common Security Vulnerabilities in Solana Programs</h2>
      
      <h3>1. Account Validation Issues</h3>
      <p>One of the most common vulnerabilities in Solana programs involves inadequate validation of accounts passed to a program. Without proper validation, attackers can pass unexpected accounts, potentially leading to unauthorized access or fund manipulation.</p>
      
      <h3>2. Signer Validation Issues</h3>
      <p>Solana distinguishes between accounts that are merely referenced in a transaction and accounts that have signed the transaction. Failing to properly verify that the correct accounts have signed a transaction can lead to severe security vulnerabilities.</p>
      
      <h3>3. Ownership Validation Issues</h3>
      <p>In Solana, accounts are owned by programs, and only the owner program can modify the account's data. Failing to validate account ownership can lead to vulnerabilities where attackers manipulate accounts they shouldn't have access to.</p>
      
      <h3>4. Cross-Program Invocation (CPI) Risks</h3>
      <p>Solana programs can invoke other programs, which can lead to complex security considerations, especially regarding privilege inheritance and account validation.</p>
      
      <h2>Best Practices for Solana Program Security</h2>
      
      <h3>Comprehensive Account Validation</h3>
      <p>Always validate all accounts passed to your program, checking:
        <ul>
          <li>Account ownership</li>
          <li>Account type (using discriminators or other identification mechanisms)</li>
          <li>Required signers</li>
          <li>Account relationships (e.g., ensuring an NFT actually belongs to the claimed owner)</li>
        </ul>
      </p>
      
      <h3>Secure Cross-Program Invocations</h3>
      <p>When invoking other programs:
        <ul>
          <li>Verify the program ID of the invoked program</li>
          <li>Understand and properly manage privilege inheritance</li>
          <li>Validate all returned data from the invoked program</li>
        </ul>
      </p>
      
      <h3>Use of Program Derived Addresses (PDAs)</h3>
      <p>PDAs provide a secure way to create deterministic addresses that are controlled by your program. Use PDAs to:
        <ul>
          <li>Establish secure account hierarchies</li>
          <li>Implement cross-program authorization</li>
          <li>Create accounts without requiring signatures from their address</li>
        </ul>
      </p>
      
      <h3>Handling of Numeric Types</h3>
      <p>Rust provides safety against common arithmetic vulnerabilities, but developers should still be cautious:
        <ul>
          <li>Use checked_* operations when appropriate</li>
          <li>Be aware of potential overflow/underflow in math operations</li>
          <li>Handle edge cases in financial calculations</li>
        </ul>
      </p>
      
      <h2>Tools and Resources for Solana Security</h2>
      
      <h3>Static Analysis Tools</h3>
      <p>Tools like Soteria and Soleave can help identify potential vulnerabilities in Solana programs through static analysis.</p>
      
      <h3>Security Frameworks</h3>
      <p>Frameworks like Anchor provide higher-level abstractions that can help avoid common security pitfalls, though they aren't a silver bullet.</p>
      
      <h3>Professional Audits</h3>
      <p>Given the complexity of Solana's security model, professional security audits are essential, especially for programs handling significant value.</p>
      
      <h2>Conclusion</h2>
      <p>Solana offers exciting possibilities for blockchain developers, but its unique architecture requires a specific approach to security. By understanding the platform's security model and implementing best practices, developers can create secure and reliable Solana programs.</p>
      
      <p>At Shieldify, our extensive experience with the Solana ecosystem, led by Denis Jesus Palma Abanto's background as Solana's former Lead SRE, gives us unique insights into securing Solana programs. Our auditing services are tailored to address the specific security challenges of the Solana platform.</p>
    `
  }
];

// Get post data based on slug
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  // If post doesn't exist, return 404
  if (!post) {
    notFound();
  }

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
            <Link className="transition-colors hover:text-foreground/80" href="/#about">About</Link>
            <Link className="transition-colors hover:text-foreground/80" href="/#community">Community</Link>
          </nav>
          <Button className="ml-auto">Request an audit</Button>
        </div>
      </header>

      <main className="flex-1">
        <article className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <Link href="/blog" className="flex items-center text-blue-600 mb-8">
              ← Back to blog
            </Link>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center text-gray-500 mb-8">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>By {post.author}</span>
            </div>
            
            <div className="relative w-full h-[300px] md:h-[400px] mb-8">
              <Image 
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
            
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-xl font-bold mb-4">Share this article</h3>
              <div className="flex gap-4">
                <Button variant="outline">Twitter</Button>
                <Button variant="outline">LinkedIn</Button>
                <Button variant="outline">Facebook</Button>
              </div>
            </div>
          </div>
        </article>
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
