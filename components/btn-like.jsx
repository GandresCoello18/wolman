import React from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';

const BntLike = (props) => {
    return(
        <>
            <Button as='div' labelPosition='right'>
                <Button icon color='blue'>
                    <Icon name='heart' />
                    Like
                </Button>
                <Label as='a' basic pointing='left'>
                    2,048
                </Label>
            </Button>
        </>
    );
}

export default BntLike;