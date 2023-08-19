import PropTypes from 'prop-types'
import { useAuth } from '../contexts/FakeAuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function ProtectedRoute({ children }) {
  ProtectedRoute.propTypes = {
    children: PropTypes.any,
  }

  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(
    function () {
      if (!isAuthenticated) navigate('/')
    },
    [isAuthenticated, navigate]
  )

  return isAuthenticated ? children : null
}

export default ProtectedRoute
