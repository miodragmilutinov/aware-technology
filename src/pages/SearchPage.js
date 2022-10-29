import React from "react";

import HeaderContentFooterLayout from "../components/layouts/HeaderContentFooterLayout";
import Search from "../components/Search";

const SearchPage = () => {
  return (
    <div>
      <HeaderContentFooterLayout>
        <Search />
      </HeaderContentFooterLayout>
    </div>
  );
};

export default SearchPage;
