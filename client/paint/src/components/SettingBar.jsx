import React from 'react';
import toolState from "../store/toolState";

const SettingBar = () => {
    return (
        <div className="setting-bar">
            <label htmlFor="line-width">Толщина линии</label>
            <input
                onChange={e => toolState.setLineWidth(e.target.value)}
                id="line-width" type="number"
                style={{margin: "0 10px"}}
                defaultValue={1}
                min={1}
                max={50}
            />
            <label htmlFor="stroke-color">Цвет обводки</label>
            <input id="stroke-color" type="color" onChange={e => toolState.setStrokeColor(e.target.value)}/>
        </div>
    );
};

export default SettingBar;