'use client'

import { useEffect, useState } from 'react'
import Loading from './Loading'

const LOADING_DURATION = 4000 // 4 seconds

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)
  const [isFirstVisit, setIsFirstVisit] = useState(false)

  useEffect(() => {
    try {
      const visited = localStorage.getItem('visited')

      if (!visited) {
        setIsFirstVisit(true)

        const timer = setTimeout(() => {
          localStorage.setItem('visited', 'true')
          setIsLoading(false)
        }, LOADING_DURATION)

        return () => clearTimeout(timer)
      }

      setIsLoading(false)
    } catch {
      // SSR / restricted env fallback
      setIsLoading(false)
    }
  }, [])

  if (isLoading && isFirstVisit) {
    return (
      <div className="animate-fadeIn">
        <Loading />
      </div>
    )
  }

  return (
    <div className="animate-fadeIn">
      {children}
    </div>
  )
}