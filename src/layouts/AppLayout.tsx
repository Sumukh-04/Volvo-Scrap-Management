import { ReactNode } from "react"
import NavBar from "../Common/DashboardComponents/NavBar"

type AppLayoutProps = {
  header?: ReactNode
  children: ReactNode
  showSettings?: boolean
  onSettingsClick?: () => void
}

export default function AppLayout({
  header,
  children,
  showSettings = false,
  onSettingsClick,
}: AppLayoutProps){
  return (
    <div className="app-shell">
      {/* Global navbar */}
      <NavBar 
      showSettings={showSettings}
      onSettingsClick={onSettingsClick}/>

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