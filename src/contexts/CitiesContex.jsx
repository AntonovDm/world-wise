import { createContext, useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'

const BASE_URL = 'http://localhost:9000'

const CitiesContext = createContext()

function CitiesProvider({ children }) {
  CitiesProvider.propTypes = {
    children: PropTypes.any,
  }

  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true)
        const res = await fetch(`${BASE_URL}/cities`)
        const data = await res.json()
        setCities(data)
      } catch {
        alert('there was an error loading data...')
      } finally {
        setIsLoading(false)
      }
    }
    fetchCities()
  }, [])

  return (
    <CitiesContext.Provider value={{ cities, isLoading }}>
      {children}
    </CitiesContext.Provider>
  )
}

function useCities() {
  const context = useContext(CitiesContext)
  if (context === undefined)
    throw new Error('CitiesContext was used outside the CitiesProvider')
  return context
}

// eslint-disable-next-line react-refresh/only-export-components
export { CitiesProvider, CitiesContext, useCities }
