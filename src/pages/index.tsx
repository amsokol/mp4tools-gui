import { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'

function App() {
	const [state, setData] = useState(false)

	return (
		<div>
			<h1>Welcome to Tauri!</h1>

			<Dialog visible={state} onHide={() => setData(false)}>
				some text
			</Dialog>

			<Button label="Show" className="p-button-sm" onClick={() => setData(true)} />
		</div>
	)
}

export default App
