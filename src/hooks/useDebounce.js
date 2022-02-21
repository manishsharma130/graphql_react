import React from "react";
/**
 * Custom Hooks
 */
export const useDebounce = (cb = () => {}, delay = 0, deps = []) => {
	const cbRefs = React.useRef(cb);
	const timeId = React.useRef(null);
	React.useEffect(() => {
		clearTimeout(timeId.current);
		timeId.current = setTimeout(() => {
			cbRefs.current?.(deps[0]);
			timeId.current = null;
		}, delay);
	}, deps);
};
