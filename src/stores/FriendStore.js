import { observable } from 'mobx';

class FriendStore {
    @observable goodFriends = ['Shia Lebeouf', 'Mark Hamill']
    @observable greatFriends = ['Matt Compton', 'Jay Sargent']
    @observable ultraFriends = ['Prakarsh Gupta', 'Spencer Johnson', 'Isaiah Olson']
    @observable bestFriends = ['Nick McQueen', 'Matt Bodily']
}

const store = window.store = new FriendStore;

export default store;