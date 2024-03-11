import React, { useState, useEffect } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";

import FoodItem from "./FoodItem";

// we need to reset the state after the process compelted
const Home = ({ onConfirm, onReset }) => {
	const initialFoodItems = [
		// Add more initial food items as needed but in our case camera will detect this with sensors and everything
		{
			name: "Food Item 1",
			nutrition: { calories: 150, protein: 10, carbs: 20, fat: 5, salt: 2 }
		}
	];
	const [foodItems, setFoodItems] = useState(initialFoodItems);
	const [orderConfirmed, setOrderConfirmed] = useState(false);
	const [paymentLoading, setPaymentLoading] = useState(false);
	const [paymentConfirmed, setPaymentConfirmed] = useState(false);
	const [collapsed, setCollapsed] = useState(true);
	const toggleNavbar = () => setCollapsed(!collapsed);

	const handleConfirmOrder = (updatedNutrition, updatedWeight, index) => {
		// Update the foodItems state with the updated nutrition and weight need to develop later as our requirement
		setFoodItems((prevItems) => {
			const updatedItems = [...prevItems];
			updatedItems[index] = {
				...updatedItems[index],
				nutrition: updatedNutrition,
				weight: updatedWeight
			};
			return updatedItems;
		});
		console.log(
			"Order confirmed with updated nutrition and weight:",
			updatedNutrition,
			updatedWeight
		);
		setOrderConfirmed(true);
		setTimeout(() => setPaymentLoading(true), 2000);
	};

	useEffect(() => {
		if (paymentLoading) {
			setTimeout(() => {
				setPaymentLoading(false);
				setPaymentConfirmed(true);
			}, 4000);
		}
		if (paymentConfirmed) {
			setTimeout(() => {
				setPaymentConfirmed(false);
				setOrderConfirmed();
			}, 4000);
		}
	}, [paymentLoading, paymentConfirmed]);

	return (
		<div Container style={{ textAlign: "center" }}>
			<Navbar color="info" light expand="lg">
				<NavbarBrand href="/" className="me-auto">
					Nutrition Tracking
				</NavbarBrand>
				<NavbarToggler onClick={toggleNavbar} className="me-2" />
				<Collapse isOpen={!collapsed} navbar>
					<Nav navbar>
						<NavItem>
							<NavLink href="/components/">Home</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Languages
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem style={{ margin: "5px 0" }}>English</DropdownItem>
								<DropdownItem style={{ margin: "5px 0" }}>Finnish</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Collapse>
			</Navbar>

			{!orderConfirmed &&
				foodItems.map((item, index) => (
					<FoodItem
						key={index}
						{...item}
						onConfirm={(nutrition, weight) =>
							handleConfirmOrder(nutrition, weight)
						}
					/>
				))}
			{orderConfirmed && !paymentConfirmed && (
				<p>Your order is confirmed. Scan your card to pay, please.</p>
			)}
			{paymentLoading && <p>...Processing the payment</p>}
			{paymentConfirmed && <p>Payment done.</p>}
		</div>
	);
};
export default Home;