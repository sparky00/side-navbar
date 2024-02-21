import React, { useState, useEffect, useRef } from "react";
import "remixicon/fonts/remixicon.css";

const SideNav = () => {
  const [searchSubMenuOpen, setSearchSubMenuOpen] = useState(false);
  const [homeSubMenuOpen, setHomeSubMenuOpen] = useState(false);
  const [salesSubMenuOpen, setSalesSubMenuOpen] = useState(false);
  const [productsSubMenuOpen, setProductsSubMenuOpen] = useState(false);
  const [discountsSubMenuOpen, setDiscountsSubMenuOpen] = useState(false);
  const [analyticsSubMenuOpen, setAnalyticsSubMenuOpen] = useState(false);
  const [refundsSubMenuOpen, setRefundsSubMenuOpen] = useState(false);
  const [shippingSubMenuOpen, setShippingSubMenuOpen] = useState(false);
  const [settingsSubMenuOpen, setSettingsSubMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const sideNavRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
        setSearchSubMenuOpen(false);
        setHomeSubMenuOpen(false);
        setSalesSubMenuOpen(false);
        setProductsSubMenuOpen(false);
        setDiscountsSubMenuOpen(false);
        setAnalyticsSubMenuOpen(false);
        setRefundsSubMenuOpen(false);
        setShippingSubMenuOpen(false);
        setSettingsSubMenuOpen(false);

        setActiveSubMenu(null);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Toggle functions for each submenu
  const toggleSearchSubMenu = () => {
    setSearchSubMenuOpen(!searchSubMenuOpen);
    setActiveSubMenu("search");
  };

  const toggleHomeSubMenu = () => {
    setHomeSubMenuOpen(!homeSubMenuOpen);
    setActiveSubMenu("home");
  };

  const toggleSalesSubMenu = () => {
    setSalesSubMenuOpen(!salesSubMenuOpen);
    setActiveSubMenu("sales");
  };

  const toggleProductsSubMenu = () => {
    setProductsSubMenuOpen(!productsSubMenuOpen);
    setActiveSubMenu("products");
  };

  const toggleDiscountsSubMenu = () => {
    setDiscountsSubMenuOpen(!discountsSubMenuOpen);
    setActiveSubMenu("discounts");
  };

  const toggleAnalyticsSubMenu = () => {
    setAnalyticsSubMenuOpen(!analyticsSubMenuOpen);
    setActiveSubMenu("analytics");
  };

  const toggleRefundsSubMenu = () => {
    setRefundsSubMenuOpen(!refundsSubMenuOpen);
    setActiveSubMenu("refunds");
  };

  const toggleShippingSubMenu = () => {
    setShippingSubMenuOpen(!shippingSubMenuOpen);
    setActiveSubMenu("shipping");
  };

  const toggleSettingsSubMenu = () => {
    setSettingsSubMenuOpen(!settingsSubMenuOpen);
    setActiveSubMenu("settings");
  };

  return (
    <>
      <div
        id="sideNav"
        className={activeSubMenu ? "active" : ""}
        ref={sideNavRef}
      >
        <div id="logo-1">
          <i className="ri-creative-commons-line"></i>
        </div>

        <div id="menuIcons-1">
          <div
            className={`menu-item  ${searchSubMenuOpen ? "active" : ""}`}
            onClick={toggleSearchSubMenu}
          >
            <i
              className={`ri-search-line ${searchSubMenuOpen ? "active" : ""}`}
            ></i>
            {activeSubMenu && <h3>Search</h3>}
          </div>

          {searchSubMenuOpen && (
            <div className="submenu">
              <div id="logo-2">
                <h3>Search</h3>
              </div>
              <input className="search-input" type="text" />
            </div>
          )}

          <br />

          <div
            className={`menu-item  ${homeSubMenuOpen ? "active" : ""}`}
            onClick={toggleHomeSubMenu}
          >
            <i
              className={`ri-home-3-line ${homeSubMenuOpen ? "active" : ""}`}
            ></i>
            {activeSubMenu && <h3>Dashboard</h3>}
          </div>

          {homeSubMenuOpen && (
            <div className="submenu">
              <div id="logo-2">
                <h3>Dashboard</h3>
              </div>
              <div id="menuIcons-2">
                <h3>Overview</h3>
                <h3>Statistics</h3>
                <h3>Reports</h3>
                <h3>Settings</h3>
                <h3>Profile</h3>
                <h3>Notifications</h3>
                <h3>Messages</h3>
                <h3>Logout</h3>
                <h3>Help</h3>
              </div>
            </div>
          )}
          <div
            className={`menu-item  ${salesSubMenuOpen ? "active" : ""}`}
            onClick={toggleSalesSubMenu}
          >
            <i
              className={`ri-ruler-fill ${salesSubMenuOpen ? "active" : ""}`}
            ></i>
            {activeSubMenu && <h3>Sales</h3>}
          </div>

          {salesSubMenuOpen && (
            <div className="submenu">
              <div id="logo-2">
                <h3>Sales</h3>
              </div>
              <div id="menuIcons-2">
                <h3>Revenue</h3>
                <h3>Orders</h3>
                <h3>Customers</h3>
                <h3>Products</h3>
                <h3>Discounts</h3>
                <h3>Analytics</h3>
                <h3>Refunds</h3>
                <h3>Shipping</h3>
                <h3>Settings</h3>
              </div>
            </div>
          )}
          <div
            className={`menu-item  ${productsSubMenuOpen ? "active" : ""}`}
            onClick={toggleProductsSubMenu}
          >
            <i
              className={`ri-box-3-line ${productsSubMenuOpen ? "active" : ""}`}
            ></i>
            {activeSubMenu && <h3>Products</h3>}
          </div>

          {productsSubMenuOpen && (
            <div className="submenu">
              <div id="logo-2">
                <h3>Products</h3>
              </div>
              <div id="menuIcons-2">
                <h3>Product 1</h3>
                <h3>Product 2</h3>
                <h3>Product 3</h3>
              </div>
            </div>
          )}
          <div
            className={`menu-item  ${discountsSubMenuOpen ? "active" : ""}`}
            onClick={toggleDiscountsSubMenu}
          >
            <i
              className={`ri-price-tag-3-line ${
                discountsSubMenuOpen ? "active" : ""
              }`}
            ></i>
            {activeSubMenu && <h3>Discounts</h3>}
          </div>

          {discountsSubMenuOpen && (
            <div className="submenu">
              <div id="logo-2">
                <h3>Discounts</h3>
              </div>
              <div id="menuIcons-2">
                <h3>Discount 1</h3>
                <h3>Discount 2</h3>
                <h3>Discount 3</h3>
              </div>
            </div>
          )}
          <div
            className={`menu-item  ${analyticsSubMenuOpen ? "active" : ""}`}
            onClick={toggleAnalyticsSubMenu}
          >
            <i
              className={`ri-pie-chart-2-line ${
                analyticsSubMenuOpen ? "active" : ""
              }`}
            ></i>
            {activeSubMenu && <h3>Analytics</h3>}
          </div>

          {analyticsSubMenuOpen && (
            <div className="submenu">
              <div id="logo-2">
                <h3>Analytics</h3>
              </div>
              <div id="menuIcons-2">
                <h3>Analytics 1</h3>
                <h3>Analytics 2</h3>
                <h3>Analytics 3</h3>
              </div>
            </div>
          )}
          <div
            className={`menu-item  ${refundsSubMenuOpen ? "active" : ""}`}
            onClick={toggleRefundsSubMenu}
          >
            <i
              className={`ri-refund-2-line ${
                refundsSubMenuOpen ? "active" : ""
              }`}
            ></i>
            {activeSubMenu && <h3>Refunds</h3>}
          </div>

          {refundsSubMenuOpen && (
            <div className="submenu">
              <div id="logo-2">
                <h3>Refunds</h3>
              </div>
              <div id="menuIcons-2">
                <h3>Refund 1</h3>
                <h3>Refund 2</h3>
                <h3>Refund 3</h3>
              </div>
            </div>
          )}
          <div
            className={`menu-item  ${shippingSubMenuOpen ? "active" : ""}`}
            onClick={toggleShippingSubMenu}
          >
            <i
              className={`ri-truck-line ${shippingSubMenuOpen ? "active" : ""}`}
            ></i>
            {activeSubMenu && <h3>Shipping</h3>}
          </div>

          {shippingSubMenuOpen && (
            <div className="submenu">
              <div id="logo-2">
                <h3>Shipping</h3>
              </div>
              <div id="menuIcons-2">
                <h3>Shipping-1</h3>
                <h3>Shipping-2</h3>
                <h3>Shipping3</h3>
              </div>
            </div>
          )}
          <div
            className={`menu-item  ${settingsSubMenuOpen ? "active" : ""}`}
            onClick={toggleSettingsSubMenu}
          >
            <i
              className={`ri-settings-3-line ${
                settingsSubMenuOpen ? "active" : ""
              }`}
            ></i>
            {activeSubMenu && <h3>Settings</h3>}
          </div>

          {settingsSubMenuOpen && (
            <div className="submenu">
              <div id="logo-2">
                <h3>Settings</h3>
              </div>
              <div id="menuIcons-2">
                <h3>Setting 1</h3>
                <h3>Setting 2</h3>
                <h3>Setting 3</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SideNav;
