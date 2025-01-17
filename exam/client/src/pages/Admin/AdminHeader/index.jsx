import React from 'react'
import styles from "./index.module.scss"

import { NavLink } from "react-router";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { PiBasketLight } from "react-icons/pi";
const AdminHeader = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.header}>
        <div className={styles.firstDiv}>
        <span className={styles.colo}>COLO</span>
        <span className={styles.shop}>SHOP</span>
      </div>
      <div className={styles.secondDiv}>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/admin"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/addproducts"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Add Product
              </NavLink>
            </li>
           
          </ul>
        </nav>
      </div>
      <div className={styles.thirdDiv}>
        <button>
          <FaMagnifyingGlass />
        </button>
        <button>
          <CgProfile />
        </button>
        <button>
          <PiBasketLight />
        </button>
      </div>
        </div>
      </div>
    </header>
  )
}

export default AdminHeader