import './App.css'
import DataTable from './Component/DataTable/DataTable.jsx';
import React, { Suspense } from 'react';
import Loading from './Component/Loading/Loading.jsx';

const columns = [
  'firstname', 'name' 
];

const data = [
  { firstname: 'Thomas', name: 'Ribero' },
  { firstname: 'Engueran', name: 'Raout' },
  { firstname: 'Alexis', name: 'Bonal' }

];

const App = () => {
  return (
    <div className="app">
      <Suspense fallback={<Loading message={"Loading..."} />}>
        <DataTable columns={columns} fetchData={() => { return data }} />
      </Suspense>
    </div>
  );
};

export default App;