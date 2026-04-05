'use client'

import { useEffect, useState } from 'react'
import Loading from './Loading'

const LOADING_DURATION = 4000 // 4 seconds

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isFirstVisit, setIsFirstVisit] = useState<boolean>(false)

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
      } else {
        setIsLoading(false)
      }
    } catch (error) {
      // Fallback for SSR or restricted environments
      setIsLoading(false)
    }
  }, [])

  // Optional: Smooth fade-out instead of instant remove
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