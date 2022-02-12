import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go'

const Searchbar = () => {
	const [searchValue, setSearchValue] = useState('')

	const handleChange = (event) => {
		setSearchValue(event.target.value)
		console.log(searchValue)
	}

	const handleSubmit = (event) => {
		alert('Le nom a été soumis : ' + searchValue)
		event.preventDefault()
	}

	return (
		<form action='' className='sidebar-item--searchbar' onSubmit={handleSubmit}>
			<div className='input-box'>
				<input
					id='search'
					name='search'
					type='text'
					value={searchValue}
					placeholder='search'
					onChange={handleChange}
					className='input'
					required
				/>
			</div>
			<button className='sidebar-item--searchbar__btn' type='submit'>
				<GoSearch size={20} color='#fff' />
			</button>
		</form>
	)
}

export default Searchbar
