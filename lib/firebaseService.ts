import { db } from './firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { IExpense } from '@/types/IExpense'

export const addExpense = async (expense: IExpense, userId: string) => {
  const docRef = await addDoc(collection(db, 'expenses'), {
    ...expense,
    value: Number(expense.value),
    createdAt: serverTimestamp(),
    userId
  })

  return docRef.id
}