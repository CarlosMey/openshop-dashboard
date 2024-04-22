import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import TransactionChart from '../components/TransactionChart'
import RecentOrders from '../components/RecentOrders'
import BuyerProfileChart from '../components/BuyerProfileChart'
// import PopularProducts from '../components/PopularProducts'
import {NextUIProvider} from "@nextui-org/react";


export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<TransactionChart />
				<BuyerProfileChart />
			</div>
			<div className="flex flex-row gap-4 w-full">
			<NextUIProvider>
				<RecentOrders />
			</NextUIProvider>
				{/* <PopularProducts /> */}
			</div>
		</div>
	)
}