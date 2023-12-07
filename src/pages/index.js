import AppLayout from '@/layout/AppLayout'
import Header from '@/components/Header'
import Topbar from '@/components/Topbar'
import HomeHero from '@/sections/Home/Hero'
import HomePlatform from '@/sections/Home/Platform'
import Flex from '@/interfaces/Flex'
import Button from '@/interfaces/Button'
import Container from '@/interfaces/Container'
import classNames from 'classnames'

export default function Home() {
  const statsClasses = classNames(
    'text-[120px] mt-[20px] -tracking-[3.6px] leading-[92.46%] font-black gradient-primary-text',
  )
  const statsTextClasses = classNames(
    'border-b-2 pb-[10px] mt-[20px] border-secondary text-black -tracking-[0.9px] leading-[92%] text-[30px]  font-light',
  )
  return (
    <AppLayout>
      <Topbar />
      <Header />
      <HomeHero />
      <HomePlatform />
    </AppLayout>
  )
}
