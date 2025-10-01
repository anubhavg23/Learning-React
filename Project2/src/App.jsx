import './App.css'

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-10">
        Learning Tailwind And Props
      </h1>

      <div className="mx-auto w-full max-w-xs">
        <div className="rounded-xl overflow-hidden bg-black text-white border border-gray-700 shadow">
          <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="Bored Ape"
            className="w-full h-56 object-cover"
          />

          <div className="p-4">
            <div className="flex justify-between">
              <h2 className="font-bold">Bored ape nft accidental</h2>
              <span className="text-gray-300">Price</span>
            </div>
            <div className="flex justify-between">
              <p>#345</p>
              <p>0.01 ETH</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
