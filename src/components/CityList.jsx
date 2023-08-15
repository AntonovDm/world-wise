import CityItem from './CityItem'
import styles from './CityList.module.css'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import Message from './Message'

function CityList({ cities, isLoading }) {
  CityList.propTypes = {
    cities: PropTypes.array,
    isLoading: PropTypes.bool,
  }

  if (isLoading) return <Spinner />

  if (!cities.length)
    return <Message message="Add your first city on the map" />

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem
          city={city}
          key={city.id}
        />
      ))}
    </ul>
  )
}

export default CityList
