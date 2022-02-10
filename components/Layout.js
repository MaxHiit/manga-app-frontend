import Sidebar from '@components/Sidebar'

const Layout = ({ children }) => {
	return (
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
	)
}

export default Layout
