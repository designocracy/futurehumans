import { Button } from '@nextui-org/react'
export default function HomeHero() {
  return (
    <section className="flex justify-center items-center mt-[100px]">
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
        <div className="flex justify-center items-center gap-5 mt-[40px]">
          <Button className="leading-[90%] text-white rounded-[30px] text-[17px] uppercase py-[30px] px-[50px] bg-secondary data-[hover=true]:bg-primary">
            looking for a developers
          </Button>
          <Button className="leading-[90%] text-dark border-2 border-dark rounded-[30px] text-[17px] uppercase py-[30px] px-[50px] bg-transparent data-[hover=true]:bg-primary data-[hover=true]:text-white data-[hover=true]:border-transparent">
            Match me with the company
          </Button>
        </div>
      </div>
    </section>
  )
}
