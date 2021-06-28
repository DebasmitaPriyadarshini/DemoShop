import React from 'react'

const Menu = () => {
    return (
        <>
            
<div style={{ paddingTop: "45px" }}>
<nav
  className="NavigationBar-subcategoryList-1nX"
  style={{
    padding: "10px",
    border: "1px solid #eaeaea",
    boxShadow: "0 2px 4px rgb(25 25 25 / 15%)",
    paddingLeft: "79px",
    overflow: "auto",
  }}
>
  <ul style={{ display: "contents" }}>
    <li>
      <a className="router-link-exact-active router-link-active NavigationBar-subcategoryLink-3Ua">
        <div className="SubCategory-root-mwE SubCategory-active-Sxz NavigationBar-subcategory-2m5">
          <select
            className="SubCategory-root-mwE SubCategory-active-Sxz NavigationBar-subcategory-2m5"
            className="SubCategory-label-30F"
            value={filterdLocation}
            onChange={(e) => {
              const selectedLocation = e.target.value;
              setFilterdLocation(selectedLocation);
            }}
          >
            <option
              className="router-link-exact-active router-link-active NavigationBar-subcategoryLink-3Ua"
              value=""
            >
              location
            </option>
            {location.map((value) => (
              <option key={value._id} value={value._id}>
                {value.name}
              </option>
            ))}
          </select>
        </div>
      </a>
    </li>
    <li>
      <a className="router-link-exact-active router-link-active NavigationBar-subcategoryLink-3Ua">
        <div className="SubCategory-root-mwE SubCategory-active-Sxz NavigationBar-subcategory-2m5">
          <select
            className="SubCategory-label-30F"
            value={filterdCategory}
            onChange={(e) => {
              const selectedCategory = e.target.value;
              setFilterdCategory(selectedCategory);
            }}
          >
            <option value="">Category</option>
            {categoriesList.map((value) => (
              <option key={value._id} value={value._id}>
                {value.name}
              </option>
            ))}
          </select>
        </div>
      </a>
    </li>
    <li>
      <div
        tabIndex="0"
        className="SearchTypeahead-searchContainer-175 SearchTypeahead-isTypeaheadEnabled-3i3"
      >
        <div className="SearchTypeahead-searchInputWrap-3Hg">
          <div className="SearchTypeahead-searchIcon-1ld">
            <svg viewBox="0 0 12 12" class="SearchTypeahead-icon-20K">
              <path d="M11.407,10.421,8.818,7.832a4.276,4.276,0,1,0-.985.985l2.589,2.589a.7.7,0,0,0,.985-.985ZM2.355,5.352a3,3,0,1,1,3,3,3,3,0,0,1-3-3Z"></path>
            </svg>
          </div>
              <input
                type="search"
                name="search"
                autocomplete="off"
                placeholder="Search…"
                aria-label="Search "
                className="SearchTypeahead-searchInput-1qk e2e-SearchInput-input"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
                style={{outline:'none'}}
              />
           
        </div>
        <button
          tabIndex="-1"
          className="Btn-button-BGn Btn-ghost-2Wn Btn-small-2_o SearchTypeahead-mobileCloseButton-OkE"
        >
          <div className="Btn-labelWrapper-1jSE">
            <div className="Btn-label-1Zf e2e-Btn-label">Cancel</div>
          </div>
        </button>
      </div>
    </li>
  </ul>
</nav>


</div>

        </>
    )
}

export default Menu



