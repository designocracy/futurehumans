import Container from '@/interfaces/Container'
import Flex from '@/interfaces/Flex'

export default function HomePlatform() {
  return (
    <Container className={'mt-[200px]'}>
      <h3 className="text-black text-[20px] leading-[92%] font-normal">PLATFORM FUTURE HUMAN</h3>
      <Flex justify={'between'}>
        <div className="max-w-[50%]">
          <h2 className="text-[64px] text-black leading-[92%] mt-[20px] mb-[15px]">
            <b>Success</b> through data
          </h2>
          <p className="text-dark -tracking-[0.9px] leading-[92%] text-[30px] font-light">
            Discover the Impact. Explore the Data. of Future hUMANS success—numbers that reflect our
            commitment to excellence and the transformative power of our services.
          </p>
        </div>
        <div className="max-w-[50%]">
          <h1 className="text-[120px] mt-[20px] -tracking-[3.6px] leading-[92.46%] font-black gradient-primary-text">
            $110,000,000+
          </h1>
          <p className="border-b-2 pb-[10px] mt-[20px] border-secondary text-black -tracking-[0.9px] leading-[92%] text-[30px]  font-light">
            Total value of projects
          </p>
        </div>
      </Flex>
    </Container>
  )
}
