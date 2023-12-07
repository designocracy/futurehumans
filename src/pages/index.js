import AppLayout from '@/layout/AppLayout'
import Header from '@/components/Header'
import Topbar from '@/components/Topbar'
import HomeHero from '@/sections/Home/Hero'
import HomePlatform from '@/sections/Home/Platform'
export default function Home() {
  return (
    <AppLayout>
      <Topbar />
      <Header />
      <HomeHero />
      <HomePlatform />
    </AppLayout>
  )
}
