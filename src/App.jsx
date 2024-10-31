import React from "react"
import { Modal } from "./components/modal/modal"
import useToggleTheme from "./hooks/useTheme/useTheme"
import { Button } from "./components/button/button"
function App() {
  const [state, setState] = React.useState(false)
  const [theme, setTheme] = useToggleTheme()
  return (
    <>
      <div className="container flex flex-col">
        <Modal show={state} onClose={() => setState(false)}>
          <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, doloremque nam nesciunt pariatur tempore eum reiciendis repudiandae blanditiis suscipit fugit animi hic, nihil saepe dolorum. Inventore cumque rem saepe animi.</p>
        </Modal>
        <button onClick={() => setState(true)}>show</button>
        <button className="text-textColor" onClick={() => setTheme(theme )}>{theme === "dark" ? "light" : "dark"}</button> 
        <Button className={"text-textColor"} size={"small"} variants={"primary"}>AAA</Button>
        <Button className={"text-textColor"} size={"large"} variants={"secondary"}>AAA</Button>
      </div>
    </>
  )
}

export default App
