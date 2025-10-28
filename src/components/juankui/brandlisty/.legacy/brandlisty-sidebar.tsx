
'use client'
import React, { useEffect, useState } from 'react';
import { getUserCountry } from '@/api-fetcher/fetcher';
import { BrandlistyCardSidebar } from '../brandlisty-card';

export function BrandlistySidebar () {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [countryCode, setCountryCode] = useState<string>('')
  useEffect(() => {
    async function loadData () {
      try {
        const userCountry = await getUserCountry({ ip: '' })
        setCountryCode(userCountry)
        const res = await fetch(`/api/brandlisty?country=${userCountry}`)
        const json = await res.json()

        if (!res.ok) throw new Error(json.error || 'Error de servidor')
        setData(json.brands || [])
      } catch (err) {
        console.error(err)
        setError('Error al cargar datos')
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  if (loading) return <p>Cargando...</p>
  if (error) return <p>{error}</p>


  if (loading) {
    return (
      <div className="w-full max-w-sm bg-gray-50 p-4">
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg bg-white p-4 shadow-md">
              <div className="mb-4 h-4 w-3/4 rounded bg-gray-200"></div>
              <div className="mb-4 h-20 rounded bg-gray-200"></div>
              <div className="h-10 rounded bg-gray-200"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-sm bg-gray-50 p-4">
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-center">
          <p className="text-sm text-red-700">Error: {error}</p>
        </div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="w-full max-w-sm bg-gray-50 p-4">
        <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-center">
          <p className="text-sm text-yellow-700">No hay datos disponibles</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm bg-gray-50 p-4">
      <h1>MOSTRANDO RESULTADOS PARA: {countryCode}</h1>
      {data.map((operator, index) => (
        <BrandlistyCardSidebar key={operator.id} operator={operator} index={index} />
      ))}
    </div>
  );
}

