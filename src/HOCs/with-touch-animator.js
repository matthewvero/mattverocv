/** @format */

import React, { useEffect, useState } from "react";

const withTouchAnimator = (WrappedComponent) => {
	return ({ children, fn, $ref, ...props }) => {
		const [active, setActive] = useState(false);
		const [hovering, setHovering] = useState(false);
		const [childrenWithProps, setChildrenWithProps] = useState();
		const handlePointerDown = (e) => {
			e.preventDefault();
			e.stopPropagation();
			setActive(true);
		};
		const handlePointerUp = (e) => {
			e.preventDefault();
			e.stopPropagation();
			setActive(false);
			fn && fn();
		};
		const handleMouseEnter = () => {
			setHovering(true);
		};
		const handleMouseLeave = () => {
			setHovering(false);
		};

		useEffect(() => {
			children &&
				setChildrenWithProps(
					React.cloneElement(children, {
						$active: active,
						$hovering: hovering,
					})
				);
		}, [active, children, hovering]);

		return (
			<WrappedComponent
				{...props}
				$active={active}
				$hovering={hovering}
				onPointerDown={(e) => handlePointerDown(e)}
				onPointerUp={(e) => handlePointerUp(e)}
				onMouseLeave={handleMouseLeave}
				onMouseEnter={handleMouseEnter}
			>
				{childrenWithProps ? childrenWithProps : children}
			</WrappedComponent>
		);
	};
};

export default withTouchAnimator;
