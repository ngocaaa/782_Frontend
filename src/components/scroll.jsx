class App extends React.Component {
    render(){
        return (
            <ScrollArea>
                <Content />
            </ScrollArea>
        );
    }
}
 
class Content extends React.Component {
    render(){
        return (
            <div onClick={this.handleSomeAction.bind(this)}> LERI is a content management system for researchers. The product is divided into 3 main applications, the frontend, the backend application, and the researchers' panel application. - The learning resources are divided into 4 categories namely programs, modules, activities, tasks **(PMAT)**. All the entities are individual and hence highly reusable. A program can have multiple modules and a module can have multiple tasks and activities. 

            </div>
        );
    }
 
    handleSomeAction(){
        this.context.scrollArea.refresh();
    }
}
 
Content.contextTypes = {
    scrollArea: React.PropTypes.object
};