import { useParams } from 'react-router-dom';

import "./lead_details.css"

function LeadDetailsComponent (){
    const { homebuyer_id } = useParams();
    return(
        <>
        <header className='header'>
            <section>
                <div>
                  <nav className='backSection'>
                    <a href='#'className='btn-back'>
                     <span>Back</span>   
                    </a>
                  </nav>
                </div>
            </section>
        </header>
        </>
    )
}
export default LeadDetailsComponent ;