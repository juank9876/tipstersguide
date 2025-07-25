'use client'

import Atropos from 'atropos/react';

const badges = [
    // IZQUIERDA


    // DERECHA
    { name: 'play', offset: -3, className: 'bottom-70 right-120' },
    { name: 'betfair', offset: -5, className: 'bottom-120 right-90' },
    { name: 'codere', offset: 5, className: 'bottom-120 right-30' },
    { name: 'luckia', offset: 3, className: 'bottom-70 right-10' },
    { name: 'pokerstars', offset: 2, className: 'bottom-20 right-30 ' },
    { name: 'bwin', offset: 0, className: 'bottom-20 right-90 ' },
];

export function AtroposCasinos() {
    return (
        <div className="absolute inset-0 z-0 hidden lg:flex right-40 bottom-10">
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