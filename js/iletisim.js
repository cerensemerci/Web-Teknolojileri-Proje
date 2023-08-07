const { useState } = React;


const Iletisim=()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [city, setCity] = useState('');
    const [gender, setGender] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleReset = () => {
      setName('');
      setEmail('');
      setMessage('');
      setCity('');
      setGender('');
      setErrorMessage('');
    };

    const handleConsoleLog = () => {
      console.log('Ad Soyad:', name);
      console.log('Email:', email);
      console.log('Mesaj:', message);
      console.log('Şehir:', city);
      console.log('Cinsiyet:', gender);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      // Form verilerini işleme kodunu buraya ekleyin

      if (!name || !email || !message||!gender||!city) {
        setErrorMessage('Lütfen tüm alanları doldurun.');
        return;
      }
      const formData = {
        name: name,
        email: email,
        message: message,
        city: city,
        gender: gender
      };
      console.log(formData);
      
      // Verileri localStorage'ye kaydetme
      localStorage.setItem('formData', JSON.stringify(formData));
      
      // Verileri başka bir sayfada kullanmak üzere redirect işlemi
      window.location.href = "iletisim2.html";
      setErrorMessage('');
    };
  
    const formStyle = {
      margin: "0 auto",
      marginTop:"100px",
      maxWidth: "38%",
      left:"50%"
    };
  
    const btnStyle = {
      position: "fixed",
      marginTop: "50px",
      left: "45%",
      transform: "translate(-50%, -50%)"
    };
  
    const buttonStyle = {
      position: "fixed",
      marginTop: "50px",
      left: "55%",
      transform: "translate(-50%, -50%)"
    };
  
    const radioContainerStyle = {
      marginTop: "25px",
     
    };
  
    return (
      <div style={formStyle}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Ad Soyad</label>
            <input 
            type="text" 
            id="name" 
            className="form-control" 
            value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email </label>
            <input 
            type="email" 
            id="email" 
            className="form-control" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mesaj Alanı</label>
            <textarea 
            className="form-control" 
            id="message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label style={{  marginTop: "25px",marginLeft:"30px"}} htmlFor="city">Şehir</label>
                <select style={{  marginTop: "25px",marginLeft:"20px",width:"80px"}} name="sehir-name" id="city" value={city} onChange={(e) => setCity(e.target.value)}>
                 
                <option value="izmir">İzmir</option>
                  <option value="samsun">Samsun</option>
                  <option value="adana">Adana</option>
                  <option value="manisa">Manisa</option>
                  <option value="gaziantep">Gaziantep</option>
                  <option value="rize">Rize</option>
                  <option value="mugla">Muğla</option>
                  <option value="sivas">Sivas</option>
                  <option value="istanbul">İstanbul</option>
                  <option value="ankara">Ankara</option>
                  <option value="sakarya">Sakarya</option>
                  <option value="antalya">Antalya</option>
                </select>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <div className="radio-container" style={radioContainerStyle}>
                  <label>Cinsiyet</label>
                  <div>
                    <label htmlFor="female">
                      <input type="radio" id="female" name="gender" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
                      Kız
                    </label>
                    <br />
                  </div>
                  <label htmlFor="male">
                    <input type="radio" id="male" name="gender" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} />
                    Erkek
                  </label>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
          {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit" style={btnStyle} className="btn btn-dark"  onClick={handleConsoleLog}>GÖNDER</button>
          </div>
          <div className="form-group">
         
          <button
            type="button"
            onClick={handleReset}
            style={{ marginLeft: '20px', ...buttonStyle }}
            className="btn btn-dark btn-2"
          >
            Temizle
          </button>
          </div>
        </form>
      </div>
    );
}
const root = document.querySelector("#root");
ReactDOM.render(React.createElement(Iletisim), root);