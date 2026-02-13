import { ReactNode } from "react"
import NavBar from "../components/dashboard/NavBar"

type AppLayoutProps = {
  header?: ReactNode
  children: ReactNode
}

export default function AppLayout({
  header,
  children,
}: AppLayoutProps){
  return (
    <div className="app-shell">
      {/* Global navbar */}
      <NavBar />

      {/* Everything below navbar */}
      <div className="app-body">

        {/* Page level sticky header */}
        {header && (
          <header className="page-header">
            {header}
          </header>
        )}

        {/* Main page content */}
        <main className="page-main">
          {children}
        </main>

      </div>
    </div>
  )
}