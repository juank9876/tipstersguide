// scripts/generateSafelist.ts
const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'gray', 'purple', 'orange', 'indigo', 'cyan', 'violet', 'amber', 'emerald'];
const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

const safelist = [];

colors.forEach(color => {
    shades.forEach(shade => {
        safelist.push(`bg-${color}-${shade}`);
        safelist.push(`text-${color}-${shade}`);
        safelist.push(`hover:bg-${color}-${shade}`);
        safelist.push(`hover:text-${color}-${shade}`);
    });
});
console.log('Generated Safelist:');
console.log(JSON.stringify(safelist, null, 2));