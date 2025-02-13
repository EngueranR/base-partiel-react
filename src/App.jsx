import './App.css'
import DataTable from './Component/DataTable/DataTable.jsx';
import React, { Suspense } from 'react';
import Loading from './Component/Loading/Loading.jsx';
import { postUser } from './services/fakeApi500User.jsx';

const App = () => {

  const columns = ['email', 'firstName', 'id', 'jobTitle', 'lastName'];

  return (
    <div className="app">
      <Suspense fallback={<Loading message={"Loading..."} />}>
        <DataTable columns={columns} fetchData={() => postUser(1)} />
      </Suspense>
    </div>
  );
};

export default App;