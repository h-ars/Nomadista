import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import React from 'react'
import { Link, redirect } from 'react-router'
import { loginWithGoogle } from '~/appwrite/auth'
import { account } from '~/appwrite/client'
import { loginAsDemo } from '~/appwrite/demoAuth'


export async function clientLoader() {
    try {
        const user = await account.get()

        if(user.$id) return redirect('/')
    } catch (error) {
        console.log('Error Fetching User', error)
    }
}


const SignIn = () => {
  const handleDemoLogin = async () => {
    const success = await loginAsDemo()
    if (success) {
      // Redirect to dashboard after successful login
      window.location.href = '/'
    }
  }

  return (
    <main className='auth'>
        <section className="size-full glassmorphism flex-center px-6">
            <div className="sign-in-card">
                <header className="header">
                    <Link to='/'>
                        <img src="/assets/icons/logo.svg" alt="logo" className='size-[30px]'/>
                    </Link>
                    <h1 className="p-28-bold text-dark-100">Nomadista</h1>
                </header>


                <article>
                    <h2 className="p-28-semibold text-dark-100 text-center">
                        Start Your Travel Journey
                    </h2>


                    <p className="p-18-regular text-center text-gray-100 !leading-7">
                        Sign in with Google to explore AI-generated itineraries, trending destinations, and much more
                    </p>
                </article>


                <ButtonComponent
                    type='button'
                    iconCss='e-search-icon' className='button-class !h-11 !w-full mt-4'
                    onClick={ loginWithGoogle }
                >
                    <img src="/assets/icons/google.svg" alt="googleIcon" className='size-5'/>
                    <span className="p-18-semibold text-white">Sign in with Google</span>
                </ButtonComponent>
                
                {/* Demo Login Button */}
                <ButtonComponent
                    type='button'
                    className='button-class !h-11 !w-full mt-3 !bg-gray-600'
                    onClick={ handleDemoLogin }
                >
                    <span className="p-18-semibold text-white">🔑 Demo Login (Admin)</span>
                </ButtonComponent>
                
                <p className="p-14-regular text-center text-gray-400 !leading-6 mt-2">
                    Demo Account: demo@nomadista.com
                </p>
            </div>
        </section>
    </main>
  )
}


export default SignIn