import React from 'react';
import '../styles/listproducts2.css';
import mazamorra from '../assets/Mazamorra.jpg'
import bandeja from '../assets/bandeja.jpg'
import sancocho from '../assets/sancocho-colombiano.jpg'

const ListProducts2 = () => {
    return (
        <div className="grid-container">
            <div className="grid-item">
                <img className='picsfood' src = {bandeja} alt = "bandeja"/>
                <div className='flex-options'>
                    <div className="descripcion">Bandeja Paisa</div>
                    <button className="btn-options">Saber más</button>
                </div>
            </div>
            <div className="grid-item">
                <img className='picsfood' src = {mazamorra} alt = "mazamorra"/>
                <div className='flex-options'>
                <div className="descripcion">Mazamorra</div>
                    <button className="btn-options">Saber más</button>
                </div>
            </div>
            <div className="grid-item">
                <img className='picsfood' src = {sancocho} alt = "sancocho"/>
                <div className='flex-options'>
                <div className="descripcion">Sancocho</div>
                    <button className="btn-options">Saber más</button>
                </div>
            </div>
            <div className="grid-item">
                <img className='picsfood' src = {bandeja} alt = "bandeja"/>
                <div className='flex-options'>
                    <div className="descripcion">Bandeja Paisa</div>
                    <button className="btn-options">Saber más</button>
                </div>
            </div>
            <div className="grid-item">
                <img className='picsfood' src = {mazamorra} alt = "mazamorra"/>
                <div className='flex-options'>
                <div className="descripcion">Mazamorra</div>
                    <button className="btn-options">Saber más</button>
                </div>
            </div>
            <div className="grid-item">
                <img className='picsfood' src = {sancocho} alt = "sancocho"/>
                <div className='flex-options'>
                <div className="descripcion">Sancocho</div>
                    <button className="btn-options">Saber más</button>
                </div>
            </div>
        </div>
    );
};

export default ListProducts2;
