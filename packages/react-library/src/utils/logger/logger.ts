// modified from https://github.com/alexreardon/tiny-warning
// MIT License Copyright (c) 2019 Alexander Reardon (https://github.com/alexreardon/tiny-warning/blob/master/LICENSE)
//

const log = (condition: any, level: number, ...data: any[]): void => {
	const global = window || globalThis;
	if (global && global.__enablelog__) {
		// condition passed: do not log
		if (!!condition) {
			return;
		}

		data = data || [""];

		// check console for IE9 support which provides console
		// only with open devtools
		if (typeof console !== "undefined") {
			if (level === 0) {
				console.log(data);
			} else if (level === 1) {
				console.warn(data);
			} else {
				console.error(data);
			}
		}

		// Throwing an error and catching it immediately
		// to improve debugging
		// A consumer can use 'pause on caught exceptions'
		// https://github.com/facebook/react/issues/4216
		if (level > 0) {
			try {
				throw Error((data && data[0]) || `log level ${level}`);
			} catch (x) {}
		}
	}
};

export const loginfo = (...data: any[]): void => log(true, 0, data);
export const logwarn = (conditon: unknown, ...data: any[]): void => log(conditon, 1, data);
export const logerr = (conditon: unknown, ...data: any[]): void => log(conditon, 2, data);

export const enablelog = (value: boolean): void => {
	const global = window || globalThis;
	if (global) {
		global.__enablelog__ = value;
	}
};

if (process.env.NODE_ENV !== "production") {
	console.log("THIS IS A TEST");
	enablelog(true);
}
