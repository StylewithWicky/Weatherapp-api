import React from 'react';
import Search from './Search';
import Details from './Details';
import '../styles/Sidebar.css';

function Sidebar({ search, setSearch, onSearch, weather }) {
  return (
    <div className='sidebar'>
      <Search search={search} setSearch={setSearch} onSearch={onSearch} />
      <Details weather={weather} />
    </div>
  );
}

export default Sidebar;
