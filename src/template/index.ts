import Article from "./Article";
import EditableDisplayArticle from "./EditableDiaplayArticle";
import SimpleDisplayArticle from "./SimpleDisplayArticle";


/*
Template Method패턴은 어떤 기능을 구성하는 각 실행 순서(단계)를 미리 정하고 
각 실행 단계에 대한 구체적인 코드를 재정의할 수 있는 유연성을 제공.
*/

const article = new Article(
    "title LEO",
    [
        "CONTENT1: textTEXT1",
        "CONTENT2: textTEXT2",
        "CONTENT3: textTEXT3"
    ],
    "LEO | company"
)

const display = new SimpleDisplayArticle(article);
document.querySelector('.content').innerHTML = display.displayHtml();

document.querySelector(".edit-mode").addEventListener('change', (event) => {
    let display;

    if((<HTMLInputElement>event.target).checked) {
        display = new EditableDisplayArticle(article)
    } else {
        display = new SimpleDisplayArticle(article)
    }

    document.querySelector('.content').innerHTML = display.displayHtml();
})