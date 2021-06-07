import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import UserGoogle from '../pages/User/UserGoogle'
import UsersList from '../pages/User/UsersList'
import FilesUploadsList from '../pages/FilesUploads/FilesUploadsList'

const AdminRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/users" exact component={UsersList} />
      <Route path="/users/google/:id" exact component={UserGoogle} />
      <Route path="/uploads" exact component={FilesUploadsList} />
    </Switch>
  )
}

export default AdminRoutes
