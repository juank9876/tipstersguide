import { Category, NavItemType, SiteSettings } from "@/types/types";
import { FooterLinkList, FooterSocialIcons } from "./footer";
import { Link } from "../../optionals/link";
import { Footer } from "@/types/footer";
import { Bebas_Neue } from "next/font/google";

const SUPPORT_LINKS = [
    { href: "/privacy", label: "Privacidad" },
    { href: "/terms", label: "Términos" },
    { href: "/cookies", label: "Cookies" },
    { href: "/help", label: "Ayuda" },
];

const LEGAL_LINKS = [
    { href: "/privacy", label: "Política de Privacidad" },
    { href: "/terms", label: "Términos de Uso" },
    { href: "/sitemap", label: "Mapa del Sitio" },
];

const RESPONSIBLE_GAMING_LINKS = [
    { href: "/iconos-footer/auto-prohibicion.png", label: "Juego Responsable" },
    { href: "/iconos-footer/juego-seguro.png", label: "Juego Responsable" },
    { href: "/iconos-footer/jugar-bien.png", label: "Juego Responsable" },
    { href: "/iconos-footer/logo.png", label: "Juego Responsable" },
    { href: "/iconos-footer/mayor-edad.png", label: "Juego Responsable" },
];
const bebasNeue = Bebas_Neue({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

export function DefaultFooter({
    settings,
    menuItems,
    jsonFooter
}: {
    settings: SiteSettings;
    menuItems: NavItemType[];
    jsonFooter: Footer;
}) {
    const footer = jsonFooter;
    return (
        <footer className={`w-full bg-gradient-to-b from-[#0A0B2E] to-[#0A0B2E] ${bebasNeue.className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {/* Main Footer Content */}
                <div className="flex flex-wrap lg:flex-row justify-between items-start ">
                    {/* Brand Section */}
                    <div className="flex flex-col space-y-4 col-span-1 sm:col-span-2 lg:col-span-1">
                        {settings.site_logo && (
                            <img
                                src={settings.site_logo}
                                alt={settings.site_title}
                                className="h-8 w-auto"
                            />
                        )}
                        <h2 className="text-2xl text-start underline text-white">
                            {settings.site_title}
                        </h2>
                        <p className="text-xl text-slate-300 leading-relaxed max-w-xs">
                            {settings.site_description}
                        </p>
                        <div className="pt-4">
                            <FooterSocialIcons />
                        </div>
                    </div>

                    {/* Footer Columns */}
                    {footer.columns.map((column: any) => (
                        <div key={column.id} className="space-y-4">
                            <h3 className="text-xl underline text-yellow-400 uppercase text-center tracking-wider ml-2">
                                {column.title}
                            </h3>
                            <ul className="space-y-2 flex flex-col justify-center items-center">
                                {column.items.map((item: any) => (
                                    <li key={item.id}>
                                        <Link
                                            href={item.url}
                                            target={item.target}
                                            className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2 group text-xl"
                                        >
                                            <span className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Legal Images and Links */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
                        {/* Legal Images */}
                        <div className="grid grid-cols-3 sm:flex sm:space-x-6 gap-4 justify-center sm:justify-start">
                            {footer.legal_images.map((image: any) => (
                                <a
                                    key={image.id}
                                    href={image.link_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="opacity-75 hover:opacity-100 transition-opacity"
                                >
                                    <img
                                        src={image.image_url}
                                        alt={image.alt_text}
                                        className="h-8 sm:h-10 w-auto"
                                    />
                                </a>
                            ))}
                        </div>

                        {/* Legal Links */}
                        <div className="flex flex-wrap gap-4 justify-center sm:justify-end">
                            {footer.legal_links.map((link: any) => (
                                <Link
                                    key={link.id}
                                    href={link.url}
                                    className="text-xs sm:text-xl text-gray-400 hover:text-yellow-400 transition-colors"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-8 text-center">
                    <p className="text-xs sm:text-xl text-gray-400 px-4">
                        © {footer.copyright.start_year} - {footer.copyright.end_year}{' '}
                        {footer.copyright.company_name}. {footer.copyright.copyright_text}
                    </p>
                    <p className="mt-2 text-xs text-gray-500">
                        18+ | Juega con responsabilidad
                    </p>
                </div>
            </div>
        </footer>
    );
}