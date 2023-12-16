"use client";

import { useEffect } from "react";
import { useAccount } from "wagmi";

export default function WalletManager() {
	const { address } = useAccount();

	useEffect(() => {
		if (address) {
			console.log("** Wallet connected. Address: ", address);
		} else {
			console.log("** Wallet disconnected.");
		}
	}, [address]);
}
