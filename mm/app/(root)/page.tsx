import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Muhuan', lastName: 'Legend', email: 'muhuanlegend@gmail.com' }

  return (
    <section className='home ' >
        <div className='home-content' >
            <header className='home-header' >
                <HeaderBox 
                type='greeting'
                title='Welcome,'
                user={loggedIn?.firstName || 'Guest'}
                subtext='Access and manage your account and transactions efficiently.'
                />

                <TotalBalanceBox 
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={35656.70}

                />
            </header>
            {/* Recent transactions */}
        </div>
        <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 8956.02}, {currentBalance: 56.02}]}
        />
    </section>
  )
}

export default Home