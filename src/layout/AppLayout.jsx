import { League_Spartan } from 'next/font/google'

const leagueSpartan = League_Spartan({ subsets: ['latin'] })

export default function AppLayout({ children }) {
  return <main className={leagueSpartan.className}>{children}</main>
}
