import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState('');
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const f = parseFloat(feet);
    const i = parseFloat(inches);

    if (!w || !f || f < 0 || i < 0 || w <= 0) {
      setBmi(null);
      setCategory('Please enter valid inputs');
      return;
    }

    const totalInches = f * 12 + i;
    const heightM = totalInches * 0.0254;
    const bmiValue = (w / (heightM * heightM)).toFixed(2);
    setBmi(bmiValue);

    let cat = '';
    if (bmiValue < 18.5) cat = 'Underweight';
    else if (bmiValue < 24.9) cat = 'Normal weight';
    else if (bmiValue < 29.9) cat = 'Overweight';
    else cat = 'Obese';

    setCategory(cat);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.title}>💪 BMI Calculator</h1>
        <div style={styles.inputGroup}>
          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <input
            type="number"
            placeholder="Height (ft)"
            value={feet}
            onChange={(e) => setFeet(e.target.value)}
            style={styles.input}
          />
          <input
            type="number"
            placeholder="Height (in)"
            value={inches}
            onChange={(e) => setInches(e.target.value)}
            style={styles.input}
          />
        </div>
        <button onClick={calculateBMI} style={styles.button}>Calculate BMI</button>
        {bmi && (
          <div style={styles.resultBox}>
            <p>Your BMI is <strong>{bmi}</strong></p>
            <p>Category: <strong>{category}</strong></p>
          </div>
        )}
        {!bmi && category && <p style={{ color: 'red', marginTop: '1rem' }}>{category}</p>}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: '100vh',
    width: '100vw',
    background: 'linear-gradient(to right, #6a11cb, #2575fc)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    boxSizing: 'border-box',
  },
  card: {
    background: 'white',
    padding: '2rem',
    borderRadius: '20px',
    maxWidth: '420px',
    width: '100%',
    boxShadow: '0 12px 30px rgba(0,0,0,0.2)',
    textAlign: 'center',
  },
  title: {
    marginBottom: '1.5rem',
    fontSize: '2rem',
    color: '#333',
  },
  inputGroup: {
    display: 'flex',
    gap: '10px',
    marginBottom: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  input: {
    flex: 1,
    padding: '12px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    minWidth: '120px'
  },
  button: {
    padding: '14px 28px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '1rem',
    width: '100%'
  },
  resultBox: {
    marginTop: '1.5rem',
    fontSize: '18px',
    color: '#333'
  }
};

export default App;
