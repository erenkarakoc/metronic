import { FC, lazy, Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { MasterLayout } from "../../_metronic/layout/MasterLayout"
import TopBarProgress from "react-topbar-progress-indicator"
import { DashboardWrapper } from "../pages/admin/dashboard/DashboardWrapper"
import { getCSSVariableValue } from "../../_metronic/assets/ts/_utils"
import { DisableSidebar } from "../../_metronic/layout/core"
import { WithChildren } from "../../_metronic/helpers"

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import("../modules/profile/ProfilePage"))
  const WizardsPage = lazy(() => import("../modules/wizards/WizardsPage"))
  const AccountPage = lazy(() => import("../modules/accounts/AccountPage"))
  const WidgetsPage = lazy(() => import("../modules/widgets/WidgetsPage"))
  const ChatPage = lazy(() => import("../modules/apps/chat/ChatPage"))
  const UsersPage = lazy(
    () => import("../modules/apps/user-management/UsersPage")
  )

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route index element={<DashboardWrapper />} />

        {/* Lazy Modules */}
        <Route
          path="crafted/pages/profile/*"
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path="crafted/pages/wizards/*"
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path="crafted/widgets/*"
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path="crafted/account/*"
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path="apps/chat/*"
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path="apps/user-management/*"
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />

        {/* Page Not Found */}
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue("--bs-primary")
  TopBarProgress.config({
    barColors: {
      "0": baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return (
    <Suspense fallback={<TopBarProgress />}>
      <DisableSidebar>{children}</DisableSidebar>
    </Suspense>
  )
}

export { PrivateRoutes }
