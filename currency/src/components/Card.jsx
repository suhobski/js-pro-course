import React, {useCallback, useEffect, useState, useRef} from 'react';
import {Card, CardContent, CardHeader, makeStyles, MenuItem, Select, TextField} from "@material-ui/core";
import CurrencyService from "../CurrencyService";
import Portal from './Portal';

const useStyles = makeStyles({
    root: {
        display: 'grid',
        gridTemplateColumns: "1fr auto",
        gap: 20,
    }
})

const Card1 = ({ id }) => {
    const [currInBYN, setCurInBYN] = useState(0);
    const [currencies, setCurrencies] = useState([]);
    const [result, setResult] = useState(0);
    const [currentCurrency, setCurrentCurrency] = useState({});
    const classes = useStyles();

    const currId = useRef(0);
    const currId1 = useRef(id)


    const calculateResult = useCallback(() => {
        if (!currId.current || !currId1.current) {
            return;
        }
        const res1 = currencies.find(({ Cur_ID }) => Cur_ID == currId1.current);
        const Cur_OfficialRate1 = res1.Cur_OfficialRate;
        const Cur_Scale1 = res1.Cur_Scale;
        const firstValInBYN = currInBYN / Cur_Scale1 * Cur_OfficialRate1;
        
        const res = currencies.find(({ Cur_ID }) => Cur_ID === currId.current);
        const { Cur_OfficialRate, Cur_Scale } = res;
        setResult( firstValInBYN / Cur_OfficialRate * Cur_Scale);
    }, [currencies, currInBYN]);

    const onBynValChange = useCallback((ev) => {
        setCurInBYN(+ev.target.value);
        calculateResult();
    }, [calculateResult]);

    const onCurrChange = useCallback((ev) => {
        currId.current = ev.target.value;
        calculateResult();
    }, [currencies, currInBYN, calculateResult]);

    const onFirstCurrencyChange = ((ev) => {
        currId1.current = ev.target.value;
        calculateResult();
        addModal(currId1.current)
    })

    useEffect(() => {
        calculateResult();
    }, [currInBYN])

    useEffect(() => {
        const fetchCurrencies = async () => {
            const currencies = await CurrencyService.fetchCurrencies([145, 298, 292, 290]);
            setCurrencies(currencies);
        }
        fetchCurrencies();
    }, []);

    // добавление модального окна
        
    const addModal = (id) => {
        setCurrentCurrency(currencies.find(({ Cur_ID }) => Cur_ID === id))
    }

    return (
        <div>
            <h1>{id}</h1>
            {
                currencies.length !== 0 &&
                    <div>
                        <CardHeader title={'Converter'}/>
                        <CardContent>
                            <form className={classes.root} noValidate autoComplete="off">
                                <TextField
                                    value={currInBYN}
                                    // label="I an buy"
                                    onChange={onBynValChange}
                                />
                                <Select onChange={onFirstCurrencyChange} defaultValue="">
                                    {
                                        currencies.map(({ Cur_ID, Cur_Abbreviation }) => <MenuItem
                                            value={Cur_ID}
                                            key={Cur_ID}
                                        >{ Cur_Abbreviation }
                                        </MenuItem>)
                                    }
                                </Select>
                                <TextField disabled value={result} /*label={'For, BYN'}*/ />
                                <Select onChange={onCurrChange} defaultValue="">
                                    {
                                        currencies.map(({ Cur_ID, Cur_Abbreviation }) => <MenuItem
                                            value={Cur_ID}
                                            key={Cur_ID}
                                        >{ Cur_Abbreviation }
                                        </MenuItem>)
                                    }
                                </Select>
                            </form>
                        </CardContent>
                    </div>
            }
            {
                currentCurrency && 
                    <Portal>
                        <p>Cur_Abbreviation: {currentCurrency.Cur_Abbreviation}</p>
                        <p>Cur_ID: {currentCurrency.Cur_ID}</p>
                        <p>Cur_OfficialRate: {currentCurrency.Cur_OfficialRate}</p>
                        <p>Cur_Scale: {currentCurrency.Cur_Scale}</p>
                    </Portal>
            }  
        </div>
    )
};

export default Card1;
