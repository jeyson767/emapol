"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Loader } from "./loader"

export function NavigationLoader() {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoading(true)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // 1.5 segundos para navegación

    return () => clearTimeout(timer)
  }, [pathname])

  return <Loader isLoading={isLoading} />
}
