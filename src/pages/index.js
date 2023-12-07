import Header from "@/components/Header";

import { League_Spartan } from "next/font/google";
import Link from "next/link";
const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={leagueSpartan.className}>
      <div className="gradient-primary text-center capitalize py-[12px] text-[12px]">
        <p>
          We&lsquo;re assembling a United Tech Force to help non-profits and
          startups affected by the war
          <Link href="#" className="ml-4 underline">
            Get Involved
          </Link>
        </p>
      </div>
      <Header />;
    </main>
  );
}
