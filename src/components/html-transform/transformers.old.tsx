// components/HtmlTransform/transformers.ts
import { DOMNode, domToReact, Element, HTMLReactParserOptions } from 'html-react-parser'
import { Button } from '../ui/button'
import { CardShine } from '../juankui/legacy/card-shine'
import { ArrowRight, Star, Sparkles, Flame, Bolt, Dice1Icon, Dice3Icon, Dice4Icon, Dice2Icon, Dice6Icon, Dice5Icon } from 'lucide-react'
import { fixAttribs } from '@/lib/utils'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'


export function transformRow (el: Element, options: HTMLReactParserOptions) {
  //console.log('Hijos de <row>:', el.children.length);
  const validChildren = el.children.filter(
    (child) => child.type === 'tag'
  ) as Element[]

  //Fix Bug de que se sale del main, ya que se aplica flex-row a todo
  if (el.children.length === 1) {
    return (
      <div id={el.attribs?.id} className={`flex flex-col items-center justify-center ${el.attribs?.class || ''}`}>
        {domToReact(validChildren as DOMNode[], options)}
      </div>
    )
  }
  return (
    <div id={el.attribs?.id} className={`flex flex-col lg:flex-row lg:flex-wrap ${el.attribs?.class || ''}`}>
      {domToReact(validChildren as DOMNode[], options)}
    </div>
  )
}

export function transformCol (el: Element, options: HTMLReactParserOptions) {
  const classStr = el.attribs?.class || ''

  const getTailwindWidth = (classStr: string): string | number => {
    const match = classStr.match(/col-(?:xs|sm|md|lg|xl)-(\d+)/)
    if (!match) return 'w-full'

    const value = parseInt(match[1])
    const fraction = value / 12

    if (fraction === 1) return 'w-full'
    if (fraction === 0.5) return 'w-1/2'
    if (fraction === 1 / 3) return 'w-1/3'
    if (fraction === 2 / 3) return 'w-2/3'
    if (fraction === 0.25) return 'w-1/4'
    if (fraction === 0.75) return 'w-3/4'

    const percent = +(fraction * 100).toFixed(0) // Redondeado a 2 decimales
    return percent

  }

  const widthClass = getTailwindWidth(classStr)

  return (
    <>
      <div
        id={el.attribs?.id}
        style={{ width: `${widthClass}%` }}
        className={`${widthClass} max-${widthClass} lg:flex lg:flex-col justify-center items-center h-full hidden ${el.attribs?.class || ''}`}
      >
        {domToReact(el.children as DOMNode[], options)}
      </div>

      <div
        id={el.attribs?.id}
        className={`h-full w-full items-center justify-center lg:hidden ${el.attribs?.class || ''}`}
      >
        {domToReact(el.children as DOMNode[], options)}
      </div>
    </>
  )
}

export function transformCard (el: Element, options: HTMLReactParserOptions) {
  // Busca si el primer hijo es un badge (por ejemplo, un número envuelto en un span o div)
  const [firstChild, ...restChildren] = el.children as Element[];
  let badgeContent = null;
  let contentChildren = el.children as DOMNode[];

  // Si el primer hijo es un número o tiene un atributo especial, lo usamos como badge
  if (
    firstChild &&
    firstChild.type === 'tag' &&
    (firstChild.name === 'span' || firstChild.name === 'div') &&
    firstChild.children &&
    firstChild.children[0] &&
    firstChild.children[0].type === 'text' &&
    /^[0-9]+$/.test((firstChild.children[0] as any).data.trim())
  ) {
    badgeContent = (firstChild.children[0] as any).data;
    contentChildren = restChildren;
  }

  return (
    <div id={el.attribs?.id} className='relative mx-auto flex flex-col'>
      {badgeContent &&
        <div className="absolute left-0 top-0 z-50">
          <div className="size-16 flex items-center justify-center rounded-full text-3xl font-bold shadow-lg">
            {badgeContent}
          </div>
        </div>
      }
      <CardShine className={`mx-5 relative text-white my-5 flex w-full max-w-[350px] overflow-hidden transition duration-500 bg-[#171717] ${el.attribs?.class || ''}`}>
        {domToReact(contentChildren, options)}
      </CardShine>
    </div>
  )
}

