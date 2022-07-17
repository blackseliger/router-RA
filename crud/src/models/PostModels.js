import moment from "moment";
import shortid from "shortid";

export default class PostModel {
    constructor(text) {
        this.id = 0;
        this.content = text;
        // this.time = moment().format('HH:mm');
    }
}