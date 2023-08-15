import CountryItem from './CountryItem'
import styles from './CountryList.module.css'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import Message from './Message'

function CountryList({ cities, isLoading }) {
  CountryList.propTypes = {
    cities: PropTypes.array,
    isLoading: PropTypes.bool,
  }

  if (isLoading) return <Spinner />

  if (!cities.length)
    return <Message message="Add your first city on the map" />

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji, id: city.id }]
    else return arr
  }, [])

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem
          country={country}
          key={country.id}
        />
      ))}
    </ul>
  )
}

export default CountryList