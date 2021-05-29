import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

export interface AccueilProps extends RouteComponentProps<{}>{

}

export class AccueilContainer extends  React.Component<AccueilProps, {}> {
    constructor(props: AccueilProps) {
        super(props);

        // this.state = {
        //     program: Object.assign({}, this.props.program),
        //     errors: {} as IDictionnary
        // };

        // this.onValueChangeSetState = this.onValueChangeSetState.bind(this);
        // this.onSave = this.onSave.bind(this);
    }

    render() {
        return (
            <>
                <h1>Choisit ta voiture de rêve !</h1>
                <hr />
                <div>

                </div>
            </>
        );
    }

}

const mapStateToProps = (state: {}) => {
    // const programCode = ownProps.match.params.code;

    return {

    };
}

const mapDispatchToProps = (dispatch: any) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AccueilContainer)