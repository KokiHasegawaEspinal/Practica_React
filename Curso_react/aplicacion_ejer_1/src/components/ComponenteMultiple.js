

const ComponenteMultiple=({opcion, dias})=>{

    const calculoCosteHotel=()=>{

        let coste=dias*50;

        if(dias>5) coste-=35;
        else if(dias>3) coste-=25;
        return coste; //mejora de ChatGpt
        //return <p>Coste estacia Hotel: {coste}</p>

    };


    const calculoAlquilerCoche=()=>{

        let coste=dias*45;

        if(dias>7) coste-=30;
        else if(dias>3) coste-=15;
        return coste;
        //return <p>Coste alquiler Coche: {coste}</p>

    };

    return (//<div>{opcion===1?calculoCosteHotel():opcion===2?calculoAlquilerCoche():""}</div>
        <div>
            {opcion ===1 && <p>Coste estancia Hotel:{calculoCosteHotel()}</p>}
            {opcion ===2 && <p>Coste alquiler Coche: {calculoAlquilerCoche()}</p>}
        </div>
    );

};


export default ComponenteMultiple;