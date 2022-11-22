import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../../styles/index2.css';
import React from 'react';
import { PanelMenu } from 'primereact/panelmenu';

const PanelMenu2 = () => {
    const items = [
        {
            label:'Prise de rendez-vous',
            icon:'pi pi-calendar',
            items:[
                {
                    label:'Nouveau rendez-vous',
                    icon:'pi pi-circle-fill ',
                    url: '/rendez-vous'
                },
                {
                    label:'Historique',
                    icon:'pi pi-circle-fill',
                    url: '/historique'
                },
               
            ]
        },
        
    ];

    return (
        <div>
            <div className='modal-menu'>
                <PanelMenu model={items} style={{ width: '16rem', backgroundColor:'#fff' }}/>
            </div>
        </div>
    );
}
                
export default PanelMenu2;