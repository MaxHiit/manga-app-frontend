import Head from 'next/head'
import Sidebar from '@components/Sidebar'

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<link
					href='https://api.fontshare.com/css?f[]=bevellier@400,500,600,700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<div className='grid-layout'>
				<Sidebar />
				<header className='container'>
					<nav className='navbar'>
						<ul className='navbar-list'>
							<li className='navbar-item navbar-item--logo '>MANGA-APP</li>
							<li className='navbar-item'>Log in / Sign Up</li>
						</ul>
					</nav>
				</header>

				<main className='main container'>{children}</main>
			</div>
		</>
	)
}

export default Layout
