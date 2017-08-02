import {observable, action} from 'mobx';
import {getSearchResultItems} from '../utils/api';

class Search {
  @observable keyword = '';
  @observable resultItems = [];

  @observable isLoading = false;

  @action updateKeyword(text) {
    this.keyword = text;
  }

  @action fetchResults() {
    this.isLoading = true;
    getSearchResultItems(this.keyword)
      .then(result => {
        this.isLoading = false;
        this.resultItems = result.data;
      });
  }
};

const searchStore = new Search();

export default searchStore;