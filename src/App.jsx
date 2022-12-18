import { Container } from "./components/styles/Container.styled"
import Hero from "./components/Hero"
import { GlobalStyles } from "./components/styles/GlobalStyled"

function App() {

  return (
      <>
        <GlobalStyles />
        <Container>
          <Hero />
        {/* {content.map((item, index) => (
          <Hero key={index} item={item} />
        ))} */}
        </Container>
      </>
  )
}

export default App
