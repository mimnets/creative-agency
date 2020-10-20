import { Avatar, CardContent, CardHeader, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Card } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    }
  }));

const Clients = ({reviews}) => {
    const classes = useStyles();
    return (
        
                <div className="col-md-4 d-flex">
                        <Card className={classes.root}>
                    <CardHeader
                        avatar={
                        <Avatar aria-label={reviews.img} className={classes.avatar}>
                            <img src={reviews.img} alt=""/>
                        </Avatar>
                        }
                        
                        title={reviews.name}
                        subheader={reviews.designation}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {reviews.review}
                        </Typography>
                    </CardContent>
                    </Card>
                </div>
    );
};

export default Clients;