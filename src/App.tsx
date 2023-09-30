import "./assets/styles/style.css";
import {
  Alert,
  Header,
  Input,
  SearchBook,
  CompletedBook,
  UncompletedBook
} from "./components";

function App() {

  return (
    <>
      <Header />
      <main>
        <Input />
        <SearchBook />
        <Alert />
        <UncompletedBook />
        <CompletedBook />
      </main>
    </>
  )
}

export default App
