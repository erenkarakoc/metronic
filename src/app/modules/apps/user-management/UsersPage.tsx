import { Route, Routes, Outlet, Navigate } from "react-router-dom"
import { PageLink, PageTitle } from "../../../../_metronic/layout/core"
import { UsersListWrapper } from "./users-list/UsersList"
import { AddUser } from "./add-user/AddUser"

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: "Kullanıcı Yönetimi",
    path: "kullanici-yonetimi/kullanicilar",
    isSeparator: false,
    isActive: false,
  },
]

const addUserBreadcrumbs: Array<PageLink> = [
  {
    title: "Kullanıcı Ekle",
    path: "kullanici-yonetimi/kullanici-ekle",
    isSeparator: false,
    isActive: false,
  },
]

const UsersPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path="kullanicilar"
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Kullanıcılar</PageTitle>
              <UsersListWrapper />
            </>
          }
        />
      </Route>
      <Route
        path="kullanici-ekle"
        element={
          <>
            <PageTitle breadcrumbs={addUserBreadcrumbs}>
              Kullanıcı Ekle
            </PageTitle>
            <AddUser />
          </>
        }
      />

      <Route
        index
        element={<Navigate to="/kullanici-yonetimi/kullanicilar" />}
      />
    </Routes>
  )
}

export default UsersPage
