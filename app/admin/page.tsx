import { redirect } from 'next/navigation'

import { getAdminSession } from '@/lib/admin-auth'
import AdminDashboard from './components/AdminDashboard'

export default async function AdminPage() {
  const session = await getAdminSession()

  if (!session) {
    redirect('/login')
  }

  return <AdminDashboard username={session.username} />
}
