
import logo from './logo.svg';
import './App.css';
import PurchaseForm from './components/PurchaseForm';

function App() {
    const handlePurchaseSubmit = (data) => {
        console.log("Submitted purchase data:", data);
        // Aqui você pode chamar a API de backend para salvar a compra no banco de dados
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <main>
                <h1>Purchase Control</h1>
                <PurchaseForm onSubmit={handlePurchaseSubmit} />           
            </main>
            <footer className="App-footer">
                <p>Developed by</p>
            </footer>
        </div>
    );
}

export default App;
