
import Head from "next/head"
import { ThemeProvider } from "@app/_providers/ThemeProvider"
import { StoreProvider } from "@app/_providers/StoreProvider"
import { App } from "@app/App"
// import { dir } from 'i18next'

export default function RootLayout({
  children,
  params: {
    lng
  }
}: {
  children: React.ReactNode,
  params: {
    lng
  }
}) {
  return (//dir={dir(lng)}
    <html lang={lng}> 
      <Head>
        <title>Fortune telling</title>
      </Head>
      <body>
        <ThemeProvider>
          <StoreProvider>
            <App>{children}</App>
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}