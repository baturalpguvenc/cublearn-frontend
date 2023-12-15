export const cn = (...args) => {
	return args.filter((arg) => typeof arg === "string").join(" ");
};

export const formatPrice = (price) => `${price} ETH`;
