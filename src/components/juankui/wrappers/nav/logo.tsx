import { SiteSettings } from "@/types/types";
import Image from "next/image";
import { Link } from "@/components/juankui/optionals/link";


export function Logo({ site_title, site_logo }: SiteSettings) {
  return (
    <Link href="/" className="relative mb-0 flex items-start justify-end pb-0">
      <Image
        alt={site_title || "Site logo"}
        src={site_logo || "/logo-1.png"}
        width={75}
        height={75} // <= logo cuadrado!
        className="h-full"
      />
    </Link>
  )
}