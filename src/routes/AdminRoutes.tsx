import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import UsersList from '../pages/User/UsersList'

const AdminRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/users" exact component={UsersList} />
    </Switch>
  )
}

export default AdminRoutes
