import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const country = searchParams.get('country') || ''

    const apiKey = process.env.BRANDLISTY_API_KEY
    const listId = process.env.BRANDLISTY_LIST_ID

    if (!apiKey || !listId) {
      return NextResponse.json(
        { error: 'Missing Brandlisty API credentials' },
        { status: 500 }
      )
    }

    const response = await fetch(
      `https://pro.brandlisty.com/api/v1/list.php?token=${apiKey}&hash=${listId}`,
      {
        headers: {
          'User-Agent': 'MyApp/1.0; https://spinbonuscasino.com',
        },
        cache: 'no-store', // evita cache si quieres datos frescos
      }
    )
    
    if (!response.ok) {
      throw new Error(`Brandlisty API error: ${response.status}`)
    }
    
    const data = await response.json()
    let brands = data?.data?.brands ?? []

    if (country) {
      // Primero filtramos las marcas válidas
      brands = brands.filter((brand: any) => {
        // Solo mostramos marcas globales o del país del usuario
        if (brand.geo === 'WW') return true
        if (Array.isArray(brand.geo)) {
          return brand.geo.includes(country)
        }
        return false
      })

      // Luego las ordenamos: primero las del país, después las WW
      brands.sort((a: any, b: any) => {
        const aRegional = Array.isArray(a.geo) && a.geo.includes(country)
        const bRegional = Array.isArray(b.geo) && b.geo.includes(country)

        if (aRegional && !bRegional) return -1 // a primero
        if (!aRegional && bRegional) return 1  // b primero
        return 0 // si ambos son iguales, no cambia orden
      })
    }

    return NextResponse.json({ success: true, brands })
  } catch (error) {
    console.error('Error fetching Brandlisty:', error)
    return NextResponse.json(
      { error: 'Error fetching Brandlisty data' },
      { status: 500 }
    )
  }
}