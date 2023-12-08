import AppLayout from '@/layout/AppLayout'
import Header from '@/components/Header'
import Topbar from '@/components/Topbar'
import Flex from '@/interfaces/Flex'
import Button from '@/interfaces/Button'
import Container from '@/interfaces/Container'
import classNames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const statsClasses = classNames(
    'text-[120px] mt-[20px] -tracking-[3.6px] leading-[92.46%] font-black gradient-primary-text',
  )
  const statsTextClasses = classNames(
    'border-b-2 pb-[25px] mt-[30px] border-secondary text-black -tracking-[0.9px] leading-[92%] text-[30px]  font-light',
  )
  return (
    <AppLayout>
      <Topbar />
      <Header />
      <section id="home-banner">
        <Flex justify="center" align="center" className={'mt-[110px]'}>
          <div className="text-center w-full max-w-[1758px] pt-[50px] pb-[160px] bg-[url(/images/hero-banner.png)] bg-no-repeat bg-center ">
            <h1 className="text-[96px]  -tracking-[2.88px] leading-[92.46%]">
              <span className=" font-bold block gradient-primary-text text-outline">
                Relationship managers
              </span>
              <span>
                For unicorns and
                <br /> software developers
              </span>
            </h1>
            <p className="text-dark font-normal text-[29px] mt-[9px] leading-[92.46%] -tracking-[0.877px]">
              We match your tech needs with the best European software
              <br /> development teams available for long-term rent.
            </p>
            <Flex justify="center" align="center" className="mt-[46px] gap-[20px]">
              <Button
                className=" uppercase rounded-[30px] py-[30px] px-[50px]"
                variant={'secondary'}
              >
                looking for a developers
              </Button>
              <Button
                className=" uppercase rounded-[30px] py-[30px] px-[50px]"
                variant={'transparent'}
              >
                Match me with the company
              </Button>
            </Flex>
          </div>
        </Flex>
      </section>
      <div
        className="bg-[url(/images/bg1.png)] bg-no-repeat"
        style={{ backgroundPosition: 'center 3%', backgroundSize: 'auto' }}
      >
        <section id="home-platform">
          <Container className={'mt-[160px] pb-[100px]'}>
            <h3 className="text-black text-[20px] leading-[92%] font-normal">
              PLATFORM FUTURE HUMAN
            </h3>
            <Flex justify={'between'}>
              <div className="max-w-[42%]">
                <h2 className="text-[64px] text-black leading-[92%] mt-[20px] mb-[28px]">
                  <b>Success</b> through data
                </h2>
                <p className="text-dark -tracking-[0.9px] leading-[92%] text-[30px] font-light">
                  Discover the Impact. Explore the Data. of Future hUMANS success—numbers that
                  reflect our commitment to excellence and the transformative power of our services.
                </p>
              </div>
              <div className="">
                <h1 className={statsClasses}>$110,000,000+</h1>
                <p className={statsTextClasses}>Total value of projects</p>
              </div>
            </Flex>
            <Flex className={'mt-[130px]'} justify={'between'}>
              <div className="">
                <h1 className={statsClasses}>2,000+</h1>
                <p className={statsTextClasses}>Projects to date</p>
              </div>
              <div className="">
                <h1 className={statsClasses}>100,000+</h1>
                <p className={statsTextClasses}>Dediacted developers</p>
              </div>
              <div className="">
                <h1 className={statsClasses}>2,000+</h1>
                <p className={statsTextClasses}>Approved service provider</p>
              </div>
            </Flex>
          </Container>
        </section>

        <section id="home-horns-to-unicorns">
          <Container className={'mt-[150px]'}>
            <Flex>
              <div className="max-w-[45%]">
                <h2 className="text-[106px] text-black -tracking-[3.185px] leading-[92%] mt-[20px] mb-[15px]">
                  <b>Matching</b> horns to your <b>unicorns</b>
                </h2>
                <h3 className="uppercase mt-[11px] text-black text-[20px] leading-[92%] font-normal">
                  why future human
                </h3>
                <p className="mt-[6px] text-dark -tracking-[0.9px] leading-[92%] text-[30px] font-normal">
                  Unicorns come to us at different shapes and sizes. Whether it’s one special
                  developer you are looking for, a team that could scale, or a software project that
                  simply needs done - FUTURE Humans provides the match.
                </p>
                <p className="text-[30px] text-black -tracking-[0.9] mt-[35px]">
                  3 top matches in 3 day
                </p>
                <p className="text-[30px] text-[#7D7D7D] -tracking-[0.9] mt-[30px]">
                  Want to hear more?
                </p>
                <Link
                  href={'/'}
                  className="text-primary text-[30px] backdrop:-tracking-[0.9] mt-[20px]"
                >
                  Contact us
                </Link>
                <Flex justify="start" align="start" className="mt-[68px] gap-[20px]">
                  <Button
                    className=" uppercase rounded-[30px] py-[30px] px-[50px]"
                    variant={'secondary'}
                  >
                    looking for a developers
                  </Button>
                  <Button
                    className=" uppercase rounded-[30px] py-[30px] px-[50px]"
                    variant={'transparent'}
                  >
                    Match me with the company
                  </Button>
                </Flex>
              </div>
            </Flex>
          </Container>
        </section>

        <section id="home-horns-to-unicorns">
          <Container className={'mt-[250px]'}>
            <Flex justify={'between'} align={'center'}>
              <div className="max-w-[50%]">
                <h2 className="text-[64px] text-black -tracking-[1.92px] leading-[92%] mt-[20px] mb-[15px]">
                  <b>Great CV</b> alone does not guarantee <b>succcessful relationship</b>
                </h2>
              </div>
              <div className="max-w-[45%]">
                <p className="text-[#565656] text-[30px] -tracking-[0.9px]">
                  We approves 23% of service providers from Europe to join its ranks with their
                  developers.
                </p>
                <p className="text-[#565656] text-[30px] -tracking-[0.9px] mt-[40px]">
                  Those we approve have a few things in common:
                </p>
              </div>
            </Flex>
          </Container>
          <div
            className="max-w-[1700px] w-full mx-auto bg-[url('/images/shadow-bg.png')] bg-no-repeat pb-[200px]"
            style={{ backgroundPosition: 'center', backgroundSize: 'contain' }}
          >
            <Flex align={''} className={'gap-[35px] mt-[50px]'}>
              <div className="max-w-[50%] w-[100%] bg-primary rounded-[20px]  px-[67px] py-[45px]">
                <p className="text-white text-[30px] -tracking-[0.9px] leading-[92%]">
                  Their developers look for meaningful, full time dedication and opportunity to move
                  on once the time comes
                </p>
                <Image
                  className="mt-[41px]"
                  alt="developer"
                  src="/images/card1.png"
                  width={642}
                  height={331}
                />
                <Button
                  className="uppercase rounded-[30px] py-[30px] px-[50px] text-white mt-[40px]"
                  variant={'transparent'}
                >
                  looking for a developers
                </Button>
              </div>
              <Flex className="max-w-[50%] flex-col" justify={'between'}>
                <Flex justify="between" className={'bg-white rounded-[20px]'}>
                  <Flex
                    className="px-[52px] py-[38px] flex-col w-[max-content]"
                    justify={'between'}
                  >
                    <p className="text-[#565656]  text-[30px] -tracking-[0.9px] leading-[92%]">
                      Their developers look for meaningful, full time dedication and opportunity to
                      move on once the time comes
                    </p>
                    <Button
                      className="w-[max-content] uppercase rounded-[30px] py-[30px] px-[50px]"
                      variant={'secondary'}
                    >
                      collab with company
                    </Button>
                  </Flex>
                  <Image
                    alt="developer"
                    className="w-[max-content]"
                    src="/images/card2.png"
                    width={234}
                    height={295}
                  />
                </Flex>
                <Flex justify="between" className={'bg-white rounded-[20px]'}>
                  <Flex
                    className="px-[52px] py-[38px] flex-col w-[max-content]"
                    justify={'between'}
                  >
                    <p className="text-[#565656]  text-[30px] -tracking-[0.9px] leading-[92%]">
                      Ensuring the overall knowledge transfer and accumulation to and within your
                      organization.
                    </p>
                    <Button
                      className="w-[max-content] uppercase rounded-[30px] py-[30px] px-[50px]"
                      variant={'secondary'}
                    >
                      collab with company
                    </Button>
                  </Flex>
                  <Image
                    alt="developer"
                    className="w-[max-content]"
                    src="/images/card3.png"
                    width={234}
                    height={295}
                  />
                </Flex>
              </Flex>
            </Flex>
          </div>
        </section>
      </div>
    </AppLayout>
  )
}
