import React, {useState, useEffect} from 'react'
import {AppBar, Typography, Container, Avatar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Myimage from "../../assets/avatar.jpg";


    
    const Covid = () =>{
        const [data, setData] = useState([]);
        const fetchData = async()=>{
        const data= await fetch("https://api.covid19api.com/total/dayone/country/nepal");
        const actualData= await data.json();
        actualData.reverse();
        setData(actualData);
        console.log(actualData);
    }

    useEffect(() => {
        fetchData();  
    }, [])
    const useStyles = makeStyles((theme)=>({
        appbarContainer: {
            marginTop: 17,
        },
        root: {
            marginTop: 17,
            width: '100%',
        },
        container: {
            maxHeight: 520,
        },
        recovery: {
            color: '#4bb543',
        },
        avatarContainer: {
            marginTop: 17,
            marginBottom: 17,
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        large: {
            width: theme.spacing(18),
            height: theme.spacing(18),
        },
    }))
    
    const classes= useStyles();

    const tableHeader = ['Date','Recovered','Deaths', 'Confirmed','Active'];

    return (
        <Container maxWidth="lg" align="center">
        <AppBar color="secondary" position="sticky" className={classes.appbarContainer}>
            <Typography variant="h5" align= "center" color= "#fff">COVID-19 STATUS IN NEPAL</Typography>
        </AppBar>
        <Paper className={classes.root} elevation={3}>
            <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table" size="medium">
                <TableHead >
                    <TableRow>
                        {
                            tableHeader.map((item, key)=>
                              <TableCell key={key} align="center"><Typography variant="h6" color= "textPrimary">{item}</Typography></TableCell>  
                            )
                        }
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                        {
                            data.map((item, key)=>
                                <TableRow key={key} hover={true}>
                                <TableCell align="center"><Typography variant="subtitle2" color= "textPrimary">{item.Date.split('T')[0]}</Typography></TableCell>
                                <TableCell align="center"><Typography variant="subtitle2" className={classes.recovery}>{item.Recovered}</Typography></TableCell>
                                <TableCell align="center"><Typography variant="subtitle2" color= "error">{item.Deaths}</Typography></TableCell>
                                <TableCell align="center"><Typography variant="subtitle2" color= "textPrimary">{item.Confirmed}</Typography></TableCell>
                                <TableCell align="center"><Typography variant="subtitle2" color= "textPrimary">{item.Active}</Typography></TableCell>
                                </TableRow>
                            )
                        }
                    
                </TableBody>
            </Table>
        </TableContainer>
        </Paper>
        <Paper elevation={3} className={classes.avatarContainer}>
            <Avatar alt="manoj-pudasaini" src={Myimage} variant="circular" className={classes.large}/>
            <Typography variant="h6" color="textSecondary">&#169; Manoj Pudasaini</Typography>
        </Paper>
       </Container> 
    )
}

export default Covid;
