// import { useEffect, useState } from "react"
import { EnableSidebar, PageTitle } from "../../../_metronic/layout/core"
import {
  ListsWidget4,
  ListsWidget5,
  MixedWidget13,
  MixedWidget15,
} from "../../../_metronic/partials/widgets"

import { SalesProgress } from "./components/SalesProgress"
import { DashboardUsersTable } from "./components/DashboardUsersTable"

import { useAuth } from "../../modules/auth/core/Auth"

const DashboardPage = () => (
  <>
    <div className="row gy-5 g-xl-10">
      {/*begin::Col*/}
      <div className="col-xl-4">
        <MixedWidget13
          className="card-xl-stretch mb-xl-10"
          backGroundColor="#F7D9E3"
          chartHeight="100px"
        />
      </div>
      {/*end::Col*/}

      {/*begin::Col*/}
      <div className="col-xl-4">
        <SalesProgress
          className="card-xl-stretch mb-xl-10"
          chartColor="#6f1a1af"
          chartHeight="100px"
        />
      </div>
      {/*end::Col*/}

      {/*begin::Col*/}
      <div className="col-xl-4">
        <MixedWidget15
          className="card-xl-stretch mb-xl-10"
          backGroundColor="#CBD4F4"
        />
      </div>
      {/*end::Col*/}
    </div>
    {/*end::Row*/}

    <DashboardUsersTable className="mb-5 mb-xl-10" />

    {/*begin::Row*/}
    <div className="row gy-5 g-xl-10">
      {/*begin::Col*/}
      <div className="col-xxl-6">
        <ListsWidget5 className="card-xl-stretch mb-xl-10" />
      </div>
      {/*end::Col*/}

      {/*begin::Col*/}
      <div className="col-xxl-6">
        <ListsWidget4 className="card-xl-stretch mb-5 mb-xl-10" items={5} />
      </div>
      {/*end::Col*/}
    </div>
  </>
)

const DashboardWrapper = () => {
  const { currentUser } = useAuth()

  return (
    <EnableSidebar>
      <PageTitle description="" breadcrumbs={[]}>
        {currentUser && "Merhaba " + currentUser?.firstName}
      </PageTitle>
      <DashboardPage />
    </EnableSidebar>
  )
}

export { DashboardWrapper }
