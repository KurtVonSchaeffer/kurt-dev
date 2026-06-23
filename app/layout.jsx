import { JetBrains_Mono } from "next/font/google";
import './globals.css';  // Corrected path for globals.css


//components 
import Header from "@/components/header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

export const metadata = {
  metadataBase: new URL("https://kurt-dev.vercel.app"),
  title: "Kurt Von Schaeffer — Senior Full Stack Developer & Product Owner",
  description: "Senior Full Stack Developer and Product Owner with 5+ years building enterprise fintech, biotech, and AI automation platforms. Based in South Africa.",
  keywords: ["Full Stack Developer", "Product Owner", "Fintech", "Next.js", "React", "Node.js", "South Africa"],
  authors: [{ name: "Kurt Von Schaeffer" }],
  openGraph: {
    title: "Kurt Von Schaeffer — Senior Full Stack Developer & Product Owner",
    description: "Building scalable fintech, biotech, and AI automation platforms. 5+ years across the full software development lifecycle.",
    url: "https://kurtdevv.vercel.app",
    siteName: "Kurt.Dev",
    images: [{ url: "/assets/kd.jpg", width: 930, height: 1163, alt: "Kurt Von Schaeffer" }],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kurt Von Schaeffer — Senior Full Stack Developer",
    description: "Building scalable fintech and AI automation platforms. 5+ years experience.",
    images: ["/assets/kd.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return ( 
  <html lang="en"> 
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        
          
        
       

          
        
      </body>
    </html>
  );
}