export function transformCardBody (el: Element, options: HTMLReactParserOptions) {
  const children = el.children as Element[];

  const hasH5 = children.some(child => child.type === 'tag' && child.name === 'h5');
  const hasImg = children.some(child => child.type === 'tag' && child.name === 'img');

  if (hasImg) {
    // Renderiza algo especial si hay img
    return (
      <div id={el.attribs?.id} className={`flex flex-col space-y-3 border-2 border-green-500 ${el.attribs?.class || ''}`}>
        <span className="font-bold text-green-600">Contiene Imagen</span>
        {domToReact(el.children as DOMNode[], options)}
      </div>
    );
  }

  return (
    <div id={el.attribs?.id} className={`flex flex-col space-y-3 ${el.attribs?.class || ''}`}>
      {domToReact(el.children as DOMNode[], options)}
    </div>
  )
}

export function transformFeatureItem (el: Element, options: HTMLReactParserOptions) {
  // Extrae el badge si existe
  const badge = el.attribs?.badge || '1';
  // Busca la imagen y el resto del contenido
  const imageElement = (el.children as Element[]).find(child => child.name === 'img');
  const otherChildren = (el.children as Element[]).filter(child => child !== imageElement);
  // El primer hijo no imagen es el título, el resto es el texto
  const [titleNode, ...rest] = otherChildren;

  return (
    <div id={el.attribs?.id} className={`relative flex flex-col w-full max-w-[370px] h-[430px] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] hover:to-[var(--color-primary-semi-dark)] rounded-2xl shadow-2xl shadow-blue-200 overflow-hidden items-center justify-center mx-auto my-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-3xl ${el.attribs?.class || ''}`}>
      {/* Badge/Número o Imagen */}
      <div className="z-10 flex items-center justify-center py-5">
        {imageElement ? (
          <div className="flex items-center justify-center rounded-full bg-gradient-to-b from-[#6a5cff] to-[#3b82f6] p-2 shadow-lg ring-4 ring-white ring-offset-2">
            <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-white">
              {domToReact([imageElement], options)}
            </div>
          </div>
        ) : (
          <div className="rounded-full bg-gradient-to-b from-[#6a5cff] to-[#3b82f6] px-8 py-6 text-4xl font-bold text-white shadow-lg ring-4 ring-white ring-offset-2">
            {badge}
          </div>
        )}
      </div>
      {/* Contenido */}
      <div className="flex flex-1 flex-col items-center justify-start px-5 pt-10 text-center">
        <div className="mb-2 text-2xl font-semibold tracking-wide text-white">
          {domToReact([titleNode], options)}
        </div>
        <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-[#6a5cff] to-[#3b82f6]" />
        <div className="text-base font-normal text-white">
          {domToReact(rest as DOMNode[], options)}
        </div>
      </div>
      {/* Onda inferior más notoria */}

    </div>
  )
}

export function transformFeatureList (el: Element, options: HTMLReactParserOptions) {
  return (
    <div id={el.attribs?.id} className={`flex flex-wrap items-center justify-center gap-4 ${el.attribs?.class || ''}`}>
      {domToReact(el.children as DOMNode[], options)}
    </div>
  )
}

export function transformTextElement (el: Element, options: HTMLReactParserOptions) {
  return (
    <div className={`text py-3 ${el.attribs?.class || ''}`}>
      {domToReact(el.children as DOMNode[], options)}
    </div>
  )
}

export function transformContainer (el: Element, options: HTMLReactParserOptions) {
  return (
    <div className={`flex flex-col ${el.attribs?.class || ''}`}>
      {domToReact(el.children as DOMNode[], options)}
    </div>
  )
}

export function transformDiv (el: Element, options: HTMLReactParserOptions) {
  return (
    <div className={`${el.attribs?.class || ''}`}>
      {domToReact(el.children as DOMNode[], options)}
    </div>
  )
}

export function transformSection (el: Element, options: HTMLReactParserOptions) {
  return (
    <section className={` rounded-lg px-5 py-5 ${el.attribs?.class || ''}`}>
      {domToReact(el.children as DOMNode[], options)}
    </section>
  )
}

//Elementos HTML
export function transformButton (el: Element, options: HTMLReactParserOptions) {
  return (
    <Button variant={'accent'} asChild>
      <a
        href={el.attribs.href || '#'}
        className={`${el.attribs?.class || ''}`}
      >
        {domToReact(el.children as DOMNode[], options)}
      </a>
    </Button>
  )
}

export function transformImg (el: Element) {
  return (
    <img
      alt={el.attribs.alt || 'sample image'}
      src={el.attribs.src || 'https://imgs.search.brave.com/Q3KM87IGdN-WX5xySRtFxbsjUYGEvnHmDEKXdVYkBys/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jYXNp/bm8tc2lnbi0zMjgy/MzU0LmpwZw'}

      className={`${el.attribs?.class || ''}`}
    />
  )
}
export function transformH2 (el: Element, options: HTMLReactParserOptions) {
  // Check if element has any text content
  const hasContent = el.children.some(child =>
    (child.type === 'text' && child.data.trim() !== '') ||
    (child.type === 'tag' && child.children?.length > 0)
  );

  // Return null if no content
  if (!hasContent) return null;

  const icons = [ArrowRight, Star, Sparkles, Flame, Bolt, Dice1Icon, Dice2Icon, Dice3Icon, Dice4Icon, Dice5Icon, Dice6Icon]
  const RandomIcon = icons[Math.floor(Math.random() * icons.length)]

  return (

    <h2 id={el.attribs?.id} className={`${el.attribs?.class || ''} font-bold text-3xl`}>
      {domToReact(el.children as DOMNode[], options)}
    </h2>


  )
}

export function transformH3 (el: Element, options: HTMLReactParserOptions) {
  const icons = [ArrowRight, Star, Sparkles, Flame, Bolt]
  const RandomIcon = icons[Math.floor(Math.random() * icons.length)]

  return (
    <h3 id={el.attribs?.id} className={`${el.attribs?.class || ''} font-bold text-2xl`}>
      {domToReact(el.children as DOMNode[], options)}
    </h3>
  )
}

export function transformLi (el: Element, options: HTMLReactParserOptions) {
  return (
    <li id={el.attribs?.id} className={`[&>*]:inline [&>code]:inline [&>strong]:inline [&>strong]:font-bold list-inside list-disc relative w-fit ${el.attribs?.class || ''}`}>
      {domToReact(el.children as DOMNode[], options)}
    </li>
  )
}

export function transformCode (el: Element) {

  const getText = (nodes: DOMNode[]): string =>
    nodes
      .map((node) => {
        if ('data' in node && node.data) {
          // Reemplaza \u003C por < y \u003E por > y \r\n por salto de línea
          let text = node.data;
          text = text.replace(/\\u003C/g, '<');
          text = text.replace(/\\u003E/g, '>');
          text = text.replace(/\\r\\n/g, '\n');  // o solo \r\n según cómo venga
          return text;
        }
        if ('children' in node) return getText(node.children as DOMNode[]);
        return '';
      })
      .join('');

  const codeContent = getText(el.children as DOMNode[]).trim();

  if (!codeContent) return null; // ⛔ No renderizar si está vacío

  return (
    <code className={`block items-end justify-start whitespace-pre px-2 ${el.attribs?.class || ''}`}>
      {getText(el.children as DOMNode[])}
    </code>
  );
}

export function transformStrong (el: Element, options: HTMLReactParserOptions) {
  return (
    <strong className={`flex font-bold ${el.attribs?.class || ''}`}>
      {domToReact(el.children as DOMNode[], options)}
    </strong>
  )
}

export function transformP (el: Element, options: HTMLReactParserOptions) {
  if (el.children.length === 0) return null;
  return (

    <p className={`[&>*]:inline [&>code]:inline [&>strong]:inline [&>strong]:font-bold ${el.attribs?.class || ''}`}>
      {domToReact(el.children as DOMNode[], options)}
    </p>
  )
}

export function transformPre (el: Element, options: HTMLReactParserOptions) {

  return (
    <pre className={`overflow-x-auto rounded-md bg-zinc-900 p-4 text-white ${el.attribs?.class || ''}`}>
      {domToReact(el.children as DOMNode[], options)}
    </pre>
  );
}

export function transformForm (el: Element, options: HTMLReactParserOptions) {
  return (
    <form className={`flex flex-col border border-gray-700 rounded-lg p-5 gap-y-3 ${el.attribs?.class || ''}`}>
      {domToReact(el.children as DOMNode[], options)}
    </form>
  )
}

export function transformInput (el: Element, options: HTMLReactParserOptions) {
  const attribs = fixAttribs(el.attribs);
  return (
    <input
      type={attribs.type || 'text'}
      placeholder={attribs.placeholder || ' '}
      {...attribs}
      className={`w-full p-2 rounded-md border border-gray-300 ${attribs.className || ''} ${el.attribs?.class || ''}`}
    />
  )
}

export function transformTextarea (el: Element, options: HTMLReactParserOptions) {
  const attribs = fixAttribs(el.attribs);

  return (
    <textarea
      {...attribs}
      className={`w-full p-2 rounded-md border border-gray-300 ${attribs.className || ''} ${el.attribs?.class || ''}`}
    />
  )
}

export function transformBtnSubmit (el: Element, options: HTMLReactParserOptions) {
  return (
    <Button variant={'accent'} className={`text-white ${el.attribs?.class || ''}`}>
      {domToReact(el.children as DOMNode[], options)}
    </Button>
  )
}


export function transformTestimonials (el: Element, options: HTMLReactParserOptions) {
  return (
    <section className={`testimonials py-12 px-4  flex flex-col items-center justify-center w-full ${el.attribs?.class || ''}`}>
      {domToReact(el.children as DOMNode[], options)}
    </section>
  )
}

export function transformBlockquote (el: Element, options: HTMLReactParserOptions) {
  // Busca el span (nombre usuario)
  const userSpan = (el.children as Element[]).find(child => child.name === 'span');
  const quoteText = (el.children as DOMNode[]).filter(child => child !== userSpan);
  return (
    <blockquote className={`relative bg-white rounded-2xl shadow-lg p-8 my-4 max-w-xl mx-auto text-slate-800 text-lg font-medium flex flex-col items-center ${el.attribs?.class || ''}`}>
      <span className="absolute left-4 top-2 select-none font-serif text-5xl text-blue-200">“</span>
      <span className="z-10 block text-center">{domToReact(quoteText, options)}</span>
      {userSpan && (
        <span className="mt-6 block text-base font-semibold text-[var(--color-accent)]">{domToReact([userSpan], options)}</span>
      )}
    </blockquote>
  )
}

export function transformSvg (el: Element, options: HTMLReactParserOptions) {
  const attribs = fixAttribs(el.attribs);

  return (
    <svg
      {...attribs}
      fill="#000"
      stroke='#fff'
      className={`relative rounded-lg ${attribs.className || ''} ${el.attribs?.class || ''}`}
    >
      {domToReact(el.children as DOMNode[], options)}
    </svg>
  )
}


export function transformTakeaways (el: Element, options: HTMLReactParserOptions) {
  return (
    <div className='flex w-full max-w-full items-center justify-center'>
      <section {...el.attribs} className={`${el.attribs?.class || ''} w-full`}>
        {domToReact(el.children as DOMNode[], options)}
      </section>
    </div>
  )
}

