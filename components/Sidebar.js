import React, { useState } from 'react'
import clsx from 'clsx'
import { GoThreeBars, GoX } from 'react-icons/go'
import { sidebarData } from 'utils/sidebarData'
import Link from 'next/link'

import Searchbar from '@components/Searchbar'

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
						<li className='sidebar-item'>
							<Searchbar />
						</li>
						<li className='sidebar-item sidebar-item--link-page'>
							{sidebarData.map((data, index) => (
								<Link href={data.path} key={index}>
									<a className='sidebar-item__link'>
										<p>{data.title}</p>
										{data.icon}
									</a>
								</Link>
							))}
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Sidebar
