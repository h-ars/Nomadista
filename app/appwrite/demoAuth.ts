import { account } from './client'

export async function loginAsDemo() {
  try {
    const email = 'demo@nomadista.com'
    const password = 'Demo123!'
    
    // Create email/password session for demo user
    await account.createEmailPasswordSession(email, password)
    
    // Return success
    return true
  } catch (error) {
    console.error('Demo login failed:', error)
    return false
  }
}