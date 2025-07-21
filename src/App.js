import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appstore";
function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <Body />
      </Provider>
      {/* <h1 className='text-3xl text-green-800'> Hi This is a complete new Application</h1> */}
    </div>
  );
}

export default App;
