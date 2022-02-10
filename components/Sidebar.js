import React, { useState } from 'react'
import clsx from 'clsx'
import { GoThreeBars, GoX } from 'react-icons/go'

const Sidebar = () => {
	const [openSidebar, setSidebar] = useState(false)

	const showSidebar = () => {
		setSidebar(!openSidebar)
	}

	return (
		<>
			<div className={clsx('sidebar', { is_open: openSidebar })}>
				<div className='sidebar-wrapper'>
					<div className='sidebar-icon'>
						{openSidebar ? (
							<GoX onClick={showSidebar} size={25} />
						) : (
							<GoThreeBars onClick={showSidebar} size={25} />
						)}
					</div>
					<ul className={clsx('sidebar-list', { is_visible: openSidebar })}>
						<li className='sidebar-item'>Search</li>
						<li className='sidebar-item'>
							<a href='' className='sidebar-link'>
								Home
							</a>
							<a href='' className='sidebar-link'>
								Categories
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Sidebar
