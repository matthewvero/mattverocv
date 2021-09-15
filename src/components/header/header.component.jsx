/** @format */

import React, { useEffect, useState } from "react";
import {
	HeaderContainer,
	HeaderLink,
	HeaderNav,
	MobileContactButton,
} from "./header.styles";
import { MAVLOGO } from "./header.styles";
import { withRouter } from "react-router-dom";
import { Text } from "../text.styles";
import withTouchAnimator from "../../HOCs/with-touch-animator";
import MainMenu from "../main-menu/main-menu.component";
import { useDebounce } from "../../ui-custom-hooks.js";
import ContactDetails from "../contact/contact-details.component";
import { useDispatch, useSelector } from "react-redux";
import { toggleContactDetails } from "../../redux";
import { CSSTransition } from "react-transition-group";
const Header = ({ history, location, $appRef }) => {
	const [popped, setPopped] = useState(false);
	const [transition, setTransition] = useState(false);
	const contactDetailsVisible = useSelector(
		(state) => state.contactDetails.visible
	);
	const dispatch = useDispatch();
	const handleScroll = (e) => {
		
		if (e.target.scrollTop > 0 && popped === false) {
			setTransition(true);
		setTimeout(() => setTransition(false), 200);
			setPopped(true);
		} else if (e.target.scrollTop === 0) {
			setPopped(false);
		}
	};
	const debounceHandleScroll = useDebounce(handleScroll, 400, true);
	useEffect(() => {
		const appRef = $appRef.current
		
		appRef.addEventListener("scroll", debounceHandleScroll);
		return () => {
			appRef.removeEventListener("scroll", debounceHandleScroll);
		};
	}, [$appRef, debounceHandleScroll, popped]);
	const HeaderLinkTouch = withTouchAnimator(HeaderLink);
	const MAVLOGOTouch = withTouchAnimator(MAVLOGO);
	const MobileContactButtonTouch = withTouchAnimator(MobileContactButton);

	
	return (
		<HeaderContainer $popped={popped} $transition={transition} $contactVisible={contactDetailsVisible}>
			<HeaderNav>
			<HeaderLinkTouch
					fn={() => history.push("/projects")}
					$open={location.pathname === "/projects"}
					
				>
					<Text >Projects</Text>
			</HeaderLinkTouch>
				<HeaderLinkTouch
			fn={() => history.push("/about")}
			$open={location.pathname === "/about"}
		>
			<Text >About Me</Text>
		</HeaderLinkTouch>
			</HeaderNav>

			<HeaderLinkTouch
						fn={() => history.push("/")}
						$open={location.pathname === "/"}
					>
						<Text >Matt Vero</Text>
				</HeaderLinkTouch>

			<HeaderNav>
				<HeaderLinkTouch
						fn={() => history.push("/education")}
						$open={location.pathname === "/education"}
					>
						<Text >Education</Text>
				</HeaderLinkTouch>
				<HeaderLinkTouch
						fn={() => dispatch(toggleContactDetails())}
						$open={contactDetailsVisible}
					>
						<Text >Contact</Text>
				</HeaderLinkTouch>
			</HeaderNav>

			<div
				style={{
					height: "100%",
					width: "150px",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<MobileContactButtonTouch
					fn={() => dispatch(toggleContactDetails())}
				>
					<Text>Contact</Text>
				</MobileContactButtonTouch>

				<MainMenu />
			</div>

			<CSSTransition
				in={contactDetailsVisible}
				timeout={200}
				unmountOnExit
				classNames="contactDetails"
			>
				<ContactDetails />
			</CSSTransition>
		</HeaderContainer>
	);
};

export default withRouter(Header);
