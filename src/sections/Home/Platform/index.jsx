import Container from '@/interfaces/Container'
import Flex from '@/interfaces/Flex'
import classNames from 'classnames'

export default function HomePlatform() {
  const statsClasses = classNames(
    'text-[120px] mt-[20px] -tracking-[3.6px] leading-[92.46%] font-black gradient-primary-text',
  )
  const statsTextClasses = classNames(
    'border-b-2 pb-[10px] mt-[20px] border-secondary text-black -tracking-[0.9px] leading-[92%] text-[30px]  font-light',
  )
  return (
    <Container className={'mt-[200px] pb-[200px]'}>
      <h3 className="text-black text-[20px] leading-[92%] font-normal">PLATFORM FUTURE HUMAN</h3>
      <Flex justify={'between'}>
        <div className="max-w-[42%]">
          <h2 className="text-[64px] text-black leading-[92%] mt-[20px] mb-[15px]">
            <b>Success</b> through data
          </h2>
          <p className="text-dark -tracking-[0.9px] leading-[92%] text-[30px] font-light">
            Discover the Impact. Explore the Data. of Future hUMANS success—numbers that reflect our
            commitment to excellence and the transformative power of our services.
          </p>
        </div>
        <div className="">
          <h1 className={statsClasses}>$110,000,000+</h1>
          <p className={statsTextClasses}>Total value of projects</p>
        </div>
      </Flex>
      <Flex className={'mt-[50px]'} justify={'between'}>
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
  )
}
