import { ConnectButton } from "@rainbow-me/rainbowkit"

function Navbar() {
  return (
    <div className="flex justify-between p-6 bg-white">
        <p className="text-2xl font-semibold">CDP Vault Liquidation Calculator</p>
        <ConnectButton />
    </div>
  )
}

export default Navbar