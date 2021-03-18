import React from 'react';


interface IProps{
    data: string;
}
class classComponent extends React.Component <IProps>{
    constructor(props: IProps){
        super(props);
        this.state ={};
    }
    
    render(){
        return <h1>Привет, Я кдассный компоненет!</h1>
    }
}
export default classComponent;