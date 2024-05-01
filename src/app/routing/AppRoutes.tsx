/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import { FC } from "react"
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { PublicRoutes } from "./PublicRoutes"
import { PrivateRoutes } from "./PrivateRoutes"
import { ErrorsPage } from "../modules/errors/ErrorsPage"
import { Logout, AuthPage, useAuth } from "../modules/auth"
import { App } from "../App"

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const { BASE_URL } = import.meta.env

const AppRoutes: FC = () => {
  const { currentUser } = useAuth()

  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path="/*" element={<PublicRoutes />} />

          {currentUser ? (
            <>
              <Route path="dashboard/*" element={<PrivateRoutes />} />
              <Route path="auth/*" element={<Navigate to="/dashboard" />} />
            </>
          ) : (
            <>
              <Route path="dashboard/*" element={<Navigate to="/auth" />} />
              <Route path="auth/*" element={<AuthPage />} />
            </>
          )}

          <Route path="error/*" element={<ErrorsPage />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { AppRoutes }
