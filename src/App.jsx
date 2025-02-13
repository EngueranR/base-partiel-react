import './App.css'
import DataTable from './Component/DataTable/DataTable.jsx';

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
        <DataTable columns={columns} fetchData={() => { return data }} />
    </div>
  );
};

export default App;