import React from 'react';
import {withStyles} from '@material-ui/core';
import * as _ from 'lodash';
import Icon from '@material-ui/core/Icon';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actions} from '../../redux/actions';

const style = () => ({
    root: {
        display: 'flex',
        minHeight: 50,
    },
    colorContainer: {
        display: 'flex',
        padding: '0 25px',
        flexGrow: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
});

const selectPreviousModel = (models, selectedModel) => {
    const index = _.indexOf(models, selectedModel);
    if (index <= 0) {
        return models[models.length - 1];
    }

    return models[index - 1];
};

const selectNextModel = (models, selectedModel) => {
    const index = _.indexOf(models, selectedModel);
    if (index === models.length - 1) {
        return models[0];
    }

    return models[index + 1];
};

const ModelChooser = (props) => {
    const {models, classes, actions, key, group, selectedModel} = props;

    const selectModel = (selectedModel) => {
        actions.selectModel(selectedModel, group);
    };

    return (
        <div key={key} className={classes.root}>
            <div className={'selection-icon'} onClick={() => {
                selectModel(selectPreviousModel(models, selectedModel));
            }}>
                <Icon>keyboard_arrow_left</Icon>
            </div>
            <div className={'color-container'}></div>
            <div className={classes.colorContainer}>
                {
                    _.map(models, (model, index) => {
                        return (
                            <div key={'model' + index} className={model === selectedModel ? `model-selected ` : `model-not-selected`}>
                                <div className={`model-icon`} onClick={() => selectModel(model)}>
                                    {model.index}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <div className={'selection-icon'} onClick={() => {
                selectModel(selectNextModel(models, selectedModel));
            }}>
                <Icon>keyboard_arrow_right</Icon>
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        selectedModel: state.model[ownProps.group],
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(ModelChooser));
