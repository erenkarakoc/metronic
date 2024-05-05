import { Link } from "react-router-dom"
import { useAuth } from "../../../../app/modules/auth"
import { toAbsoluteUrl } from "../../../helpers"
import { Languages } from "../header-menus/Languages"

const UserMenu = () => {
  const { currentUser, logout } = useAuth()
  return (
    <div
      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
      data-kt-menu="true"
    >
      {/* begin::Menu item */}
      <div className="menu-item px-3">
        <div className="menu-content d-flex align-items-center px-3">
          {/* begin::Avatar */}
          <div className="symbol symbol-50px me-5">
            <img
              src={
                currentUser?.photoURL
                  ? currentUser?.photoURL
                  : toAbsoluteUrl("media/svg/avatars/blank.svg")
              }
              alt="avatar"
            />
          </div>
          {/* end::Avatar */}

          {/* begin::Username */}
          <div className="d-flex flex-column">
            <div className="fw-bolder d-flex align-items-center fs-5">
              {currentUser?.first_name} {currentUser?.last_name}
            </div>
            <a href="#" className="fw-bold text-muted text-hover-primary fs-7">
              {currentUser?.email}
            </a>
          </div>
          {/* end::Username */}
        </div>
      </div>
      {/* end::Menu item */}

      {/* begin::Menu separator */}
      <div className="separator my-2"></div>
      {/* end::Menu separator */}

      {/* begin::Menu item */}
      <div className="menu-item px-5">
        <Link to={"crafted/account/overview"} className="menu-link px-5">
          Profilim
        </Link>
      </div>
      {/* end::Menu item */}

      {/* begin::Menu item */}
      <div className="menu-item px-5">
        <a href="#" className="menu-link px-5">
          <span className="menu-text">Projelerim</span>
          <span className="menu-badge">
            <span className="badge badge-light-danger badge-circle fw-bolder fs-7">
              3
            </span>
          </span>
        </a>
      </div>
      {/* end::Menu item */}
      {/* begin::Menu item */}
      <div
        className="menu-item px-5"
        data-kt-menu-trigger="hover"
        data-kt-menu-placement="right-end"
      >
        <a href="#" className="menu-link px-5">
          <span className="menu-title">İçerikli Menü</span>
          <span className="menu-arrow"></span>
        </a>

        {/* begin::Menu sub */}
        <div className="menu-sub menu-sub-dropdown w-175px py-4">
          {/* begin::Menu item */}
          <div className="menu-item px-3">
            <a href="#" className="menu-link px-5">
              İçerik
            </a>
          </div>
          {/* end::Menu item */}

          {/* begin::Menu separator */}
          <div className="separator my-2"></div>
          {/* end::Menu separator */}

          {/* begin::Menu item */}
          <div className="menu-item px-3">
            <div className="menu-content px-3">
              <label className="form-check form-switch form-check-custom form-check-solid">
                <input
                  className="form-check-input w-30px h-20px"
                  type="checkbox"
                  value="1"
                  checked={true}
                  name="notifications"
                  onChange={() => {}}
                />
                <span className="form-check-label text-muted fs-7">
                  Bildirimler
                </span>
              </label>
            </div>
          </div>
          {/* end::Menu item */}
        </div>
        {/* end::Menu sub */}
      </div>
      {/* end::Menu item */}

      {/* begin::Menu separator */}
      <div className="separator my-2"> </div>
      {/* end::Menu separator */}

      <Languages languageMenuPlacement="right-end" />

      {/* begin::Menu item */}
      <div className="menu-item px-5 my-1">
        <Link to="crafted/account/settings" className="menu-link px-5">
          Hesap Ayarları
        </Link>
      </div>
      {/* end::Menu item */}

      {/* begin::Menu item */}
      <div className="menu-item px-5">
        <a onClick={logout} className="menu-link px-5">
          Çıkış Yap
        </a>
      </div>
    </div>
  )
}

export { UserMenu }
