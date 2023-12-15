"use client";

import { useEffect } from "react";
import { useAccount } from "wagmi";

export default function WalletManager() {
	const { address } = useAccount();

	useEffect(() => {
		if (address) {
			console.log("** Wallet connected. Address: ", address);
			// fetchMe();
		} else {
			console.log("** Wallet disconnected.");
		}
	}, [address]);

	// const fetchMe = async () => {
	// 	const resp = await fetch(`${CONFIG.BACKEND_ADDRESS}/me`, {
	// 		headers: {
	// 			authorization: `Basic ${address}`,
	// 		},
	// 	});
	// 	const respData = await resp.json();
	// 	console.log("hey user:", respData.data);
	// };
}
