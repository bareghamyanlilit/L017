import Link from "next/link"; 

export function Footer() {
  return (
    <footer className="bottom-0 py-10 text-center text-xl bg-bg  text-[#fcfbfb]">

      
      <Link href="https://siteup-am.vercel.app/">
        <p className="mt-2 text-xl">
          Պատրաստվել է <span className="underline">siteup.am</span> -ի  կողմից
        </p>
      </Link>
      <hr className="my-5" />
      <a href="tel:+37477760204" className="">SiteUp : +374 77 760 204</a>
    </footer>
  );
}
