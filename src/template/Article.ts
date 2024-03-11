export default class Article {

    constructor(private title: string, private content: string[], private footer: string) {}

    getTitle(): string {
        return this.title;
    }

    getContent(): string[] {
        return this.content;
    }

    getFooter(): string {
        return this.footer;
    }
}