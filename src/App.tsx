import React, { useEffect } from 'react'
import AdminMasterPage from './components/MasterPages/AdminMasterPage/index'
import AdminRoutes from './routes/AdminRoutes'
import AuthApi from './services/api/AuthApi'

const App: React.FC = () => {
  useEffect(() => {
    AuthApi.bootstrap()
  }, [])

  return (
    <AdminMasterPage>
      <AdminRoutes />
    </AdminMasterPage>
  )
}

export default App
