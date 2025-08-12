module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  /*
    safelist: [
  
      // Comprehensive patterns for colors with all variants
      {
        pattern: /(bg|text|border|ring|shadow)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900|950)/,
      },
      // Responsive breakpoint patterns for colors
      {
        pattern: /(sm|md|lg|xl|2xl):(bg|text|border|ring|shadow)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900|950)/,
      },
  
      // Gradients - comprehensive patterns
      {
        pattern: /bg-gradient-(to|from)-(t|tr|r|br|b|bl|l|tl)/, variants: ['']
      },
      {
        pattern: /from-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900|950)/,
      },
      {
        pattern: /via-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900|950)/,
      },
      {
        pattern: /to-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900|950)/,
      },
  
      // Typography - comprehensive
      {
        pattern: /(text)-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/,
      },
      {
        pattern: /(font)-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)/,
      },
      {
        pattern: /(leading)-(none|tight|snug|normal|relaxed|loose|3|4|5|6|7|8|9|10)/,
      },
      {
        pattern: /(tracking)-(tighter|tight|normal|wide|wider|widest)/,
      },
      // Responsive typography
      {
        pattern: /(sm|md|lg|xl|2xl):(text)-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/,
      },
      {
        pattern: /(sm|md|lg|xl|2xl):(font)-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)/,
      },
  
      // Spacing - comprehensive patterns
      {
        pattern: /(p|px|py|pt|pr|pb|pl|m|mx|my|mt|mr|mb|ml)-(0|0\.5|1|1\.5|2|2\.5|3|3\.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
      },
      {
        pattern: /(space-x|space-y|gap|gap-x|gap-y)-(0|0\.5|1|1\.5|2|2\.5|3|3\.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
      },
      // Responsive spacing
      {
        pattern: /(sm|md|lg|xl|2xl):(p|px|py|pt|pr|pb|pl|m|mx|my|mt|mr|mb|ml)-(0|0\.5|1|1\.5|2|2\.5|3|3\.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
      },
      {
        pattern: /(sm|md|lg|xl|2xl):(space-x|space-y|gap|gap-x|gap-y)-(0|0\.5|1|1\.5|2|2\.5|3|3\.5|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
      },
  
      // Sizing - comprehensive
      {
        pattern: /(w|h)-(0|0\.5|1|1\.5|2|2\.5|3|3\.5|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|32|36|40|44|48|52|56|60|64|72|80|96|auto|px|full|screen|min|max|fit)/,
      },
      {
        pattern: /(min-w|min-h|max-w|max-h)-(0|full|min|max|fit|prose|screen-sm|screen-md|screen-lg|screen-xl|screen-2xl)/,
      },
      {
        pattern: /w-(1\/2|1\/3|2\/3|1\/4|2\/4|3\/4|1\/5|2\/5|3\/5|4\/5|1\/6|2\/6|3\/6|4\/6|5\/6|1\/12|2\/12|3\/12|4\/12|5\/12|6\/12|7\/12|8\/12|9\/12|10\/12|11\/12)/,
      },
      {
        pattern: /h-(1\/2|1\/3|2\/3|1\/4|2\/4|3\/4|1\/5|2\/5|3\/5|4\/5|1\/6|2\/6|3\/6|4\/6|5\/6)/,
      },
  
      // Borders and rounded corners
      {
        pattern: /(border|border-t|border-r|border-b|border-l)-(0|2|4|8)/,
      },
      {
        pattern: /(rounded|rounded-t|rounded-r|rounded-b|rounded-l|rounded-tl|rounded-tr|rounded-br|rounded-bl)-(none|sm|md|lg|xl|2xl|3xl|full)/,
      },
  
      // Shadows and effects
      {
        pattern: /(shadow|drop-shadow)-(sm|md|lg|xl|2xl|inner|none)/,
      },
      {
        pattern: /(ring|ring-offset)-(0|1|2|4|8|inset)/,
      },
  
      // Opacity and filters
      {
        pattern: /(opacity)-(0|5|10|20|25|30|40|50|60|70|75|80|90|95|100)/,
      },
      {
        pattern: /(blur|brightness|contrast|grayscale|hue-rotate|invert|saturate|sepia)-(0|sm|md|lg|xl|2xl|3xl)/,
      },
  
      // Flexbox and Grid
      {
        pattern: /(flex)-(1|auto|initial|none|row|row-reverse|col|col-reverse|wrap|wrap-reverse|nowrap)/,
      },
      {
        pattern: /(grid-cols|grid-rows)-(1|2|3|4|5|6|7|8|9|10|11|12|none)/, variants: ['sm', 'md', 'lg']
      },
      {
        pattern: /(col-span|row-span|col-start|col-end|row-start|row-end)-(1|2|3|4|5|6|7|8|9|10|11|12|auto|full)/,
      },
      {
        pattern: /(justify|items|content|self)-(start|end|center|between|around|evenly|stretch|baseline|auto)/,
      },
      {
        pattern: /(place)-(content|items|self)-(start|end|center|between|around|evenly|stretch|baseline|auto)/,
      },
  
      // Positioning
      {
        pattern: /(top|right|bottom|left|inset|inset-x|inset-y)-(0|0\.5|1|1\.5|2|2\.5|3|3\.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|auto|px|full)/,
      },
      {
        pattern: /(z)-(0|10|20|30|40|50|auto)/,
      },
  
      // Transforms
      {
        pattern: /(scale|scale-x|scale-y)-(0|50|75|90|95|100|105|110|125|150)/,
      },
      {
        pattern: /(rotate)-(0|1|2|3|6|12|45|90|180)/,
      },
      {
        pattern: /(translate-x|translate-y)-(0|0\.5|1|1\.5|2|2\.5|3|3\.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|px|full)/,
      },
      {
        pattern: /(skew-x|skew-y)-(0|1|2|3|6|12)/,
      },
  
      // Transitions and animations
      {
        pattern: /(transition)-(none|all|colors|opacity|shadow|transform)/,
      },
      {
        pattern: /(duration)-(75|100|150|200|300|500|700|1000)/,
      },
      {
        pattern: /(delay)-(75|100|150|200|300|500|700|1000)/,
      },
      {
        pattern: /(ease)-(linear|in|out|in-out)/,
      },
      {
        pattern: /(animate)-(none|spin|ping|pulse|bounce)/,
      },
  
      // Hover, focus, and other states
      {
        pattern: /(hover|focus|active|visited|disabled|group-hover|group-focus):(bg|text|border|ring|shadow|opacity|scale|rotate|translate-x|translate-y)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900|950)/,
      },
      {
        pattern: /(hover|focus|active|visited|disabled|group-hover|group-focus):(scale|opacity)-(0|50|75|90|95|100|105|110|125|150)/,
      },
  
      // Display and visibility
      'block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden',
      'visible', 'invisible', 'collapse', "w-15", "h-15",
  
      // Position
      'static', 'fixed', 'absolute', 'relative', 'sticky',
  
      // Overflow
      'overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll',
      'overflow-x-auto', 'overflow-x-hidden', 'overflow-x-clip', 'overflow-x-visible', 'overflow-x-scroll',
      'overflow-y-auto', 'overflow-y-hidden', 'overflow-y-clip', 'overflow-y-visible', 'overflow-y-scroll',
  
      // Text alignment and decoration
      'text-left', 'text-center', 'text-right', 'text-justify', 'text-start', 'text-end',
      'underline', 'overline', 'line-through', 'no-underline',
      'uppercase', 'lowercase', 'capitalize', 'normal-case',
      'truncate', 'text-ellipsis', 'text-clip',
      'whitespace-normal', 'whitespace-nowrap', 'whitespace-pre', 'whitespace-pre-line', 'whitespace-pre-wrap', 'whitespace-break-spaces',
  
      // Cursor
      'cursor-auto', 'cursor-default', 'cursor-pointer', 'cursor-wait', 'cursor-text', 'cursor-move', 'cursor-help', 'cursor-not-allowed', 'cursor-none', 'cursor-context-menu', 'cursor-progress', 'cursor-cell', 'cursor-crosshair', 'cursor-vertical-text', 'cursor-alias', 'cursor-copy', 'cursor-no-drop', 'cursor-grab', 'cursor-grabbing', 'cursor-all-scroll', 'cursor-col-resize', 'cursor-row-resize', 'cursor-n-resize', 'cursor-e-resize', 'cursor-s-resize', 'cursor-w-resize', 'cursor-ne-resize', 'cursor-nw-resize', 'cursor-se-resize', 'cursor-sw-resize', 'cursor-ew-resize', 'cursor-ns-resize', 'cursor-nesw-resize', 'cursor-nwse-resize', 'cursor-zoom-in', 'cursor-zoom-out',
  
      // User select
      'select-none', 'select-text', 'select-all', 'select-auto',
  
      // Pointer events
      'pointer-events-none', 'pointer-events-auto',
  
      // Resize
      'resize-none', 'resize-y', 'resize-x', 'resize',
  
      // Scroll behavior
      'scroll-auto', 'scroll-smooth',
  
      // Touch action
      'touch-auto', 'touch-none', 'touch-pan-x', 'touch-pan-left', 'touch-pan-right', 'touch-pan-y', 'touch-pan-up', 'touch-pan-down', 'touch-pinch-zoom', 'touch-manipulation',
  
      // Common specific classes
      'container', 'mx-auto', 'sr-only', 'not-sr-only',
      'hover:opacity-75',
      'hover:opacity-100',
  
      // Z-index
      'z-0',
      'z-10',
      'z-20',
      'z-30',
      'z-40',
      'z-50',
  
      // Position
      'relative',
      'absolute',
      'fixed',
      'sticky',
      'top-0',
      'right-0',
      'bottom-0',
      'left-0',
  
      // Display
      'block',
      'inline-block',
      'inline',
      'hidden',
  
      // Container
      'container',
      'mx-auto',
      'px-4',
      'py-4',
      'py-16',
  
      // Overflow
      'overflow-hidden',
      'overflow-x-auto',
      'overflow-y-auto',
    ],
  */
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        cardForeground: 'var(--card-foreground)',
        popover: 'var(--popover)',
        popoverForeground: 'var(--popover-foreground)',
        muted: 'var(--muted)',
        mutedForeground: 'var(--muted-foreground)',
        destructive: 'var(--destructive)',
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        sidebar: 'var(--sidebar)',
        sidebarForeground: 'var(--sidebar-foreground)',
        sidebarPrimary: 'var(--sidebar-primary)',
        sidebarPrimaryForeground: 'var(--sidebar-primary-foreground)',
        sidebarAccent: 'var(--sidebar-accent)',
        sidebarAccentForeground: 'var(--sidebar-accent-foreground)',
        sidebarBorder: 'var(--sidebar-border)',
        sidebarRing: 'var(--sidebar-ring)',
      },
    },
  },
  plugins: [],
};