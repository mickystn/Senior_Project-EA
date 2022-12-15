import '../css/home.css' ;
import Navbar from '../component/navbar';
import { Fragment } from 'react';
import BoxVdo1 from '../component/com-home/ContentBoxVdo1';
import ContenBox1 from '../component/com-home/ContentBox1';
import Scolltotop from '../component/com-home/ScollToTop';
import Footers from '../component/com-home/footer';
import Formlogin from '../component/com-singin/formlogin';

function home() {
    return (
        <div>
            <Navbar></Navbar>
            <body>
            <div class="landingpage">
                <ContenBox1></ContenBox1>
                <section class="vdo" >
                    <BoxVdo1></BoxVdo1>
                </section>
                <Fragment>
                    <Scolltotop></Scolltotop>
                </Fragment>
            </div>
            <section>
                <Footers></Footers>
            </section>


            

        </body>
        </div>
    );
  }
  
  export default home;
  