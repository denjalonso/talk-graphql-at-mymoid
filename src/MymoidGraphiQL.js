import React from 'react';
import GraphiQL from 'graphiql';

export default class MymoidGraphiQL extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // REQUIRED:
            // `fetcher` must be provided in order for GraphiQL to operate
            fetcher: this.props.fetcher,

            // OPTIONAL PARAMETERS
            // GraphQL artifacts
            query: '',
            variables: '',
            response: '',

            // GraphQL Schema
            // If `undefined` is provided, an introspection query is executed
            // using the fetcher.
            schema: undefined,


            // Useful to determine which operation to run
            // when there are multiple of them.
            operationName: null,
            storage: null,
            defaultQuery: null,

            // Custom Event Handlers
            onEditQuery: null,
            onEditVariables: null,
            onEditOperationName: null,

            // GraphiQL automatically fills in leaf nodes when the query
            // does not provide them. Change this if your GraphQL Definitions
            // should behave differently than what's defined here:
            // (https://github.com/graphql/graphiql/blob/master/src/utility/fillLeafs.js#L75)
            getDefaultFieldNames: null
        };
    }

    _onClickToolbarButton(event) {
        alert('Clicked toolbar button!');
    }

    render() {
        return (
            <GraphiQL>
                <GraphiQL.Logo>
                    Custom Logo
                </GraphiQL.Logo>
                <GraphiQL.Toolbar>
                    // GraphiQL.ToolbarButton usage
                    <GraphiQL.ToolbarButton
                        onClick={this._onClickToolbarButton}
                        title="ToolbarButton"
                        label="Click Me as well!"
                    />
                    // Some other possible toolbar items
                    <button name="GraphiQLButton">Click Me</button>
                    <OtherReactComponent someProps="true"/>
                </GraphiQL.Toolbar>
                <GraphiQL.Footer>
                    // Footer works the same as Toolbar
                    // add items by appending child components
                </GraphiQL.Footer>
            </GraphiQL>
        );
    }
}