/* eslint-disable react/prop-types */

const SoloCounter = ({ handleCounterDec, handleCounterInc, counter }) => {
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <button style={{ padding: '10px' }} onClick={handleCounterDec}>-</button>
                <button style={{ paddingRight: '10px', paddingLeft: '10px' }}>{counter}</button>
                <button style={{ padding: '10px' }} onClick={handleCounterInc}>+</button>
            </div>
        </div>
    )
}

export default SoloCounter
