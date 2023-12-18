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
      <section id="banner">
        <Flex justify="center" align="center" className={'mt-[110px]'}>
          <div className="w-full max-w-[1758px] bg-[url(/images/hero-banner.png)] bg-center bg-no-repeat pb-[160px] pt-[50px] text-center ">
            <h1 className="text-[96px]  leading-[92.46%] -tracking-[2.88px]">
              <span className=" gradient-primary-text text-outline block font-bold">
                Relationship managers
              </span>
              <span>
                For unicorns and
                <br /> software developers
              </span>
            </h1>
            <p className="mt-[9px] text-[29px] font-normal leading-[92.46%] -tracking-[0.877px] text-dark">
              We match your tech needs with the best European software
              <br /> development teams available for long-term rent.
            </p>
            <Flex justify="center" align="center" className="mt-[46px] gap-[20px]">
              <Button
                className=" rounded-[30px] px-[50px] py-[30px] uppercase"
                variant={'secondary'}
              >
                looking for a developers
              </Button>
              <Button
                className=" rounded-[30px] px-[50px] py-[30px] uppercase"
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
        style={{ backgroundPosition: 'center 35%', backgroundSize: 'auto' }}
      >
        <section id="platform">
          <Container className={'mt-[160px] pb-[100px]'}>
            <h3 className="text-[20px] font-normal leading-[92%] text-black">
              PLATFORM FUTURE HUMAN
            </h3>
            <Flex justify={'between'}>
              <div className="max-w-[42%]">
                <h2 className="mb-[28px] mt-[20px] text-[64px] font-light leading-[92%] text-black">
                  <b className="font-bold">Success</b> through data
                </h2>
                <p className="text-[30px] font-light leading-[92%] -tracking-[0.9px] text-dark">
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

        <section id="horns-to-unicorns">
          <Container className={'mt-[150px]'}>
            <Flex>
              <div className="max-w-[45%]">
                <h2 className="mb-[15px] mt-[20px] text-[106px] font-light leading-[92%] -tracking-[3.185px] text-black">
                  <b className="font-bold">Matching</b> horns to your{' '}
                  <b className="font-bold">unicorns</b>
                </h2>
                <h3 className="mt-[11px] text-[20px] font-normal uppercase leading-[92%] text-black">
                  why future human
                </h3>
                <p className="mt-[6px] text-[30px] font-normal leading-[92%] -tracking-[0.9px] text-dark">
                  Unicorns come to us at different shapes and sizes. Whether it’s one special
                  developer you are looking for, a team that could scale, or a software project that
                  simply needs done - FUTURE Humans provides the match.
                </p>
                <p className="mt-[35px] text-[30px] -tracking-[0.9] text-black">
                  3 top matches in 3 day
                </p>
                <p className="mt-[30px] text-[30px] -tracking-[0.9] text-[#7D7D7D]">
                  Want to hear more?
                </p>
                <Link
                  href={'/'}
                  className="mt-[20px] text-[30px] text-primary backdrop:-tracking-[0.9]"
                >
                  Contact us
                </Link>
                <Flex justify="start" align="start" className="mt-[68px] gap-[20px]">
                  <Button
                    className=" rounded-[30px] px-[50px] py-[30px] uppercase"
                    variant={'secondary'}
                  >
                    looking for a developers
                  </Button>
                  <Button
                    className=" rounded-[30px] px-[50px] py-[30px] uppercase"
                    variant={'transparent'}
                  >
                    Match me with the company
                  </Button>
                </Flex>
              </div>
            </Flex>
          </Container>
        </section>

        <section id="horns-to-unicorns">
          <Container className={'mt-[250px]'}>
            <Flex justify={'between'} align={'center'}>
              <div className="max-w-[50%]">
                <h2 className="mb-[15px] mt-[20px] text-[64px] font-light leading-[92%] -tracking-[1.92px] text-black">
                  <b className="font-bold">Great CV</b> alone does not guarantee{' '}
                  <b className="font-bold">succcessful relationship</b>
                </h2>
              </div>
              <div className="max-w-[45%]">
                <p className="text-[30px] -tracking-[0.9px] text-[#565656]">
                  We approves 23% of service providers from Europe to join its ranks with their
                  developers.
                </p>
                <p className="mt-[40px] text-[30px] -tracking-[0.9px] text-[#565656]">
                  Those we approve have a few things in common:
                </p>
              </div>
            </Flex>
          </Container>
          <div
            className="mx-auto -mb-[350px] w-full max-w-[1767px] bg-[url('/images/shadow-bg.png')] bg-no-repeat pb-[200px]"
            style={{ backgroundPosition: 'left center', backgroundSize: 'contain' }}
          >
            <Flex align={''} className={'mt-[50px] gap-[35px]'}>
              <div className="w-[100%] max-w-[50%] rounded-[20px] bg-primary  px-[67px] py-[45px]">
                <p className="text-[30px] leading-[92%] -tracking-[0.9px] text-white">
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
                  className="mt-[40px] rounded-[30px] px-[50px] py-[30px] uppercase text-white"
                  variant={'transparent'}
                >
                  looking for a developers
                </Button>
              </div>
              <Flex className="max-w-[50%] flex-col" justify={'between'}>
                <Flex justify="between" className={'rounded-[20px] bg-white'}>
                  <Flex
                    className="w-[max-content] flex-col px-[52px] py-[38px]"
                    justify={'between'}
                  >
                    <p className="text-[30px]  leading-[92%] -tracking-[0.9px] text-[#565656]">
                      Their developers look for meaningful, full time dedication and opportunity to
                      move on once the time comes
                    </p>
                    <Button
                      className="w-[max-content] rounded-[30px] px-[50px] py-[30px] uppercase"
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
                <Flex justify="between" className={'rounded-[20px] bg-white'}>
                  <Flex
                    className="w-[max-content] flex-col px-[52px] py-[38px]"
                    justify={'between'}
                  >
                    <p className="text-[30px]  leading-[92%] -tracking-[0.9px] text-[#565656]">
                      Ensuring the overall knowledge transfer and accumulation to and within your
                      organization.
                    </p>
                    <Button
                      className="w-[max-content] rounded-[30px] px-[50px] py-[30px] uppercase"
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
      <div
        className="bg-[url(/images/bg2.png)] bg-no-repeat "
        style={{ backgroundPosition: 'center 3%', backgroundSize: 'auto' }}
      >
        <section id="developers">
          <Container className={'pb-[200px] pt-[350px]'}>
            <h3 className="mb-[20px] text-[20px] font-normal leading-[92%] text-black">
              ABOUT THE DEVELOPERS
            </h3>
            <Flex justify={'between'}>
              <div className="max-w-[55%]">
                <h2 className="mb-[15px] text-[106px] font-light leading-[92%] -tracking-[3.185px] text-black">
                  Devs from <b className="font-bold">Future Humans</b> seem fun
                </h2>
              </div>
              <div className="max-w-[max-content]">
                <Flex justify="between" align="between" className="flex-col gap-[30px]">
                  <Button
                    className=" rounded-[30px] px-[50px] py-[30px] uppercase"
                    variant={'secondary'}
                  >
                    Hire Developer
                  </Button>
                  <Button
                    className=" rounded-[30px] px-[100px] py-[30px] uppercase"
                    variant={'transparent'}
                  >
                    Hire Developer
                  </Button>
                </Flex>
              </div>
            </Flex>
            <Flex justify={'between'} align={''} className={'mt-[75px] gap-[75px]'}>
              <div className="w-1/3">
                <Flex align={'center'} className={'mb-[85px]'}>
                  <Image src="/images/dev1.png" width={194} height={185} alt="dev1" />
                </Flex>
                <h4 className=" mb-[20px] text-[36px] font-light leading-[92%] -tracking-[1px] text-black">
                  But are they <b className="font-bold">fun for you?</b>
                </h4>
                <p className="text-[30px]  leading-[92%] -tracking-[0.9px] text-[#565656]">
                  There is about 40% chance that - they are. It’s interesting for us to communicate
                  with you via text, but talking live would help answer this question much easier.
                </p>
              </div>
              <div className="w-1/3">
                <Flex align={'center'} className={'mb-[85px]'}>
                  <Image src="/images/dev2.png" width={194} height={185} alt="dev1" />
                </Flex>
                <p className="text-[30px]  leading-[92%] -tracking-[0.9px] text-[#565656]">
                  The number one conversation (pre-)starter we have is “We hire inhouse and would
                  like to keep it that way” and yet - in about 40% of the cases, within 1st or 2nd
                  conversation we land on a pilot project (meaningful thing to be done that could
                  scale to long-term collaboration)
                </p>
              </div>
              <div className="w-1/3">
                <Flex align={'center'} className={'mb-[85px]'}>
                  <Image src="/images/dev3.png" height={191} width={259} alt="dev1" />
                </Flex>{' '}
                <h4 className="mb-[20px] text-[36px] font-light leading-[92%] -tracking-[1px] text-black">
                  So is it <b className="font-bold">for you?</b>
                </h4>
                <p className="text-[30px]  leading-[92%] -tracking-[0.9px] text-[#565656]">
                  40% chance that - it is. Let’s have a call and turn it to 100% clarity.
                </p>
              </div>
            </Flex>
          </Container>
        </section>
        <section id="service-providers">
          <Container className={'pb-[180px]'}>
            <h3 className="mb-[20px] text-[20px] font-normal leading-[92%] text-black">
              SERVICE PROVIDERS
            </h3>
            <Flex justify={'between'}>
              <div className="max-w-[42%]">
                <h2 className="mb-[15px] text-[106px] font-light leading-[92%] -tracking-[3.185px] text-black">
                  Home for <span className={`gradient-primary-text font-black `}>2000+</span>{' '}
                  services provider <b className="font-bold">worldwide</b>
                </h2>

                <Flex justify="start" align="start" className="mt-[100px] gap-[20px]">
                  <Button
                    className="min-w-[350px] rounded-[30px] px-[50px] py-[30px] uppercase"
                    variant={'secondary'}
                  >
                    REGISTER
                  </Button>
                  <Button
                    className="min-w-[350px] rounded-[30px] px-[50px] py-[30px] uppercase"
                    variant={'transparent'}
                  >
                    reserve a call
                  </Button>
                </Flex>
              </div>
              <div className="max-w-[48%]">
                <h4 className="mb-[20px] text-[36px] font-light leading-[92%] -tracking-[1px] text-black">
                  Each with <b className="font-bold">5 - 2000</b> developers.
                </h4>
                <p className="text-[30px]  leading-[92%] -tracking-[0.9px] text-[#565656]">
                  If your developers can adhere to the principles of future humans Dedifesto, then
                  we can:
                </p>
                <ul className="mt-[98px] list-disc pl-[25px] text-[30px] font-medium  leading-[92%] -tracking-[0.9px] text-[#565656]">
                  <li className="mb-[45px]">Match you with future humans clients;</li>
                  <li className="mb-[45px]">Help build lasting relationships with them;</li>
                  <li className="mb-[45px]">
                    And grow your win % of all projects (both in and outside of future humans)
                  </li>
                </ul>
              </div>
            </Flex>
          </Container>
        </section>
      </div>
      <div
        className="bg-[url(/images/bg3.png)] bg-no-repeat "
        style={{ backgroundPosition: 'center 7%', backgroundSize: 'auto' }}
      >
        <section id="got-a-lead">
          <Flex className="smx-auto relative w-full gap-[20px] pb-[200px]">
            <Flex justify={'start'} className="w-[50%] gap-[40px] pt-[165px]">
              <Flex align={'end'} className="">
                <Image src="/images/app-l.png" height={628} width={317} alt="APP 1" x />
              </Flex>
              <div className="mr-auto max-w-[50%]">
                <h2 className="mb-[48px] text-[106px] font-light leading-[92%] -tracking-[3.185px] text-black">
                  <b className="font-bold">Got a lead</b> you do not sercive?
                </h2>
                <h4 className=" text-[36px] font-light leading-[92%] -tracking-[1px] text-black ">
                  <b className="font-bold">Excahnge it</b> to the one that you do.
                </h4>
                <p className="mb-[28px] mt-[124px] text-[30px] leading-[92%] -tracking-[0.9px] text-[#565656]">
                  I want to hear more:
                </p>
                <Button
                  className="min-w-[350px] rounded-[30px] px-[50px] py-[30px] uppercase"
                  variant={'transparent'}
                >
                  HOW IT WORKS
                </Button>
              </div>
            </Flex>
            <Flex className="h-[100%] w-[50%] rounded-bl-[50px] rounded-tl-[50px] bg-black pl-[140px] pt-[165px]">
              <div className=" mb-[165px] mr-auto w-[55%]">
                <p className="text-[30px]  leading-[92%] -tracking-[0.9px]  text-[#D6D5D5]">
                  As in relationships - Future humans Lead Exchange Scoring engine ensures that each
                  prospective client ends up with a g reat match, while the one sending - gets their
                  too.
                </p>
                <p className="mt-[49px] text-[30px] font-bold leading-[92%] -tracking-[0.9px] text-[#DDD]">
                  200+ Service providers exchange leads in future humans.
                </p>
                <p className="mt-[49px] text-[30px] leading-[92%] -tracking-[0.9px]  text-[#D6D5D5]">
                  As in relationships - Future humans Lead Exchange Scoring engine ensures that each
                  prospective client ends up with a g reat match, while the one sending - gets their
                  too.
                </p>
                <p className="mt-[49px] text-[30px] leading-[92%] -tracking-[0.9px]  text-[#D6D5D5]">
                  Lets discuss:
                </p>
                <Button
                  className="mt-[28px] min-w-[350px] rounded-[30px] px-[50px] py-[30px] uppercase"
                  variant={'secondary'}
                >
                  reserve a call
                </Button>
              </div>
              <Flex align={'end'} className=" ml-auto">
                <Image src="/images/app-r.png" height={628} width={317} alt="APP 1" />
              </Flex>
            </Flex>
          </Flex>
        </section>
        <section id="helps-grow ">
          <Flex className="relative mx-auto max-w-[1767px] gap-[100px] rounded-[50px] bg-black px-[116px] py-[213px]">
            <div className="max-w-[50%]">
              <h2 className="text-[106px] font-light leading-[92%] -tracking-[3.185px] text-white ">
                Future humans <b className="font-bold">helps grow</b> your software service{' '}
                <b className="font-bold">company via</b> higher win %
              </h2>
            </div>
            <div className="max-w-[50%]">
              <p className="text-[30px] leading-[92.46%] -tracking-[0.9px] text-[#DDD]">
                Over the last 9 years we have seen and participated in thousands of client -
                supplier interviews and projects. We’ve observed what helps and especially - what
                prevents companies from winning, even though they might be the most competitive
                ones.
                <br />
                <br /> Over 2021-2022 we’ve started coaching some of our suppliers to ensure that
                their potential is properly observed by clients and have found significant changes
                in win rates in such cases.
                <br />
                <br /> Now, in 2023 - we have developed a package, that helps not only get more
                leads, but grow trust in your brand and win more clients (both in and outside of
                future humans).
              </p>
              <Button
                className="mt-[55px] min-w-[350px] rounded-[30px] px-[50px] py-[30px] uppercase"
                variant={'secondary'}
              >
                packages
              </Button>
            </div>
            <Image
              src="/images/cube.png"
              height={169}
              width={169}
              alt="Cube"
              className="absolute -bottom-16 -right-6"
            />
          </Flex>
        </section>
      </div>
    </AppLayout>
  )
}
