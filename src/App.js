
import './App.css';
import Buttons from './Components/Buttons';

function App() {
  return (
    <div className="App">
      <div>
        <Buttons size="large">Button</Buttons>
        <Buttons size="medium">Button</Buttons>
        <Buttons size="small">Button</Buttons>
      </div>
      <div>
        <Buttons size="large" color="pink">Button</Buttons>
        <Buttons size="medium" color="pink">Button</Buttons>
        <Buttons size="small" color="pink">Button</Buttons>
      </div>
      <div>
        <Buttons size="large" color="black">Button</Buttons>
        <Buttons size="medium" color="black">Button</Buttons>
        <Buttons size="small" color="black">Button</Buttons>
      </div>
      {/* <div>
        <Buttons size="large" font="fontBlue">Button</Buttons>
        <Buttons size="medium" font="fontPink">Button</Buttons>
        <Buttons size="small" font="fontBlack">Button</Buttons>
      </div> */}
      <div>
        <Buttons size="large" outline>Button</Buttons>
        <Buttons size="medium" color="pink" outline>Button</Buttons>
        <Buttons size="small" color="black" outline>Button</Buttons>
      </div>
      {/* <div id='long'>
        <Buttons size="large" width="long">Button</Buttons>
        <Buttons size="large" width="long" color="black" >Button</Buttons>
        <Buttons size="large" width="long" color="pink">Button</Buttons>
      </div> */}
      <div id='long'>
        <Buttons size="large" fullWidth>Button</Buttons>
        <Buttons size="large" fullWidth color="black">Button</Buttons>
        <Buttons size="large" fullWidth color="pink">Button</Buttons>
      </div>
    </div>
  );
}

export default App;
