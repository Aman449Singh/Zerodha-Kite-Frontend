import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
    return ( 
                <div className='container p-5 mt-5'>
                <div className='row'>
                    <div className='col p-5 mt-5' >
                        <h1 className='mt-4'>404 Not Found</h1>
                <p>Kiaan couldn’t find that page</p>
                <p>We couldn’t find the page you were looking for. Visit <Link class="Abc" to="/">Zerodha’s Home page</Link></p>
                    </div>
                <div className='col'>
                    <img src='media/images/NotFound.png' style={{width:"60%"}}></img>
                </div>
                </div>
          

        </div>
     );
}

export default OpenAccount;