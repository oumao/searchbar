import React from 'react';

const SearchBar = (props) => {
  
    // const handleChange = (event) => {
    //     this.setState({value: event.target.value});
    // }

    const handleSubmit = (e) => e.preventDefault();

    return(
        <>
            <div className="jumbotron mt-3">
                <form onSubmit={handleSubmit}>
                    <div className="">
                        <input className="form-control" onChange={props.onChange} type="text" name="search" value={props.value}/>
                    </div>
                </form>
            </div>
        </>
    );

}

export default SearchBar;