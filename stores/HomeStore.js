import { observable, decorate } from 'mobx'

class HomeStore {
    @observable refresh = "This is text";
    @observable ipAddress = "";
    @observable chatBot = [
        
    ]
    @observable Name = ""
    // decorate(HomeStore, {
    //     refresh: observable
    // })

}


export default new HomeStore;
