import { observable, decorate } from 'mobx'

class HomeStore {
    @observable refresh = "This is text";
    // decorate(HomeStore, {
    //     refresh: observable
    // })

}


export default new HomeStore;
