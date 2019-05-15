import React, { Component } from 'react';

class SearchForm extends Component {
    state = {}
    render() {
        return (
            <form>
                <div class="form-row">
                    <div class="col-4">
                        <input type="text" class="form-control" placeholder="First name" />
                    </div>
                    <div class="col-2">
                        <input type="text" class="form-control" placeholder="Mid Initial" />
                    </div>
                    <div class="col-4">
                        <input type="text" class="form-control" placeholder="Last name" />
                    </div>
                    <div class="col-1">
                        <button className="btn btn-primary">Find</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default SearchForm;