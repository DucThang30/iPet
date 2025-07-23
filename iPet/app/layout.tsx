import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "iPet - Sàn Thương Mại Thú Cưng #1 Việt Nam",
  description:
    "iPet - Nền tảng thương mại điện tử chuyên về thú cưng hàng đầu Việt Nam. Hơn 10,000 sản phẩm chất lượng, 1,000+ cửa hàng uy tín, dịch vụ chăm sóc thú cưng chuyên nghiệp.",
  keywords: "thú cưng, pet, chó, mèo, thức ăn thú cưng, phụ kiện thú cưng, bệnh viện thú y, grooming, iPet",
  authors: [{ name: "iPet Team" }],
  creator: "iPet",
  publisher: "iPet",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://ipet.vn",
    siteName: "iPet",
    title: "iPet - Sàn Thương Mại Thú Cưng #1 Việt Nam",
    description: "Nền tảng thương mại điện tử chuyên về thú cưng hàng đầu Việt Nam",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "iPet - Sàn Thương Mại Thú Cưng",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iPet - Sàn Thương Mại Thú Cưng #1 Việt Nam",
    description: "Nền tảng thương mại điện tử chuyên về thú cưng hàng đầu Việt Nam",
    images: ["/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#3B82F6",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        {/* Additional Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="iPet" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "iPet",
              url: "https://ipet.vn",
              description: "Sàn thương mại điện tử chuyên về thú cưng",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://ipet.vn/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}

        {/* Scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Service Worker Registration
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
