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
        style={{ backgroundPosition: 'center 35%', backgroundSize: 'auto' }}
      >
        <section id="platform">
          <Container className={'mt-[160px] pb-[100px]'}>
            <h3 className="text-black text-[20px] leading-[92%] font-normal">
              PLATFORM FUTURE HUMAN
            </h3>
            <Flex justify={'between'}>
              <div className="max-w-[42%]">
                <h2 className="text-[64px] font-light text-black leading-[92%] mt-[20px] mb-[28px]">
                  <b className="font-bold">Success</b> through data
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

        <section id="horns-to-unicorns">
          <Container className={'mt-[150px]'}>
            <Flex>
              <div className="max-w-[45%]">
                <h2 className="font-light text-[106px] text-black -tracking-[3.185px] leading-[92%] mt-[20px] mb-[15px]">
                  <b className="font-bold">Matching</b> horns to your{' '}
                  <b className="font-bold">unicorns</b>
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

        <section id="horns-to-unicorns">
          <Container className={'mt-[250px]'}>
            <Flex justify={'between'} align={'center'}>
              <div className="max-w-[50%]">
                <h2 className="font-light text-[64px] text-black -tracking-[1.92px] leading-[92%] mt-[20px] mb-[15px]">
                  <b className="font-bold">Great CV</b> alone does not guarantee{' '}
                  <b className="font-bold">succcessful relationship</b>
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
            className="max-w-[1767px] w-full mx-auto bg-[url('/images/shadow-bg.png')] bg-no-repeat pb-[200px] -mb-[350px]"
            style={{ backgroundPosition: 'left center', backgroundSize: 'contain' }}
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
      <div
        className="bg-[url(/images/bg2.png)] bg-no-repeat "
        style={{ backgroundPosition: 'center 3%', backgroundSize: 'auto' }}
      >
        <section id="developers">
          <Container className={'pt-[350px] pb-[200px]'}>
            <h3 className="text-black text-[20px] leading-[92%] font-normal mb-[20px]">
              ABOUT THE DEVELOPERS
            </h3>
            <Flex justify={'between'}>
              <div className="max-w-[55%]">
                <h2 className="font-light text-[106px] text-black -tracking-[3.185px] leading-[92%] mb-[15px]">
                  Devs from <b className="font-bold">Future Humans</b> seem fun
                </h2>
              </div>
              <div className="max-w-[max-content]">
                <Flex justify="between" align="between" className="flex-col gap-[30px]">
                  <Button
                    className=" uppercase rounded-[30px] py-[30px] px-[50px]"
                    variant={'secondary'}
                  >
                    Hire Developer
                  </Button>
                  <Button
                    className=" uppercase rounded-[30px] py-[30px] px-[100px]"
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
                <h4 className=" text-black text-[36px] font-light -tracking-[1px] leading-[92%] mb-[20px]">
                  But are they <b className="font-bold">fun for you?</b>
                </h4>
                <p className="text-[#565656]  text-[30px] -tracking-[0.9px] leading-[92%]">
                  There is about 40% chance that - they are. It’s interesting for us to communicate
                  with you via text, but talking live would help answer this question much easier.
                </p>
              </div>
              <div className="w-1/3">
                <Flex align={'center'} className={'mb-[85px]'}>
                  <Image src="/images/dev2.png" width={194} height={185} alt="dev1" />
                </Flex>
                <p className="text-[#565656]  text-[30px] -tracking-[0.9px] leading-[92%]">
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
                <h4 className="text-black text-[36px] font-light -tracking-[1px] leading-[92%] mb-[20px]">
                  So is it <b className="font-bold">for you?</b>
                </h4>
                <p className="text-[#565656]  text-[30px] -tracking-[0.9px] leading-[92%]">
                  40% chance that - it is. Let’s have a call and turn it to 100% clarity.
                </p>
              </div>
            </Flex>
          </Container>
        </section>
        <section id="service-providers">
          <Container className={'pb-[180px]'}>
            <h3 className="text-black text-[20px] leading-[92%] font-normal mb-[20px]">
              SERVICE PROVIDERS
            </h3>
            <Flex justify={'between'}>
              <div className="max-w-[42%]">
                <h2 className="font-light text-[106px] text-black -tracking-[3.185px] leading-[92%] mb-[15px]">
                  Home for <span className={`font-black gradient-primary-text `}>2000+</span>{' '}
                  services provider <b className="font-bold">worldwide</b>
                </h2>

                <Flex justify="start" align="start" className="mt-[100px] gap-[20px]">
                  <Button
                    className="min-w-[350px] uppercase rounded-[30px] py-[30px] px-[50px]"
                    variant={'secondary'}
                  >
                    REGISTER
                  </Button>
                  <Button
                    className="min-w-[350px] uppercase rounded-[30px] py-[30px] px-[50px]"
                    variant={'transparent'}
                  >
                    reserve a call
                  </Button>
                </Flex>
              </div>
              <div className="max-w-[48%]">
                <h4 className="text-black text-[36px] font-light -tracking-[1px] leading-[92%] mb-[20px]">
                  Each with <b className="font-bold">5 - 2000</b> developers.
                </h4>
                <p className="text-[#565656]  text-[30px] -tracking-[0.9px] leading-[92%]">
                  If your developers can adhere to the principles of future humans Dedifesto, then
                  we can:
                </p>
                <ul className="font-medium mt-[98px] list-disc pl-[25px] text-[#565656]  text-[30px] -tracking-[0.9px] leading-[92%]">
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
          <Flex className="w-full smx-auto relative gap-[20px] pb-[200px]">
            <Flex justify={'start'} className="w-[50%] pt-[165px] gap-[40px]">
              <Flex align={'end'} className="">
                <Image src="/images/app-l.png" height={628} width={317} alt="APP 1" x />
              </Flex>
              <div className="max-w-[50%] mr-auto">
                <h2 className="font-light text-[106px] text-black -tracking-[3.185px] leading-[92%] mb-[48px]">
                  <b className="font-bold">Got a lead</b> you do not sercive?
                </h2>
                <h4 className=" text-black text-[36px] font-light -tracking-[1px] leading-[92%] ">
                  <b className="font-bold">Excahnge it</b> to the one that you do.
                </h4>
                <p className="text-[#565656] mb-[28px] text-[30px] -tracking-[0.9px] mt-[124px] leading-[92%]">
                  I want to hear more:
                </p>
                <Button
                  className="min-w-[350px] uppercase rounded-[30px] py-[30px] px-[50px]"
                  variant={'transparent'}
                >
                  HOW IT WORKS
                </Button>
              </div>
            </Flex>
            <Flex className="bg-black h-[100%] rounded-tl-[50px] rounded-bl-[50px] w-[50%] pl-[140px] pt-[165px]">
              <div className=" mr-auto w-[55%] mb-[165px]">
                <p className="text-[#D6D5D5]  text-[30px] -tracking-[0.9px]  leading-[92%]">
                  As in relationships - Future humans Lead Exchange Scoring engine ensures that each
                  prospective client ends up with a g reat match, while the one sending - gets their
                  too.
                </p>
                <p className="text-[#DDD] mt-[49px] text-[30px] -tracking-[0.9px] font-bold leading-[92%]">
                  200+ Service providers exchange leads in future humans.
                </p>
                <p className="text-[#D6D5D5] mt-[49px] text-[30px] -tracking-[0.9px]  leading-[92%]">
                  As in relationships - Future humans Lead Exchange Scoring engine ensures that each
                  prospective client ends up with a g reat match, while the one sending - gets their
                  too.
                </p>
                <p className="text-[#D6D5D5] mt-[49px] text-[30px] -tracking-[0.9px]  leading-[92%]">
                  Lets discuss:
                </p>
                <Button
                  className="min-w-[350px] uppercase rounded-[30px] mt-[28px] py-[30px] px-[50px]"
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
        <section id="helps-grow">
          <Flex className="max-w-[1767px] bg-black px-[116px] py-[213px] mx-auto rounded-[50px]">
            <div className="max-w-[50%]">
              <h2 className="font-light text-[106px] text-white -tracking-[3.185px] leading-[92%] ">
                Future humans <b className="font-bold">helps grow</b> your software service{' '}
                <b className="font-bold">company via</b> higher win %
              </h2>
            </div>
            <div className="max-w-[50%]">
              <p className="text-[#DDD] text-[30px] -tracking-[0.9px] leading-[92.46%]">
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
                className="min-w-[350px] uppercase rounded-[30px] mt-[55px] py-[30px] px-[50px]"
                variant={'secondary'}
              >
                packages
              </Button>
            </div>
          </Flex>
        </section>
      </div>
    </AppLayout>
  )
}
