import React, {useEffect, useState} from 'react';

import css from './AviasalesList.module.css'
import { makeRequest } from "../../api";

const AviasalesList = () => {

    const [ fetch, setFetch ] = useState([])

    useEffect( () => {
      makeRequest('get', 'https://front-test.beta.aviasales.ru/search')
          .then( res => {
              console.log(res)
          const data = res.data
              return setFetch(data)
          })
    }, [])

    console.log('12121', fetch)

    return (
        <div className={css.root}>
            list of avia
        </div>
    );
};

export default AviasalesList;