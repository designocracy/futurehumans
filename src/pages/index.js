import Header from "@/components/Header";

import { League_Spartan } from "next/font/google";
const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={leagueSpartan.className}>
      <div className="gradient-primary text-center py-[12px] text-[12px]">
        <p>
          We&lsquo;re assembling a United Tech Force to help non-profits and
          startups affected by the war
        </p>
      </div>
      <Header />;
    </main>
  );
}
