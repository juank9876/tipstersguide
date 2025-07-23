'use client'

import Atropos from 'atropos/react';

const badges = [
    // IZQUIERDA
    { name: 'betfair', offset: -5, className: 'top-0 left-10' },
    { name: 'bwin', offset: 0, className: 'top-1/2 left-40 -translate-y-1/2' },
    { name: 'play', offset: -3, className: 'bottom-0 left-10' },

    // DERECHA
    { name: 'codere', offset: 5, className: 'top-0 right-10' },
    { name: 'pokerstars', offset: 2, className: 'top-1/2 right-40 -translate-y-1/2' },
    { name: 'luckia', offset: 3, className: 'bottom-0 right-10' },
];

export function AtroposCasinos() {
    return (
        <div className="absolute inset-0 z-0 hidden lg:flex">
            <Atropos
                className="w-full h-full "
                highlight={false}
                shadow={false}
                activeOffset={1}
                rotateXMax={1}
                rotateYMax={1}
            >
                <div className="relative w-full h-full flex flex-col">
                    {badges.map(({ name, offset, className }) => (
                        <img
                            key={name}
                            src={`/casinos-png/${name}.png`}
                            data-atropos-offset={offset}
                            className={`w-45 absolute ${className}`}
                            alt={name}
                        />
                    ))}
                </div>
            </Atropos>
        </div>
    );
}