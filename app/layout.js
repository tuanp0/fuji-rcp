import "./globals.css"
import { Metadata, Viewport } from "next"
import Header from '@components/Header'
import Footer from '@components/Footer'

const APP_NAME = "Fuji Recipes"
const APP_DEFAULT_TITLE = "Fuji Recipes"
const APP_TITLE_TEMPLATE = "%s - TP"
const APP_DESCRIPTION = "Recipes for Fuji cameras"


export const metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
}

export const viewport = {
  themeColor: "#FFFFFF",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" dir="ltr">
      <body>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
