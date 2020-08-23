import React from 'react';

class MiComponente extends React.Component {

    render() {

        let receta =  {
                        nombre: 'Pizza',
                        calorias: 400,
                        ingredientes: ['Queso', 'Tomate', 'Jamón']
        }

        return (
            <div>
                <ul>
                    <li>Nombre: {receta.nombre}</li>
                    <li>Calorías: {receta.calorias}</li>
                    
                </ul>


            </div>


        );

    }

}

export default MiComponente;
