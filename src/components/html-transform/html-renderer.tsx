import parse from 'html-react-parser'
import { options } from './transformer-map'
import DynamicStyle from '../juankui/css-content'
import { debugLog } from '@/config/debug-log'
import { debug } from '@/config/debug-log'


export default function HtmlRenderer({ html, cssContent }: { html: string, cssContent: string | undefined }) {
  debugLog(debug.htmlContent, html)
  return (
    <>
      {parse(html, options)}
      <DynamicStyle cssContent={cssContent} />
    </>
  )
}
