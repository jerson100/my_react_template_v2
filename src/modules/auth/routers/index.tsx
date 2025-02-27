import { Navigate, RouteObject } from 'react-router'
import { AuthContainer } from '../components'
import SignInView from '../components/SignInView'

const routes: RouteObject[] = [
  {
    path: '/auth',
    element: <AuthContainer />,
    children: [
      {
        path: 'signin',
        element: <SignInView />
      },
      {
        path: '*',
        element: <Navigate to="/auth/signin" replace />
      }
    ]
  }
]

export default routes
