import {observable, action} from 'mobx';
import {getTrendingItems} from '../utils/api';

class Trending {
  @observable resultItems = [];

  @observable isLoading = false;

  @action fetchResults() {
    this.isLoading = true;
    getTrendingItems()
      .then(result => {
        this.isLoading = false;
        this.resultItems = result.data;
      });
  }
};

const trendingStore = new Trending();

export default trendingStore;