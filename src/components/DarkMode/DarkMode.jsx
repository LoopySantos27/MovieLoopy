import './DarkMode.css';

const DarkMode=()=> {

    //Variables para setear el modo dentro del body del documento para referenciar los
    //Elementos que se tienen que cambiar
    const setDarkTheme = ()=>{
        document.querySelector('body').setAttribute('data-theme', 'dark');
        localStorage.setItem('SelectedTheme', 'dark')
    };

    const setLightTheme = ()=>{
        document.querySelector('body').setAttribute('data-theme', 'light');
        localStorage.setItem('selectedTheme', 'light');
    }

    //Aqui agarramos y comparamos el tema seleccionado para setear al como default en la pagina
    const selectedTheme = localStorage.getItem('selectedTheme')
    if(selectedTheme === 'light')
    {
        setLightTheme();
    } else{
        setDarkTheme();
    }

    const toggleTheme = (e) =>{
        if(e.target.checked){
           
            setDarkTheme()
        } else{
            setLightTheme();
        }
    }

  return (
    <div className='dark_mode'>
        <input 
            type="checkbox"
            className='dark_mode_input'
            id='darkmode-toggle'
            onChange={toggleTheme}
            defaultChecked= {selectedTheme !== 'light'}
        />
        <label className='dark_mode_label' htmlFor="darkmode-toggle">
            
        </label>
    </div>
  )
}

export default DarkMode
