import React from 'react'

import CompanyDetails from '../../components/CompanyDetails/CompanyDetails'
import InvoiceDetails from '../../components/InvoiceDetails/InvoiceDetails'
import ShipmentDetails from '../../components/ShippmentDetails/ShipmentDetails'

const LandingPage = () => {
	return (
		<div>
			<CompanyDetails />
			<InvoiceDetails />
			<ShipmentDetails />
		</div>
	)
}

export default LandingPage
