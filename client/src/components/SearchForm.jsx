import React, { Component } from 'react';

class SearchForm extends Component {
    state = {}
    render() {
        return (
            <form id="searchForm" onSubmit={this.props.search}>
                <div className="form-row">
                    <div className="col-4">
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>
                    <div className="col-2">
                        <input type="text" className="form-control" defaultValue="" placeholder="Mid Initial" />
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                    <div className="col-1">
                        <button className="btn btn-primary">Find</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default SearchForm;