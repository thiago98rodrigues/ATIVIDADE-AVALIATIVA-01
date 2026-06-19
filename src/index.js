import React from 'react';
import ReactDOM from 'react-dom/client';

function Cabecalho(props) {
  return (<header><h1>{props.nome}</h1></header>)
}

class PacienteForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
                  nome: '',
                  idade: '',
                  cidade: '',
                  sexo: '',
                  atendimento: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    const evtName = event.target.name
    this.setState({[evtName]: event.target.value})
  }

  handleSubmit(event){
    alert(`
          Paciente ${this.state.nome}\n
          Idade: ${this.state.idade} anos\n
          Cidade: ${this.state.cidade}\n
          Sexo: ${this.state.sexo}\n
          Tipo de atendimento: ${this.state.atendimento}`)
      event.preventDefault()
  }

  render(){
    return(<form onSubmit={this.handleSubmit}>
      <input name='nome'value={this.state.nome} placeholder='Nome' onChange = {this.handleChange} ></input><br/>
      <input type='number' name='idade'value={this.state.idade} placeholder='Idade' onChange = {this.handleChange} ></input><br/>
      <input name='cidade'value={this.state.cidade} placeholder='Cidade' onChange = {this.handleChange} ></input><br/>
      <select name='sexo' value={this.state.sexo} onChange={this.handleChange}>
        <option value='' selected disabled hidden>Selecione o sexo</option>
        <option value='Masculino'>Masculino</option>
        <option value='Feminino'>Feminino</option>
        <option value='Outro'>Outro</option>
      </select><br/>

      <select name='atendimento' value={this.state.atendimento} onChange={this.handleChange}>
        <option value='' selected disabled hidden>Selecione o tipo de atendimento</option>
        <option value='Consulta'>Consulta</option>
        <option value='Exame'>Exame</option>
        <option value='Retorno'>Retorno</option>
        <option value='Emergência'>Emergência</option>
      </select><br/>
     
      <input type='submit' value='Cadastrar'></input>
      <hr />
    </form>)
  }
}

class RelogioDigital extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount(){
    this.timerID = setInterval(()=>{
      this.setState({date: new Date()});
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  render(){
    return (<div>Relógio Digital: {this.state.date.toLocaleTimeString()}</div>)
  }
}

function App() {
  return (<div>
    <Cabecalho nome="Clínica Saúde+" />
    <PacienteForm />
    <br/>
    <RelogioDigital/>
  </div>)
}


 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);
