import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import Content from 'components/SeatsManagement/Content';
import AdminTemplates from 'components/AdminTemplates';
import { React, useState, } from 'react';


export default function SeatsManagement(props) {
    const [openNav, setOpenNav] = useState(false);

    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
      }
    return (

        <AdminTemplates>

            <div className='  ml-0 xl:ml-64  mt-28 text-white ' role="presentation" onClick={handleClick}>
                <Breadcrumbs className='pl-5' aria-label="breadcrumb">
                    <Link underline="hover" className='hover:underline' to="/" color="inherit" >
                        Home
                    </Link>
                    <Typography color="text.primary" className='underline'>Seats Management</Typography>
                </Breadcrumbs>
            </div>
            <div className='mb-12'>
                <Content />
            </div>
        </AdminTemplates>
    );
}
