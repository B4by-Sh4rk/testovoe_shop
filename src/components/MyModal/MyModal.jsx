import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import cl from './MyModal.module.css'

const MyModal = ({visible, setVisible}) => {

    const rootClasses = [cl.myModal];

    if(visible){
        rootClasses.push(cl.active);
    }

    const ref__name = useRef();
    const ref__email = useRef();
    const ref__tel = useRef();
    const [order__name, setOrder__name] = useState('');
    const [order__tel, setOrder__tel] = useState('');
    const [order__email, setOrder__email] = useState('');
    const [order__nameOff, setOrder__nameOff] = useState(false);
    const [order__telOff, setOrder__telOff] = useState(false);
    const [order__emailOff, setOrder__emailOff] = useState(false);
    const [order__nameError, setOrder__nameError] = useState('Поле не может быть пустым');
    const [order__telError, setOrder__telError] = useState('Поле не может быть пустым');
    const [order__emailError, setOrder__emailError] = useState('Поле не может быть пустым');
    const [formValid, setFormValid] = useState(false);

    const form = useRef();
    useEffect( () => {
        if(order__telError || order__nameError || order__emailError){
            setFormValid(false);
        }else{
            setFormValid(true);
        }
    }, [order__nameError || order__telError || order__emailError])

    const order__nameHandler = (e) =>{
        setOrder__name(e.target.value)
        const re = /[А-я,Ё,ё]/;
        if(!re.test(String(e.target.value))){
            setOrder__nameError('Поле заполнено некорректно');
        } else {
            setOrder__nameError('');
        }
    }   
    const order__emailHandler = (e) =>{
        setOrder__email(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(e.target.value))){
            setOrder__emailError('Поле заполнено некорректно');
        } else {
            setOrder__emailError('');
        }
    }   

    const order__telHandler = (e) =>{
        setOrder__tel(e.target.value)
        const re = /(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/;
        if(!re.test(String(e.target.value))){
            setOrder__telError('Поле заполнено некорректно');
        } else {
            setOrder__telError('');
        }
    }        

    const blurHandler = (e) => {
        switch(e.target.name){
            case 'order__name':
                setOrder__nameOff(true);
                break;
            case 'order__tel':
                setOrder__emailOff(true);
                break;
            case 'order__tel':
                setOrder__telOff(true);
                break;
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();
        ref__name.current.value = '';
        ref__email.current.value = '';
        ref__tel.current.value = '';
        emailjs.sendForm('service_n7t2a3j', 'template_4ft3glm', form.current, 'jry7NycqUneGYSJtj')
          .then((result) => {
              console.log(result.text);

          }, (error) => {
              console.log(error.text);
              ref__name.current.value = '';
              ref__email.current.value = '';
              ref__tel.current.value = '';
          });
          ref__name.current.value = '';
          ref__email.current.value = '';
          ref__tel.current.value = '';
          if( (ref__tel.current.value = '') || (ref__name.current.value = '') || (ref__email.current.value = '')){
            setVisible(false);
          }else{
            ref__name.current.value = '';
            ref__email.current.value = '';
            ref__tel.current.value = '';
            setVisible(false);
          }
      };



    return (
        <div className={rootClasses.join((' '))} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
            <form ref={form} onSubmit={sendEmail} className='order__form'>
            {(order__nameOff && order__nameError) && <div className='error__msg'>{order__nameError}</div>}
            <input ref={ref__name}  onChange={e => order__nameHandler(e)} value={order__name} onBlur={e => blurHandler(e)} name='order__name' className='form__input' type="text" placeholder='Имя'></input>
            {(order__emailOff && order__emailError) && <div className='error__msg'>{order__emailError}</div>}
            <input ref={ref__email}  onChange={e => order__emailHandler(e)} value={order__email} onBlur={e => blurHandler(e)} name='order__email' className='form__input' type="email" placeholder='mail@mail.ru'></input>
            {(order__telOff && order__telError) && <div className='error__msg'>{order__telError}</div>}
            <input  ref={ref__tel} onChange={e => order__telHandler(e)} value={order__tel} onBlur={e => blurHandler(e)} name='order__tel' className='form__input'  type="text" pattern="[0-9]*" placeholder='7(999)999-99-99'></input>
            <select name='order__game' className='form__select' required>
            <option value="">Выберите товар</option>
            <option value="Animal Crossing">Animal Crossing</option>
            <option value="Minecraft">Minecraft</option>
            <option value="Fortnite">Fortnite</option>
            <option value="Genshin Impact">Genshin Impact</option>
            </select>
            <button disabled={!formValid} className='form__button' type='submit' value="Send">ЗАКАЗАТЬ</button>
        </form>
            </div>
        </div>
    );
};

export default MyModal;