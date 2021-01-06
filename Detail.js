import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state===undefined){
            //home으로 리다이렉트 시킨다
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        if(location.state){
            return <span>{location.state.title}</span>
        } else{
            return null;
        }
    }
}
export default Detail;