import AppLayout from "@/layout/AppLayout";
import Header from "@/components/Header";
import Topbar from "@/components/Topbar";

export default function Home() {
  return (
    <AppLayout>
      <Topbar />
      <Header />
      <section className="flex justify-center items-center mt-[100px]">
        <div className="text-center w-full max-w-[1758px] py-[50px] pb-[300px] bg-[url(/images/hero-banner.png)] bg-no-repeat bg-center ">
          <h1 className="text-[96px]  -tracking-[2.88px] leading-[92.46%]">
            <span className=" font-bold block gradient-primary-text ">
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
        </div>
      </section>
    </AppLayout>
  );
}
