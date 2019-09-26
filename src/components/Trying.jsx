class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        step: props.initialStep, 
        count: props.initialCount     
      };       
    }
    up() {
      this.setState({count: this.state.count + this.state.step});
    }
    down() {
      this.setState({count: this.state.count - this.state.step});
    }  
    updateSteps(e){
      this.setState({
        step: parseInt(e.target.value, 10) || 0
      });
    }  
    reset(e){
      this.setState({count: 0 });
    }    
    render() {
      const { count, step } = this.state
      return (
        <div className="counter">
          <Result result={count}/>
          <Reset  reset={(e) => this.reset(e)}/>        
          <Button onClick={() => this.up()}>Add {step}</Button>
          <Button onClick={() => this.down()}>Subtract {step}</Button>
          <InputBox value={step} updateSteps={(e) => this.updateSteps(e)}/>               
        </div>   
     );    
    }
  }
  Counter.propTypes = { initialCount: React.PropTypes.number };
  Counter.defaultProps = { initialStep: 5, initialCount: 0 };
  
  const Result = ({result}) => (
    <div className="result">{result}</div>
  );
  
  const Reset = ({ reset }) => (
    <div className="reset" onClick={reset}>reset</div>
  );
  
  const Button = ({ onClick, children }) => (
    <button onClick={onClick}> {children} </button>
  );
  
  const InputBox = ({ value, updateSteps }) => (
    <div>
      <input type="number" value={value} onChange={updateSteps} />    
      <div className="tip">(Pssst, you can change this value)</div> 
      <small>Made with ♥ by <a href="https://dankoknad.github.io/" target="_blank">Danko</a></small>
    </div> 
  );
  
  ReactDOM.render(<Counter />, document.getElementById('app'));