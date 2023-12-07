import Link from 'next/link'

export default function Topbar() {
  return (
    <div className="gradient-primary text-center capitalize py-[12px] text-[12px]">
      <p>
        We&lsquo;re assembling a United Tech Force to help non-profits and startups affected by the
        war
        <Link href="#" className="ml-4 underline">
          Get Involved
        </Link>
      </p>
    </div>
  )
}
