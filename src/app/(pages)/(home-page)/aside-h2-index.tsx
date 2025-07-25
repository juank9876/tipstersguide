'use client';

import { useEffect, useState, useRef } from "react";
import { ArrowRight, Star, Sparkles, Flame, Bolt, Circle, Dice1, Dice3, Dice4, Dice5, Dice2, Dice6, Dice1Icon, Dice3Icon, Dice4Icon, Dice2Icon, Dice6Icon, Dice5Icon, ShieldCheck, ChevronUp } from 'lucide-react'

export function AsideH2Index({ html }: { html: string }) {
    const [headings, setHeadings] = useState<{ text: string }[]>([]);
    const [activeText, setActiveText] = useState<string | null>(null);
    const [isAtTop, setIsAtTop] = useState(true);
    const scrollCount = useRef(0);

    // Array de iconos a usar
    const icons = [
        ArrowRight, Star, Sparkles, Flame, Bolt,
        Dice1Icon, Dice2Icon, Dice3Icon, Dice4Icon, Dice5Icon, Dice6Icon, ShieldCheck
    ];

    useEffect(() => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const h2Array = Array.from(doc.querySelectorAll("h2")).map((el) => ({
            text: el.textContent?.trim() || ""
        }));
        setHeadings(h2Array);
    }, [html]);

    useEffect(() => {
        if (headings.length === 0) return;
        const h2Elements = Array.from(document.querySelectorAll("h2"));
        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            const visible = entries.filter(e => e.isIntersecting);
            if (visible.length > 0) {
                const text = visible[0].target.textContent?.trim() || "";
                setActiveText(text);
            }
        };
        const observer = new window.IntersectionObserver(handleIntersect, {
            rootMargin: '0px 0px -70% 0px',
            threshold: 0.1,
        });
        h2Elements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, [headings]);

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (isAtTop && e.deltaY > 0) {
                scrollCount.current += 1;
                if (scrollCount.current >= 3) {
                    setIsAtTop(false);
                }
            }
        };
        const handleScroll = () => {
            if (window.scrollY === 0) {
                scrollCount.current = 0;
                setIsAtTop(true);
            }
        };
        window.addEventListener('wheel', handleWheel);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isAtTop]);

    if (headings.length === 0) return null;

    return (
        <aside
            className={`
                hidden lg:flex lg:flex-col
                w-72 bg-white rounded-xl shadow-lg py-5 px-4 z-40
                fixed right-15
            `}
            style={{
                transition: 'top 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.6s cubic-bezier(0.4,0,0.2,1)',
                top: isAtTop ? 'calc(100vh - 37vh)' : '50%',
                transform: isAtTop ? 'translateY(0)' : 'translateY(-50%)',
            }}
        >
            <h3 className="font-bold text-lg mb-3 px-2 text-zinc-900">Tabla de contenidos</h3>
            <ul className="space-y-2">
                {headings.map((h, i) => {
                    const Icon = icons[i % icons.length];
                    return (
                        <li key={i} className={`flex rounded flex-row items-center px-2 py-1.5 ${activeText === h.text ? 'bg-[var(--color-accent-light)]' : 'hover:text-slate-800 hover:bg-slate-100'}`}>
                            <Icon className="w-4 h-4 mr-2 text-[var(--color-accent-dark)] mb-0.5" />
                            <button
                                type="button"
                                className={`truncate cursor-pointer text-sm rounded block w-full text-left  transition-colors duration-150 ${activeText === h.text ? 'text-[var(--color-accent-dark)] font-semibold' : 'text-slate-600 '}`}
                                onClick={() => {
                                    const h2s = Array.from(document.querySelectorAll("h2"));
                                    const target = h2s.find(el => el.textContent?.trim() === h.text);
                                    if (target) {
                                        target.scrollIntoView({ behavior: "smooth", block: "start" });
                                    }
                                }}
                            >
                                {h.text}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}
