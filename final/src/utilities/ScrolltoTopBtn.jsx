import React, {useState} from 'react';
import '../components/Header/header.css'

export default function ScrolltoTopBtn() {

    const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
    const scrolled = window.scrollY;
    if (scrolled >= 100){
        setVisible(true)
    } 
    else if (scrolled < 100){
        setVisible(false)
    }
    };
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };
    window.addEventListener('scroll', toggleVisible);

    return (
        <div>
            <i className={ visible ? `bi bi-arrow-up-circle-fill scrollBtn` : `none`} onClick={scrollToTop} 
        style={{
            right: visible ? '1.5%' : '-5%',
            opacity:visible ? 1 : 0
            }}></i>
        </div>
    )
}
