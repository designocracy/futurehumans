import Flex from '@/interfaces/Flex'
import Button from '@/interfaces/Button'

export default function HomeHero() {
  return (
    <Flex justify="center" align="center">
      <div className="text-center w-full max-w-[1758px] pt-[50px] pb-[180px] bg-[url(/images/hero-banner.png)] bg-no-repeat bg-center ">
        <h1 className="text-[96px]  -tracking-[2.88px] leading-[92.46%]">
          <span className=" font-bold block gradient-primary-text text-outline">
            Relationship managers
          </span>
          <span>
            For unicorns and
            <br /> software developers
          </span>
        </h1>
        <p className="text-dark font-normal text-[29px] mt-[20px] leading-[92.46%] -tracking-[0.877px]">
          We match your tech needs with the best European software
          <br /> development teams available for long-term rent.
        </p>
        <Flex justify="center" align="center" className="mt-[40px] gap-[10px]">
          <Button className=" uppercase rounded-[30px] " variant={'secondary'}>
            looking for a developers
          </Button>
          <Button className=" uppercase rounded-[30px] " variant={'transparent'}>
            Match me with the company
          </Button>
        </Flex>
      </div>
    </Flex>
  )
}
