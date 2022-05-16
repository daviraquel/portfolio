import { GlobalStyle } from "./globalStyles";
import { Theme } from "./Theme";
import { RoutesComponent } from "./Routes/RoutesComponent";

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <RoutesComponent />
    </Theme>
  );
}

export default App;
