import React, {useEffect, useState} from 'react';
import css from './Navigation.module.css'

import checkedImgFalse from '../../assets/Checkbox_false.svg'
import checkedImgTrue from '../../assets/Checkbox_true.svg'


const CheckBox = ({check, setCheck, text}) => (
    <label className={css.checkedItem}>
        <input className={css.mainCheckBox} type="checkbox" checked={check} onChange={() => setCheck( !check)} />
        <img src={check ? checkedImgTrue : checkedImgFalse} alt="checked"/>
        <span className={css.checkedText}>{text}</span>
    </label>
)



const Navigation = () => {

    const [checkAll, setCheckAll] = useState(false)
    const [checkNone, setCheckANone] = useState(false)
    const [checkOne, setCheckOne] = useState(false)
    const [checkTwo, setCheckTwo] = useState(false)
    const [checkThree, setCheckThree] = useState(false)

    useEffect( () => {
        // if( checkNone && checkOne && checkTwo && checkThree ) {
        //     setCheckAll(true)
        // } else if(!checkNone || !checkOne || !checkTwo || !checkThree) {
        //     setCheckAll(false)
        // } else if(checkAll) {
        //     setCheckANone(true)
        //     setCheckOne(true)
        //     setCheckTwo(true)
        //     setCheckThree(true)
        // }
        console.log('fetch')
    }, [checkNone, checkOne, checkTwo, checkThree, checkAll])

    return (
        <div className={css.root}>
            <h2 className={css.titleBlock}>Количество пересадок</h2>

            <CheckBox check={checkAll} setCheck={setCheckAll} text='Все' />
            <CheckBox check={checkNone} setCheck={setCheckANone} text='Без пересадок'/>
            <CheckBox check={checkOne} setCheck={setCheckOne} text='1 пересадка'/>
            <CheckBox check={checkTwo} setCheck={setCheckTwo} text='2 пересадка'/>
            <CheckBox check={checkThree} setCheck={setCheckThree} text='3 пересадка'/>
        </div>
    );
};

export default Navigation;