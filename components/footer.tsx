import Link from "next/link"; 

export function Footer() {
  return (
    <footer className="bottom-0 py-10 text-center text-xl bg-[#2D2D2D]   text-[#fcfbfb]">

      <Link href="https://www.instagram.com/siteup.am/">
        <p className="FontMassis mt-2">
          Պատրաստվել է <span className="underline"> siteup.am</span> -ի  կողմից 
        </p>
      </Link>
    </footer>
  );
}
