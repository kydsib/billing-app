import React from 'react'

import CompanyDetails from '../components/CompanyDetails/CompanyDetails'

const LandingPage = () => {
	return (
		<div>
			<CompanyDetails
				companyName="Candies Trade LTD"
				companyAddress="Isgalvota 22, LT0342, Vilnius"
				companyCountry="Lithuania"
				companyCode="3023123121"
				companyVatNumber="LT0012121212112"
				companyTelephone="370020202020"
			/>
		</div>
	)
}

export default LandingPage
