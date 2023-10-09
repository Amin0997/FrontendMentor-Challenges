import './ModeSwitchBtn.scss'

function ModeSwitchBtn(props) {

    const handleThemeChange = () => {
        props.onThemeChange();
    };

    return (
        <div className='mode-switch'>
            <h4>Dark Mode</h4>
            <label htmlFor="toggle-switch" className="switcher">
            <input
                type="checkbox"
                id="toggle-switch"
                onClick={handleThemeChange}
                />
            <span className="slider"></span>
            </label>
        </div>
    )
}

export default ModeSwitchBtn
