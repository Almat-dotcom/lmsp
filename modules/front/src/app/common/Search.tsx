import React from 'react'
import './Search.css'
import Search from "antd/es/input/Search";

class SearchBox extends React.Component<any, any> {
  render() {
    // return <div className={"search-container"}><input type="text" className={"search-input"}/></div>
    return <Search className={"search-input"} {...this.props}/>
  }
}

export default SearchBox;