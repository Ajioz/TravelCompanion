import { makeStyles } from '@mui/styles'
import { alpha, useTheme } from '@mui/material/styles'


export default makeStyles(() => ({
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        [useTheme().breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: useTheme().shape.borderRadius,
        borderBottom: 'solid gray 1px',
        borderLeft: 'solid gray 1px',
        padding: '0 5px',
        backgroundColor: alpha(useTheme().palette.common.white, 0.15),
        '&:hover': { backgroundColor: alpha(useTheme().palette.common.white, 0.25) },
        marginRight: useTheme().spacing(2),
        marginLeft: 0,
        width: '100%',
        [useTheme().breakpoints.up('sm')]: { marginLeft: useTheme().spacing(3), width: 'auto' },
    },
    searchIcon: {
        padding: useTheme().spacing(0, 20), 
        height: '100%', 
        position: 'absolute', 
        pointerEvents: 'none', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: useTheme().spacing(1, 1, 1, 1), 
        paddingLeft: `calc(1em + ${useTheme().spacing(4)}px)`, 
        transition: useTheme().transitions.create('width'), 
        width: '100%', 
        [useTheme().breakpoints.up('md')]: { width: '20ch' },
    },
    toolbar: {
        display: 'flex', 
        justifyContent: 'space-between',
        marginBottom: '40px'
    },
})) 