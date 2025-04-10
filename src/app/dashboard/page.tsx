'use client'
import AddExpenseModal from '@/components/AddExpenseModal'
import React from 'react'

const Dashboard = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white">
      <AddExpenseModal />
    </div>
  )
}

export default Dashboard
