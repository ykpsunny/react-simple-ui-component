import React, { useRef, useEffect, useMemo } from "react";

import propTypes from "prop-types";

function transfromDeg(deg) {
	return (deg / 180) * Math.PI;
}

function getPosition(radius, deg) {
	let x = 0;
	let y = 0;
	if (deg >= 0 && deg <= 90) {
		// 0~90度
		x = radius * (1 + Math.cos(transfromDeg(deg)));
		y = radius * (1 + Math.sin(transfromDeg(deg)));
	} else if (deg > 90 && deg <= 180) {
		// 90~180度
		x = radius * (1 - Math.cos(transfromDeg(180 - deg)));
		y = radius * (1 + Math.sin(transfromDeg(180 - deg)));
	} else if (deg > 180 && deg <= 270) {
		// 180~270度
		x = radius * (1 - Math.sin(transfromDeg(270 - deg)));
		y = radius * (1 - Math.cos(transfromDeg(270 - deg)));
	} else {
		// 270~360度
		x = radius * (1 + Math.cos(transfromDeg(360 - deg)));
		y = radius * (1 - Math.sin(transfromDeg(360 - deg)));
	}
	return { x, y };
}

function Progress({ circleConfig, pointConfig, textConfig, arcConfig }) {
	const myCanvas = useRef();

	const canvasRadius = useMemo(() => {
		return circleConfig.radius + pointConfig.radius;
	}, [circleConfig.radius, pointConfig.radius]);

	const size = 2 * canvasRadius;

	const endDeg = useMemo(() => {
		let { percentage } = arcConfig,
			number = Number(percentage.slice(0, percentage.length - 1));
		return (360 / 100) * number;
	}, [arcConfig.percentage]);

	console.log(endDeg);

	function init(canvas) {
		let ctx = canvas.getContext("2d");
		ctx.strokeStyle = circleConfig.lineColor;
		ctx.lineWidth = circleConfig.lineWidth;
		ctx.beginPath();
		ctx.arc(
			canvasRadius,
			canvasRadius,
			circleConfig.radius,
			0,
			transfromDeg(360)
		);
		ctx.stroke();
		initText(ctx);
		initPoint(ctx);
		dragArc(ctx);
	}

	function initText(ctx) {
		let { showText, label, color, font, textAlign, verticalAlign } = textConfig;
		if (!showText) return;
		ctx.font = font;
		ctx.fillStyle = color;
		ctx.textAlign = textAlign;
		ctx.textBaseline = verticalAlign;
		ctx.fillText(label, canvasRadius, canvasRadius);
	}

	function initPoint(ctx) {
		let { radius, fillColor } = pointConfig;
		let { x, y } = getPosition(circleConfig.radius, endDeg);
		ctx.fillStyle = fillColor;
		ctx.beginPath();
		ctx.arc(x + radius, y + radius, radius, 0, transfromDeg(360));
		ctx.fill();
	}

	function dragArc(ctx) {
		let { color, lineWidth, startDeg, isClockwise } = arcConfig;
		ctx.strokeStyle = color;
		ctx.lineWidth = lineWidth;
		ctx.beginPath();
		ctx.arc(
			canvasRadius,
			canvasRadius,
			circleConfig.radius,
			transfromDeg(startDeg),
			transfromDeg(endDeg),
			!isClockwise
		);
		ctx.stroke();
	}

	useEffect(() => {
		if (myCanvas.current) {
			requestAnimationFrame(() => {
				init(myCanvas.current);
			});
		}
	}, []);

	return (
		<canvas width={size} height={size} ref={myCanvas}>
			你的浏览器不支持 canvas ! ! !
		</canvas>
	);
}

Progress.defaultProps = {
	circleConfig: {
		radius: 40,
		lineWidth: 2,
		lineColor: "#000"
	},
	pointConfig: {
		radius: 6,
		fillColor: "#f00"
	},
	textConfig: {
		showText: true,
		label: "30%",
		color: "#000",
		font: "14px arial",
		textAlign: "center",
		verticalAlign: "middle",
		format: value => value
	},
	arcConfig: {
		startDeg: 270, // 起始角度
		color: "#f00", // 如果使用渐变色则传递一个数组
		// color: [
		// 	{
		// 		percent: 0,
		// 		color: "#f93"
		// 	},
		// 	{
		// 		percent: 1,
		// 		color: "#ff4949"
		// 	}
		// ],
		lineWidth: 4,
		percentage: "30%",
		animated: true,
		isClockwise: true
	}
};

Progress.propTypes = {
	circleConfig: propTypes.object,
	pointConfig: propTypes.object,
	textConfig: propTypes.object,
	arcConfig: propTypes.object
};

export default Progress;
