import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { GiCheckMark , GiCrossMark } from 'react-icons/gi'

const Hiererchy = () => {

    const icon = {
        color: 'green'
    }

    const cross = {
        color: 'red'
    }

    return (
        <Card style={{ margin: '6px' }}>
            <CardContent>

                <div style={{ display: 'flex' }}>

                    <Card sx={{ minWidth: 275, flex: '1', marginRight: '5px' }}>
                        <CardContent>
                            <Typography variant='h6'>Fresher to 5 years: <GiCheckMark style={icon} /></Typography>
                            <Typography variant='h7'>Advance: <GiCheckMark style={icon} /></Typography>
                            <body2>Diploma,Bachelor,Master,Phd: <GiCheckMark style={icon} /></body2>
                        </CardContent>
                    </Card>



                    <Card sx={{ minWidth: 230, flex: '1', marginRight: '5px' }}>
                        <CardContent>
                            <Typography variant='h6'>Fresher to 5 years: <GiCheckMark style={icon} /></Typography>
                            <Typography variant='h7'>Competent + Proficient: <GiCheckMark style={icon} /></Typography>
                            <body2>Bachelor,Master,Phd: <GiCheckMark style={icon} /></body2>
                        </CardContent>
                    </Card>



                    <Card sx={{ minWidth: 275, flex: '1', marginLeft: '5px' }}>
                        <CardContent>
                            <Typography variant='h6'>More than 5 years: <GiCheckMark style={icon} /></Typography>
                            <Typography variant='h7'>Proficient + Experts: <GiCheckMark style={icon} /></Typography>
                            <body2>Bachelor,Master,Phd: <GiCheckMark style={icon} /></body2>
                        </CardContent>
                    </Card>

                </div>

            </CardContent>


            <CardContent>

                <div style={{ display: 'flex' }}>

                    <Card sx={{ minWidth: 275, flex: '1', marginRight: '5px' }}>
                        <CardContent>
                            <Typography variant='h6'>Skill Analytics: <GiCheckMark style={icon} /></Typography>
                            <Typography variant='h6'>Work Evidence: <GiCrossMark style={cross} /></Typography>
                            <Typography variant='h6'>Verified Profiles: <GiCrossMark style={cross} /></Typography>
                            <Typography variant='h6'>Direct Engagement: <GiCheckMark style={icon} /></Typography>
                            <Typography variant='h6'>Shedule Interview: <GiCheckMark style={icon} /></Typography>
                            <Typography variant='h6'>Conduct an Assesement: <GiCrossMark style={cross} /></Typography>
                        </CardContent>
                    </Card>



                    <Card sx={{ minWidth: 230, flex: '1', marginRight: '5px' }}>
                        <CardContent>
                            <Typography variant='h6'>Skill Analytics: <GiCheckMark style={icon} /></Typography>
                            <Typography variant='h6'>Work Evidence: <GiCheckMark style={icon} /></Typography>
                            <Typography variant='h6'>Verified Profiles: <GiCrossMark style={cross} /></Typography>
                            <Typography variant='h6'>Direct Engagement: <GiCheckMark style={icon} /></Typography>
                            <Typography variant='h6'>Shedule Interview: <GiCheckMark style={icon} /></Typography>
                            <Typography variant='h6'>Conduct an Assesement: <GiCrossMark style={cross} /></Typography>
                        </CardContent>
                    </Card>



                    <Card sx={{ minWidth: 275, flex: '1', marginLeft: '5px' }}>
                        <CardContent>
                            <Typography variant='h6'>Skill Analytics: <GiCheckMark style={icon} /></Typography>
                            <Typography variant='h6'>Work Evidence: <GiCheckMark style={icon} /></Typography>
                            <Typography variant='h6'>Verified Profiles: <GiCheckMark style={icon} /></Typography>
                            <Typography variant='h6'>Direct Engagement: <GiCheckMark style={icon} /></Typography>
                            <Typography variant='h6'>Shedule Interview: <GiCheckMark style={icon} /></Typography>
                            <Typography variant='h6'>Conduct an Assesement: <GiCheckMark style={icon} /></Typography>
                        </CardContent>
                    </Card>

                </div>

            </CardContent>
        </Card>
    )
}

export default Hiererchy