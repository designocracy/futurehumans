import AppLayout from '@/layout/AppLayout'
import Header from '@/components/Header'
import Topbar from '@/components/Topbar'
import HomeHero from '@/sections/HomeHero'
import { Button } from '@nextui-org/react'

export default function Home() {
  return (
    <AppLayout>
      <Topbar />
      <Header />
      <HomeHero />
    </AppLayout>
  )
}
